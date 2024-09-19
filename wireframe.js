// JavaScript for 'Read more' functionality
const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const moreText = button.previousElementSibling;
    if (moreText.style.display === "block") {
      moreText.style.display = "none";
      button.textContent = "Read more";
    } else {
      moreText.style.display = "block";
      button.textContent = "Read less";
    }
  });
});
