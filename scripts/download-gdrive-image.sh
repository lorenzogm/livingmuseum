#!/bin/bash

# Script to download image from Google Drive and convert to WebP format
# Usage: ./scripts/download-gdrive-image.sh [GOOGLE_DRIVE_FILE_ID_OR_URL]
# For Google Drive folder: https://drive.google.com/drive/folders/1BBoS2bJuKCcX5rtqjIFTPfnrVT8j1_vw

set -e

# Check if parameter is provided
if [ -z "$1" ]; then
    echo "Error: Google Drive file ID or URL is required"
    echo "Usage: $0 [GOOGLE_DRIVE_FILE_ID_OR_URL]"
    echo ""
    echo "You can provide either:"
    echo "  1. File ID: 1234567890abcdef"
    echo "  2. Full Google Drive URL: https://drive.google.com/file/d/1234567890abcdef/view"
    echo "  3. Direct download URL: https://drive.google.com/uc?export=download&id=1234567890abcdef"
    echo ""
    echo "To get the file from the Google Drive folder:"
    echo "1. Open: https://drive.google.com/drive/folders/1BBoS2bJuKCcX5rtqjIFTPfnrVT8j1_vw"
    echo "2. Right-click on the image you want to use"
    echo "3. Select 'Get link' and make sure it's set to 'Anyone with the link'"
    echo "4. Copy the link and use it with this script"
    exit 1
fi

# Extract file ID from different URL formats
GDRIVE_FILE_ID=""
if [[ "$1" =~ ^https://drive\.google\.com/file/d/([a-zA-Z0-9_-]+) ]]; then
    GDRIVE_FILE_ID="${BASH_REMATCH[1]}"
    echo "Extracted file ID from URL: $GDRIVE_FILE_ID"
elif [[ "$1" =~ ^https://drive\.google\.com/uc\?.*id=([a-zA-Z0-9_-]+) ]]; then
    GDRIVE_FILE_ID="${BASH_REMATCH[1]}"
    echo "Extracted file ID from download URL: $GDRIVE_FILE_ID"
elif [[ "$1" =~ ^[a-zA-Z0-9_-]+$ ]]; then
    GDRIVE_FILE_ID="$1"
    echo "Using provided file ID: $GDRIVE_FILE_ID"
else
    echo "Error: Invalid Google Drive file ID or URL format"
    echo "Please provide a valid Google Drive file ID or URL"
    exit 1
fi

OUTPUT_DIR="public/content/articles/convocatoria-residencias-living-museum-25-26/images"
TEMP_FILE="/tmp/gdrive_image.jpg"
OUTPUT_FILE="$OUTPUT_DIR/convocatoria-residencias-featured-new.webp"
JSON_FILE="public/content/articles/convocatoria-residencias-living-museum-25-26/convocatoria-residencias-living-museum-25-26.json"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Downloading image from Google Drive (File ID: $GDRIVE_FILE_ID)..."

# Try different Google Drive download URLs
GDRIVE_URL="https://drive.google.com/uc?export=download&id=$GDRIVE_FILE_ID"

# Download the file
curl -L -o "$TEMP_FILE" "$GDRIVE_URL"

# Check if the downloaded file is actually an image
if ! file "$TEMP_FILE" | grep -q "image"; then
    echo "Error: Downloaded file is not an image. Please check the file ID and ensure the file is publicly accessible."
    rm -f "$TEMP_FILE"
    exit 1
fi

echo "Converting to WebP format..."
# Check if cwebp is available
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp is not installed. Please install webp tools:"
    echo "sudo apt-get update && sudo apt-get install webp"
    rm -f "$TEMP_FILE"
    exit 1
fi

cwebp -q 80 "$TEMP_FILE" -o "$OUTPUT_FILE"

echo "Cleaning up temporary file..."
rm "$TEMP_FILE"

echo "Image successfully downloaded and converted to: $OUTPUT_FILE"
echo ""
echo "Now updating the JSON configuration..."

# Update the JSON file to use the new image
if [ -f "$JSON_FILE" ]; then
    # Create a backup of the original JSON file
    cp "$JSON_FILE" "$JSON_FILE.backup"
    echo "Created backup: $JSON_FILE.backup"
    
    # Update the featuredImage path in the JSON file
    NEW_IMAGE_PATH="/content/articles/convocatoria-residencias-living-museum-25-26/images/convocatoria-residencias-featured-new.webp"
    
    # Use sed to replace the featuredImage line
    sed -i "s|\"featuredImage\": \"[^\"]*\"|\"featuredImage\": \"$NEW_IMAGE_PATH\"|g" "$JSON_FILE"
    
    echo "✅ Updated featuredImage in JSON file to: $NEW_IMAGE_PATH"
    echo "✅ The article will now use the new image!"
    echo ""
    echo "To revert changes, restore the backup:"
    echo "  cp $JSON_FILE.backup $JSON_FILE"
else
    echo "⚠️  JSON file not found: $JSON_FILE"
    echo "Please manually update the featuredImage field to:"
    echo "  \"$NEW_IMAGE_PATH\""
fi