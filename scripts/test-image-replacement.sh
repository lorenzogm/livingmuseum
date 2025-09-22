#!/bin/bash

# Test script to update the featured image in the JSON file
# This will test our image replacement workflow

set -e

JSON_FILE="public/content/articles/convocatoria-residencias-living-museum-25-26/convocatoria-residencias-living-museum-25-26.json"
NEW_IMAGE_PATH="/content/articles/convocatoria-residencias-living-museum-25-26/images/convocatoria-residencias-featured-new.webp"

echo "Testing image replacement workflow..."

# Check if JSON file exists
if [ ! -f "$JSON_FILE" ]; then
    echo "Error: JSON file not found: $JSON_FILE"
    exit 1
fi

# Create a backup
cp "$JSON_FILE" "$JSON_FILE.backup"
echo "✅ Created backup: $JSON_FILE.backup"

# Show current featuredImage
echo "Current featuredImage:"
grep "featuredImage" "$JSON_FILE"

# Update the featuredImage path
sed -i "s|\"featuredImage\": \"[^\"]*\"|\"featuredImage\": \"$NEW_IMAGE_PATH\"|g" "$JSON_FILE"

echo ""
echo "Updated featuredImage:"
grep "featuredImage" "$JSON_FILE"

echo ""
echo "✅ Image replacement test completed!"
echo "✅ The JSON file has been updated to use the new image."
echo ""
echo "To revert the test changes:"
echo "  cp $JSON_FILE.backup $JSON_FILE"