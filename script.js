// Fetch images and populate the viewer
document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('current-image');
  const imageTitle = document.getElementById('image-title');
  const thumbnailsContainer = document.getElementById('thumbnails');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  fetch('images.json')
    .then(response => response.json())
    .then(images => {
      let currentIndex = 0;

      // Extract title from filename
      const extractTitle = (filename) => {
        const baseName = filename.split('.')[0]; // Remove file extension
        return baseName.split('_')[0]; // Remove underscore and following characters
      };

      // Function to update main image
      const updateMainImage = (index) => {
        mainImage.src = `images/${images[index]}`;
        imageTitle.textContent = extractTitle(images[index]);
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
        img.src = `images/${image}`;
        img.alt = extractTitle(image);

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

      // Navigation buttons
      prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
          updateMainImage(currentIndex - 1);
        }
      });

      nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
          updateMainImage(currentIndex + 1);
        }
      });

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
