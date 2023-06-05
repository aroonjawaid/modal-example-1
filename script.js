document.addEventListener("DOMContentLoaded", function() {
    const modalButton = document.getElementById("modalButton");
    const modal = document.getElementById("modal");
  
    modalButton.addEventListener("click", function() {
      modal.style.display = "flex";
    });
  
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        modal.style.display = "none";
      }
    });
  });
  