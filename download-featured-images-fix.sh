#!/bin/bash

# Script to download correct featured images for artists
echo "Downloading correct featured images for artists..."

# Ensure all artist directories exist
mkdir -p /Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/{zarco,gabriel-pastor-guzman,blanca-valcarce-quiroga,fernando-jose-escrina,miguel-angel-ruiz,gustavo-pannullo-gap,carlos-molina-vallejo,manuel-vela,jose-manuel-lopez}

# Download with correct URLs
# Zarco - URL obtained directly from the artist page
curl -o /Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/zarco/zarco-featured.jpg "https://livingmuseum.madrid/wp-content/uploads/2025/02/Zarco-e1740411424821.jpg"

# Gabriel Pastor Guzmán 
curl -o /Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/gabriel-pastor-guzman/gabriel-featured.jpg "https://livingmuseum.madrid/wp-content/uploads/2025/02/Gabriel-Pastor-Guzman-e1739794591525.jpg"

# Blanca Valcarce Quiroga
curl -o /Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/blanca-valcarce-quiroga/blanca-featured.jpg "https://livingmuseum.madrid/wp-content/uploads/2025/02/Blanca-Valcarce-Quiroga-e1739794630965.jpg"

# Fernando José Escriña - following the same naming pattern
curl -o /Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/fernando-jose-escrina/fernando-featured.jpg "https://livingmuseum.madrid/wp-content/uploads/2025/02/Fernando-Jose-Escrina-e1739794650840.jpg"

# Miguel Ángel Ruiz 
curl -o /Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/miguel-angel-ruiz/miguel-featured.jpg "https://livingmuseum.madrid/wp-content/uploads/2025/02/Miguel-Angel-Ruiz-e1739794674698.jpg"

# Gustavo Pannullo (G.A.P.)
curl -o /Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/gustavo-pannullo-gap/gustavo-featured.jpg "https://livingmuseum.madrid/wp-content/uploads/2025/02/Gustavo-Pannullo-GAP-e1739794694936.jpg"

# Carlos Molina Vallejo
curl -o /Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/carlos-molina-vallejo/carlos-featured.jpg "https://livingmuseum.madrid/wp-content/uploads/2025/02/Carlos-Molina-Vallejo-e1739794721514.jpg"

# Manuel Vela
curl -o /Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/manuel-vela/manuel-featured.jpg "https://livingmuseum.madrid/wp-content/uploads/2025/02/Manuel-Vela-e1739794745908.jpg"

# Jose Manuel López
curl -o /Users/lorenzogm/lorenzogm/livingmuseum/public/artistas/jose-manuel-lopez/jose-featured.jpg "https://livingmuseum.madrid/wp-content/uploads/2025/02/Jose-Manuel-Lopez-e1739794769421.jpg"

echo "Featured image download complete!"
