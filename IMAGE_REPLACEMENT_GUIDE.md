# Image Replacement for Convocatoria Article

This document explains how to replace the featured image for the "CONVOCATORIA III Residencias artísticas «LIVING MUSEUM 25-26»" article.

## Quick Start

To replace the featured image with one from the Google Drive folder:

1. **Get the image URL from Google Drive:**
   - Open the Google Drive folder: https://drive.google.com/drive/folders/1BBoS2bJuKCcX5rtqjIFTPfnrVT8j1_vw
   - Find the image you want to use
   - Right-click on the image → "Get link"
   - Make sure it's set to "Anyone with the link can view"
   - Copy the sharing URL

2. **Run the download script:**
   ```bash
   ./scripts/download-gdrive-image.sh "PASTE_THE_GOOGLE_DRIVE_URL_HERE"
   ```

3. **That's it!** The script will:
   - Download the image from Google Drive
   - Convert it to WebP format for optimal performance
   - Update the article configuration to use the new image
   - Create a backup of the original configuration

## Example Usage

```bash
# If you have a Google Drive sharing URL like this:
# https://drive.google.com/file/d/1AbC2DeF3GhI4JkL5MnO6PqR7StU8VwX9YzA/view?usp=sharing

./scripts/download-gdrive-image.sh "https://drive.google.com/file/d/1AbC2DeF3GhI4JkL5MnO6PqR7StU8VwX9YzA/view?usp=sharing"
```

## What Happens

1. **Image Download:** The script extracts the file ID from your Google Drive URL and downloads the image
2. **Format Conversion:** Converts the image to WebP format (better performance, smaller file size)
3. **File Placement:** Saves the image as `convocatoria-residencias-featured-new.webp`
4. **Configuration Update:** Updates the JSON file to reference the new image
5. **Backup Creation:** Creates a backup of the original configuration

## Files Modified

- **New Image:** `public/content/articles/convocatoria-residencias-living-museum-25-26/images/convocatoria-residencias-featured-new.webp`
- **Updated Config:** `public/content/articles/convocatoria-residencias-living-museum-25-26/convocatoria-residencias-living-museum-25-26.json`
- **Backup Created:** `public/content/articles/convocatoria-residencias-living-museum-25-26/convocatoria-residencias-living-museum-25-26.json.backup`

## Reverting Changes

If you need to revert to the original image:

```bash
cp public/content/articles/convocatoria-residencias-living-museum-25-26/convocatoria-residencias-living-museum-25-26.json.backup public/content/articles/convocatoria-residencias-living-museum-25-26/convocatoria-residencias-living-museum-25-26.json
```

## Troubleshooting

### "Error: Downloaded file is not an image"
- Make sure the Google Drive file is publicly accessible
- Ensure the URL points to an actual image file (JPG, PNG, WebP, etc.)
- Try right-clicking the image in Google Drive and selecting "Open in new tab" to get a direct link

### "Error: cwebp is not installed"
- Install WebP tools: `sudo apt-get update && sudo apt-get install webp`

### "Error: Invalid Google Drive file ID or URL format"
- Make sure you're using a proper Google Drive sharing URL
- The URL should look like: `https://drive.google.com/file/d/FILE_ID/view`

## Current Image

The current featured image is: `convocatoria-residencias-featured-objetivos.webp`

Location: `/content/articles/convocatoria-residencias-living-museum-25-26/images/convocatoria-residencias-featured-objetivos.webp`

## Need Help?

If you encounter any issues:

1. Check that the Google Drive folder is publicly accessible
2. Ensure you're copying the complete sharing URL
3. Try the test script first: `./scripts/test-image-replacement.sh`
4. Contact the development team for assistance