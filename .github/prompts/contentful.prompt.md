---
description: MCP Contentful interaction mode – manage Content Types & Entries using workspace content model as source of truth.
model: GPT-5 mini
tools: ['runCommands', 'runTasks', 'editFiles', 'search', 'codebase', 'usages', 'filesystem', 'memory', 'sequentialthinking', 'contentful']
---

# Contentful MCP Prompt

Purpose: Provide a rigorous, spec‑driven workflow for creating, updating, validating, and documenting Contentful Content Types and Entries. The workspace directory `docs/specs/contentful-content-model/` is the canonical source of truth. Any change performed through the Contentful MCP MUST round‑trip back into that directory (add or modify markdown specs) in the same session.

## Canonical Content Model Directory

Path: `docs/specs/contentful-content-model/`

Current documented Content Types (keep in alphabetical order when updating):
- `article`
- `config`
- `content-item`
- `content-list`
- `content-section`
- `image`
- `layout`
- `link`
- `page`
- `video`

Summary index file: `_summary.md` (contains architectural overview & relationships). Always update relationships here when adding/removing content types or new references.

## Operating Principles

1. Spec First: Never create or modify a Content Type in Contentful without first (or simultaneously) updating its spec markdown file locally.
2. Idempotency: All generation operations must be repeatable; no random IDs—use deterministic IDs (e.g., camelCase) defined in the spec.
3. Traceability: Each Content Type change must include: reason, impacted fields, migration strategy (additive, replacement, deprecation) appended to the bottom of that type’s markdown under a "Changelog" heading (create if missing).
4. Safety: Prefer additive (non-breaking) modifications. Flag destructive operations (field removals / type changes) explicitly with a REQUIRED confirmation note.
5. Localization: Explicitly mark each field Localized: Yes/No; ensure consistency with spec.
6. Validation Coverage: Every field requires documented validation (required, unique, regex, min/max length, reference constraints, allowed values, cardinality for arrays).
7. Relationship Integrity: Entry reference fields must list allowed content types (subset, not wildcard).

## Required Sections in Each Content Type Spec

```
# <Readable Name> Content Type

## Content Type Details
- **ID**: <id>
- **Name**: <emoji + name>
- **Display Field**: <fieldId>
- **Description**: <purpose>

## Fields
| Field Name | Field ID | Type | Localized | Required | Validations | Description |
| ---------- | -------- | ---- | --------- | -------- | ----------- | ----------- |
| Title | title | Symbol | No | Yes | maxLength: 120 | Human readable title |

## Relationships
| Field ID | References | Cardinality | Notes |
| -------- | ---------- | ----------- | ----- |
| heroImage | image | 0..1 | Optional featured image |

## Changelog
| Date (ISO) | Change | Type | Rationale | Migration |
| ---------- | ------ | ---- | --------- | --------- |
| 2025-08-30 | Initial spec | add | First definition | n/a |
```

## Entry Authoring Workflow

When creating an Entry via MCP:
1. Load spec for target Content Type.
2. Validate required fields present in user input (reject / prompt if missing).
3. Auto-populate defaultable fields (document these defaults in spec if not already there).
4. Perform local validation (lengths, regex, enum) before calling Contentful.
5. On success, write or append an `entries/` log file: `docs/specs/contentful-content-model/entries/<contentTypeId>.log.md` with an appended line: `| <ISO timestamp> | <entryId> | <environment> | created | summary... |` (create header if file is new).

## Content Type Update Workflow

1. Read current markdown spec.
2. Diff requested changes vs existing fields.
3. Classify each field change:
	- addField
	- modifyValidation (compatible?)
	- deprecateField (retain for read, mark deprecated)
	- removeField (breaking)
4. Refuse to perform removeField without explicit user confirmation string: `CONFIRM BREAKING CHANGE <fieldId>`.
5. Generate migration note in Changelog table with migration category (additive/breaking/deprecate) and instructions.
6. Apply MCP Contentful schema mutation only after local spec updated & saved.

## Validation Rules Reference

| Type | Typical Validations |
| ---- | ------------------- |
| Symbol | maxLength, regex |
| Text | maxLength |
| Rich Text | allowedMarks, allowedNodeTypes |
| Boolean | (none or required) |
| Integer/Number | min/max |
| Array | size range, items type, reference whitelist |
| Link (Entry) | allowedContentTypes (explicit list) |
| Link (Asset) | mimeTypeGroup |

## MCP Commands (Conceptual)

The `contentful` tool should support (conceptual verbs – adapt to actual implementation):
- listContentTypes
- getContentType <id>
- createContentType <id> (requires pre-existing spec)
- updateContentType <id>
- deprecateField <contentTypeId> <fieldId>
- removeField <contentTypeId> <fieldId>
- createEntry <contentTypeId>
- updateEntry <contentTypeId> <entryId>
- getEntry <entryId>
- listEntries <contentTypeId>

Always echo: planned changes → validation summary → confirmation request (if destructive) → execution → result summary.

## Consistency Checks Before Any Mutation

1. Spec file exists & parses required sections.
2. Field table covers (Display Field) reference.
3. Changelog table present (create if absent).
4. Relationship constraints consistent with referenced Content Types.
5. No duplicate Field IDs.

If any check fails: halt and emit remediation steps.

## Updating the Summary Diagram

When adding/removing a reference field or a content type, update `_summary.md` mermaid diagram nodes & edges. Keep styling classes consistent.

## Security & Safety

- Never embed access tokens or secrets in the prompt or spec files.
- Do not expose raw Contentful API responses containing internal system fields unless explicitly requested.
- Redact PII fields (if any) when logging entries; retain only IDs / essential metadata.

## Logging & Audit

Maintain append-only logs for:
- Content Type changes: `content-types.changelog.md` (root of content model dir) summarizing each spec change (one-line entries referencing individual type Changelog rows).
- Entry creations: per-type log files in `entries/`.

## Example One-Line Change Log Entry
`2025-08-30 page addField seoKeywords additive (no migration needed)`

---

Follow `../instructions/qa/qa.instructions.md` for quality commands if validation or test scripts are added around schema generation.
