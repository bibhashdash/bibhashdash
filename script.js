const menuBox = document.querySelector(".menu-box");
const btn = document.querySelector(".btn");
const listItem = document.querySelectorAll(".list-item");
btn.addEventListener("click", function() {
    menuBox.classList.toggle("menu-box-open");
    menuBox.style.transition = "all 1s";
    listItem.forEach(function(element) {
        element.classList.toggle("list-item-open");
        element.style.transition = "all 0.8s";
    });
});