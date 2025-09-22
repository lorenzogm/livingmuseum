#!/bin/bash

# One-step image replacement for Convocatoria article
# Usage: ./scripts/replace-convocatoria-image.sh

set -e

echo "🖼️  CONVOCATORIA IMAGE REPLACEMENT TOOL"
echo "======================================"
echo ""
echo "This script will help you replace the featured image for the"
echo "CONVOCATORIA III Residencias artísticas «LIVING MUSEUM 25-26» article."
echo ""
echo "Google Drive Folder: https://drive.google.com/drive/folders/1BBoS2bJuKCcX5rtqjIFTPfnrVT8j1_vw"
echo ""

# Check if URL was provided as argument
if [ -n "$1" ]; then
    GDRIVE_URL="$1"
    echo "Using provided URL: $GDRIVE_URL"
else
    echo "Please provide the Google Drive image URL:"
    echo ""
    echo "Steps to get the URL:"
    echo "1. Open the Google Drive folder (link above)"
    echo "2. Find the image you want to use"
    echo "3. Right-click → 'Get link'"
    echo "4. Make sure it's set to 'Anyone with the link can view'"
    echo "5. Copy the URL"
    echo ""
    read -p "Paste the Google Drive URL here: " GDRIVE_URL
fi

echo ""
echo "🔄 Starting image replacement process..."

# Call the main download script
if ./scripts/download-gdrive-image.sh "$GDRIVE_URL"; then
    echo ""
    echo "🎉 SUCCESS! Image replacement completed!"
    echo ""
    echo "✅ New image downloaded and converted to WebP format"
    echo "✅ Article configuration updated"
    echo "✅ Backup of original configuration created"
    echo ""
    echo "The website will now display the new image."
    echo ""
    echo "To test locally, run:"
    echo "  npm run dev"
    echo "  Then visit: http://localhost:3000/actualidad/convocatoria-residencias-living-museum-25-26"
    echo ""
    echo "To revert changes if needed:"
    echo "  cp public/content/articles/convocatoria-residencias-living-museum-25-26/convocatoria-residencias-living-museum-25-26.json.backup public/content/articles/convocatoria-residencias-living-museum-25-26/convocatoria-residencias-living-museum-25-26.json"
else
    echo ""
    echo "❌ FAILED! Image replacement failed."
    echo ""
    echo "Common solutions:"
    echo "1. Make sure the Google Drive file is publicly accessible"
    echo "2. Check that the URL is correct and complete"
    echo "3. Ensure you're using an image file (JPG, PNG, WebP, etc.)"
    echo ""
    echo "Need help? Check the IMAGE_REPLACEMENT_GUIDE.md file for detailed instructions."
    exit 1
fi