#!/bin/bash

# Download videos for Living Museum Madrid website
echo "Downloading videos for Living Museum Madrid..."

# Create videos directory if it doesn't exist
mkdir -p public/videos

# Download all videos
echo "Downloading Quiénes Somos video..."
curl -L -o "public/videos/quienes-somos.mp4" "https://livingmuseum.madrid/wp-content/uploads/2025/01/1_QuienesSomosnuevo.mp4"

echo "Downloading Artists video..."
curl -L -o "public/videos/artistas.mp4" "https://livingmuseum.madrid/wp-content/uploads/2025/01/4_Artistasnuevo.mp4"

echo "Downloading News video..."
curl -L -o "public/videos/noticias.mp4" "https://livingmuseum.madrid/wp-content/uploads/2025/01/2_Actualidadnuevo.mp4"

echo "Downloading Projects video..."
curl -L -o "public/videos/proyectos.mp4" "https://livingmuseum.madrid/wp-content/uploads/2025/01/Secuencia-01.mp4"

echo "Downloading Collaboration video..."
curl -L -o "public/videos/colabora.mp4" "https://livingmuseum.madrid/wp-content/uploads/2025/01/5_Colaboranuevo.mp4"

echo "All videos downloaded successfully!"
echo "Videos location: public/videos/"
echo "Total size: $(du -sh public/videos/ | cut -f1)"
