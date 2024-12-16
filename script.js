// JavaScript for Page Viewer
const pages = ["page1.jpg", "page2.jpg", "page3.jpg", "page4.jpg"];
let currentPageIndex = 0;

const pageElement = document.getElementById("page");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const pageContainer = document.getElementById("page-container");

// Function to Update Page
function updatePage(direction) {
    if (direction === "next" && currentPageIndex < pages.length - 1) {
        pageElement.classList.add("turn-next");
        setTimeout(() => {
            currentPageIndex++;
            pageElement.src = pages[currentPageIndex];
            pageElement.classList.remove("turn-next");
        }, 600);
    } else if (direction === "prev" && currentPageIndex > 0) {
        pageElement.classList.add("turn-prev");
        setTimeout(() => {
            currentPageIndex--;
            pageElement.src = pages[currentPageIndex];
            pageElement.classList.remove("turn-prev");
        }, 600);
    }
}

// Button Event Listeners
prevButton.addEventListener("click", () => updatePage("prev"));
nextButton.addEventListener("click", () => updatePage("next"));

// Swipe Detection for Touch Screens
let touchStartX = 0;
let touchEndX = 0;

pageContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

pageContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        updatePage("next"); // Swipe Left
    } else if (touchEndX - touchStartX > 50) {
        updatePage("prev"); // Swipe Right
    }
}
