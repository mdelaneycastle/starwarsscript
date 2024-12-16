const pagesContainer = document.getElementById("pages");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Load images dynamically
const totalPages = 5; // Change this to the number of pages
let currentPage = 0;

for (let i = 0; i < totalPages; i++) {
  const page = document.createElement("div");
  page.className = "page";
  page.style.backgroundImage = `url('pages/page${i + 1}.jpg')`;
  page.style.backgroundSize = "cover";
  page.style.backgroundPosition = "center";
  if (i > 0) page.classList.add("hidden");
  pagesContainer.appendChild(page);
}

const pages = document.querySelectorAll(".page");

prevButton.addEventListener("click", () => {
  if (currentPage > 0) {
    pages[currentPage].classList.add("hidden");
    currentPage--;
    pages[currentPage].classList.remove("hidden");
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < totalPages - 1) {
    pages[currentPage].classList.add("hidden");
    currentPage++;
    pages[currentPage].classList.remove("hidden");
  }
});
