---
mode: "agent"
description: This mode is used to generate UI designs in Figma.
model: GPT-5 mini
tools: ['runCommands', 'runTasks', 'editFiles', 'runNotebooks', 'search', 'new', 'extensions', 'codebase', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'findTestFiles', 'searchResults', 'githubRepo', 'todos', 'runTests', 'filesystem', 'memory', 'sequentialthinking', 'figma', 'playwright']
---

# Get icon from figma

Use the figma MCP to find the get the current selected component from the given link and download all the icons from the selection

1. Open Figma project using the selection link provided
2. Use Figma MCP to get the current selected component from the given link
3. Download all the icons from the selection using the Figma MCP download function
4. Create a new directory called icons inside shared/ui/src if not present
5. Create individual directories for each icon under the icons directory
6. Create SVG files for each icon based on the downloaded content or standard icon patterns
7. Make sure there are no duplicate icons in the icons directory
8. Create React components for each icon from the SVGs in the icons directory
9. Create an index.ts file to export all icon components
10. Clean up any downloaded non-SVG files (PNG, etc.) after creating the SVG versions and React components
