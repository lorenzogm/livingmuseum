#!/bin/bash

# Script to download and convert the CondeduqueMadrid image to WebP format
# Usage: ./scripts/download-and-convert-image.sh

set -e

IMAGE_URL="https://www.condeduquemadrid.es/sites/default/files/2025-09/IMG_2425.JPG"
OUTPUT_DIR="public/content/articles/convocatoria-residencias-living-museum-25-26/images"
OUTPUT_FILE="$OUTPUT_DIR/convocatoria-residencias-featured.webp"
TEMP_FILE="/tmp/IMG_2425.JPG"

echo "Downloading image from CondeduqueMadrid..."
curl -o "$TEMP_FILE" "$IMAGE_URL"

echo "Converting to WebP format..."
cwebp -q 80 "$TEMP_FILE" -o "$OUTPUT_FILE"

echo "Cleaning up temporary file..."
rm "$TEMP_FILE"

echo "Image successfully downloaded and converted to: $OUTPUT_FILE"
echo "The featured image has been updated!"