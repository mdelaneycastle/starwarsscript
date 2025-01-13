// Fetch images and populate the viewer
document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('current-image');
  const imageTitle = document.getElementById('image-title');
  const thumbnailsContainer = document.getElementById('thumbnails');

  fetch('images.json')
    .then(response => response.json())
    .then(images => {
      let currentIndex = 0;

      // Function to update main image
      const updateMainImage = (index) => {
        mainImage.src = `images/${images[index].file}`;
        imageTitle.textContent = images[index].title;
        currentIndex = index;

        // Update thumbnails' border
        document.querySelectorAll('.carousel-cell img').forEach((img, idx) => {
          img.style.borderColor = idx === index ? '#007bff' : 'transparent';
        });
      };

      // Populate thumbnails
      images.forEach((image, index) => {
        const cell = document.createElement('div');
        cell.classList.add('carousel-cell');
        const img = document.createElement('img');
        img.src = `images/${image.file}`;
        img.alt = image.title;

        img.addEventListener('click', () => updateMainImage(index));
        cell.appendChild(img);
        thumbnailsContainer.appendChild(cell);
      });

      // Initialize Flickity
      new Flickity(thumbnailsContainer, {
        cellAlign: 'center',
        contain: true,
        freeScroll: true,
        pageDots: false,
      });

      // Set initial image
      updateMainImage(0);

      // Swipe through main image with arrow keys
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
          updateMainImage(currentIndex + 1);
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
          updateMainImage(currentIndex - 1);
        }
      });
    });
});
