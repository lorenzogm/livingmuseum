#!/bin/bash

# Script to copy featured images from public/quienes-somos/artists to their respective artist folders
echo "Copying featured images from quienes-somos/artists..."

# Source directory
SRC_DIR="/Users/lorenzogm/lorenzogm/livingmuseum/public/quienes-somos/artists"

# Ensure destination directories exist
mkdir -p /Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/{zarco,gabriel-pastor-guzman,blanca-valcarce-quiroga,fernando-jose-escrina,miguel-angel-ruiz,gustavo-pannullo-gap,carlos-molina-vallejo,manuel-vela,jose-manuel-lopez}

# Copy the images with appropriate names
cp "${SRC_DIR}/zarco.jpg" "/Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/zarco/zarco-featured.jpg"
cp "${SRC_DIR}/gabriel-pastor.jpg" "/Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/gabriel-pastor-guzman/gabriel-featured.jpg"
cp "${SRC_DIR}/blanca-valcarce.jpg" "/Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/blanca-valcarce-quiroga/blanca-featured.jpg"
cp "${SRC_DIR}/fernando-escrina.jpg" "/Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/fernando-jose-escrina/fernando-featured.jpg"
cp "${SRC_DIR}/miguel-angel.jpg" "/Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/miguel-angel-ruiz/miguel-featured.jpg"
cp "${SRC_DIR}/gustavo-pannullo.jpg" "/Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/gustavo-pannullo-gap/gustavo-featured.jpg"
cp "${SRC_DIR}/carlos-molina.jpg" "/Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/carlos-molina-vallejo/carlos-featured.jpg"
cp "${SRC_DIR}/manuel-vela.jpg" "/Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/manuel-vela/manuel-featured.jpg"
cp "${SRC_DIR}/jose-manuel.jpg" "/Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/jose-manuel-lopez/jose-featured.jpg"

echo "Featured image copy complete!"
