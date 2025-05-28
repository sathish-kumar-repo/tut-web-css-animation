document.addEventListener("DOMContentLoaded", function () {
  const checkBox = document.querySelector("#check");
  const container = document.querySelector(".container");

  checkBox.addEventListener("change", function () {
    if (this.checked) {
      container.style.backgroundColor = "#333";
    } else {
      container.style.backgroundColor = "aliceblue";
    }
  });
});
