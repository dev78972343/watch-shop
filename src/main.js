document.addEventListener("DOMContentLoaded", () => {
  const colorOptions = document.querySelectorAll(".color");
  const watchImage = document.getElementById("watchImage");

  const checkoutButton = document.getElementById("checkoutButton");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");

  const colorToImageMap = {
    purple: "/assets/watch-purple.jpg",
    cyan: "/assets/watch-cyan.jpg",
    blue: "/assets/watch-blue.jpg",
    gray: "/assets/watch-gray.jpg",
  };

  colorOptions.forEach((colorOption) => {
    colorOption.addEventListener("click", () => {
      const selectedColor = colorOption.getAttribute("data-color");
      if (selectedColor && colorToImageMap[selectedColor]) {
        watchImage.src = colorToImageMap[selectedColor];
      }
    });
  });

  // Open Modal
  checkoutButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.style.display = "block";
  });

  // Close Modal
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.style.display = "none";
  });

  // Close Modal on clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
      modal.style.display = "none";
    }
  });
});
