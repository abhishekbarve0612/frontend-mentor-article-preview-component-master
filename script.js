const shareButton = document.getElementById("share-button");
const closeShareButton = document.getElementById("close-share-button");
const shareContainer = document.getElementById("share-container");

const userContainer = document.getElementById("user-card-container");

const tooltipSelector = document.getElementById("tooltip");

shareButton.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        shareContainer.classList.remove("hidden");
        userContainer.classList.add("hidden");
    } else {
        tooltipSelector.classList.toggle("hidden");
        shareButton.classList.toggle("active");
    }
})

closeShareButton.addEventListener('click', () => {
    shareContainer.classList.add("hidden");
    userContainer.classList.remove("hidden");
    tooltipSelector.classList.add("hidden");
    shareButton.classList.remove("active");
})
