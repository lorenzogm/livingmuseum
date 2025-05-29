#!/bin/bash

# Download artist images from Living Museum Madrid website
BASE_URL="https://livingmuseum.madrid/wp-content/uploads"

# Create artist directories
mkdir -p public/artistas/{zarco,gabriel-pastor-guzman,blanca-valcarce-quiroga,fernando-jose-escrina,miguel-angel-ruiz,gustavo-pannullo-gap,carlos-molina-vallejo,manuel-vela,jose-manuel-lopez}

# Download featured images and artworks
echo "Downloading artist images..."

# Zarco
curl -o public/artistas/zarco/zarco-featured.jpg "https://livingmuseum.madrid/wp-content/uploads/2025/01/zarco-portada.jpg" || echo "Failed to download zarco featured"
curl -o public/artistas/zarco/un-gitano-bailando-sevillanas.jpg "${BASE_URL}/2025/01/Un-gitano-bailando-Sevillanas-scaled.jpg" || echo "Failed to download zarco artwork 1"
curl -o public/artistas/zarco/comic-ufo-1.jpg "${BASE_URL}/2025/01/UFO-1-scaled.jpg" || echo "Failed to download zarco artwork 2"
curl -o public/artistas/zarco/comic-ufo-2.jpg "${BASE_URL}/2025/01/UFO-2-scaled.jpg" || echo "Failed to download zarco artwork 3"
curl -o public/artistas/zarco/comic-mayka-1.jpg "${BASE_URL}/2025/01/Mayka-1-scaled.jpg" || echo "Failed to download zarco artwork 4"
curl -o public/artistas/zarco/comic-mayka-2.jpg "${BASE_URL}/2025/01/Mayka-2-scaled.jpg" || echo "Failed to download zarco artwork 5"

# Gabriel Pastor Guzmán
curl -o public/artistas/gabriel-pastor-guzman/gabriel-featured.jpg "${BASE_URL}/2025/01/gabriel-pastor-portada.jpg" || echo "Failed to download gabriel featured"
curl -o public/artistas/gabriel-pastor-guzman/love-music-hate-racism.jpg "${BASE_URL}/2025/01/LoveMusic-HateRacism-scaled.jpg" || echo "Failed to download gabriel artwork 1"
curl -o public/artistas/gabriel-pastor-guzman/busto-frontal.jpg "${BASE_URL}/2025/01/Busto-frontal-scaled.jpg" || echo "Failed to download gabriel artwork 2"
curl -o public/artistas/gabriel-pastor-guzman/busto-posterior.jpg "${BASE_URL}/2025/01/Busto-posterior-scaled.jpg" || echo "Failed to download gabriel artwork 3"

# Blanca Valcarce Quiroga
curl -o public/artistas/blanca-valcarce-quiroga/blanca-featured.jpg "${BASE_URL}/2025/01/blanca-valcarce-portada.jpg" || echo "Failed to download blanca featured"
curl -o public/artistas/blanca-valcarce-quiroga/mujer-y-mariposas.jpg "${BASE_URL}/2025/01/Mujer-y-mariposas-scaled.jpg" || echo "Failed to download blanca artwork 1"

# Fernando José Escriña
curl -o public/artistas/fernando-jose-escrina/fernando-featured.jpg "${BASE_URL}/2025/02/fernando-jose-escrina-portada.jpg" || echo "Failed to download fernando featured"
curl -o public/artistas/fernando-jose-escrina/el-payaso-rufo.jpg "${BASE_URL}/2025/02/El-payaso-Rufo-Fernando-scaled.jpg" || echo "Failed to download fernando artwork 1"

# Miguel Ángel Ruiz
curl -o public/artistas/miguel-angel-ruiz/miguel-featured.jpg "${BASE_URL}/2025/01/miguel-angel-ruiz-portada.jpg" || echo "Failed to download miguel featured"
curl -o public/artistas/miguel-angel-ruiz/barco-pirata.jpg "${BASE_URL}/2025/01/Barco-pirata-scaled.jpg" || echo "Failed to download miguel artwork 1"

# Gustavo Pannullo (G.A.P.)
curl -o public/artistas/gustavo-pannullo-gap/gustavo-featured.jpg "${BASE_URL}/2025/01/gustavo-pannullo-portada.jpg" || echo "Failed to download gustavo featured"
curl -o public/artistas/gustavo-pannullo-gap/cocteau.jpg "${BASE_URL}/2025/01/Portada-artista_Cocteau-scaled.jpg" || echo "Failed to download gustavo artwork 1"

# Carlos Molina Vallejo
curl -o public/artistas/carlos-molina-vallejo/carlos-featured.jpg "${BASE_URL}/2025/01/carlos-molina-vallejo-portada.jpg" || echo "Failed to download carlos featured"
curl -o public/artistas/carlos-molina-vallejo/marejadas.jpg "${BASE_URL}/2025/01/Marejadas1-scaled.jpg" || echo "Failed to download carlos artwork 1"

# Manuel Vela
curl -o public/artistas/manuel-vela/manuel-featured.jpg "${BASE_URL}/2025/02/manuel-vela-portada.jpg" || echo "Failed to download manuel featured"
curl -o public/artistas/manuel-vela/casas.jpg "${BASE_URL}/2025/02/Casas-scaled.jpg" || echo "Failed to download manuel artwork 1"

# Jose Manuel López
curl -o public/artistas/jose-manuel-lopez/jose-featured.jpg "${BASE_URL}/2025/01/jose-manuel-lopez-portada.jpg" || echo "Failed to download jose featured"
curl -o public/artistas/jose-manuel-lopez/hombre-sentado.jpg "${BASE_URL}/2025/01/Hombre-Sentado-scaled.jpg" || echo "Failed to download jose artwork 1"

echo "Image download complete!"
