const pagesContainer = document.getElementById("pages");

// Number of pages
const totalPages = 5; // Change to your total number of images
let currentPage = 0;

// Create pages dynamically
for (let i = 0; i < totalPages; i++) {
  const page = document.createElement("div");
  page.className = "page";
  page.style.backgroundImage = `url('pages/page${i + 1}.jpg')`;
  if (i > 0) page.classList.add("hidden");
  pagesContainer.appendChild(page);
}

const pages = document.querySelectorAll(".page");

// Swipe gesture variables
let startX = 0;
let endX = 0;

// Add navigation button functionality
document.getElementById("prev").addEventListener("click", () => {
  prevPage();
});

document.getElementById("next").addEventListener("click", () => {
  nextPage();
});

// Handle swipe gestures for touchscreens
document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

document.addEventListener("touchend", () => {
  if (endX < startX - 50) {
    // Swipe left (next page)
    nextPage();
  } else if (endX > startX + 50) {
    // Swipe right (previous page)
    prevPage();
  }
});

// Mouse-based swipe gestures
let isDragging = false;

document.addEventListener("mousedown", (e) => {
  startX = e.clientX;
  isDragging = true;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    endX = e.clientX;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  if (endX < startX - 50) {
    // Swipe left (next page)
    nextPage();
  } else if (endX > startX + 50) {
    // Swipe right (previous page)
    prevPage();
  }
});

// Page navigation functions
function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.add("hidden");
    currentPage++;
    pages[currentPage].classList.remove("hidden");
  }
}

function prevPage() {
  if (currentPage > 0) {
    pages[currentPage].classList.add("hidden");
    currentPage--;
    pages[currentPage].classList.remove("hidden");
  }
}
