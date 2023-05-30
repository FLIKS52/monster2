document.querySelectorAll(".filterButton").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    filterElements(filter);
  });
});
function filterElements(a) {
  const elements = document.querySelectorAll(".element");
  elements.forEach((element) => {
    const categories = element.getAttribute("data-category").split(" ");
    if (categories.includes(a) || a === "all") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });

  const bg = document.querySelector(".bg");
  if (filter === "all") {
    bg.style.height = "975vh";
  } else {
    bg.style.height = "200vh";
  }
}

const filterToggle = document.querySelector(".filter-toggle");
const filterButtons = document.querySelectorAll(".filterButton");
const imgdown = document.querySelector(".img-down");
const headerLine = document.querySelector(".header-line-1");
const item = document.querySelector(".nav-item-1");
const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block-2");
const block3 = document.querySelector(".block-3");
const line = document.querySelector(".line");

filterToggle.addEventListener("click", () => {
  if (headerLine.style.display === "none") {
    headerLine.style.display = "block";
    filterToggle.style.backgroundColor = "rgb(139, 21, 194)";
    filterToggle.textContent = "СКРЫТЬ";
    imgdown.style.display = "block";
    item.style.hover = "#19191b";
    block1.style.left = "279px";
    block2.style.left = "715px";
    block3.style.left = "1124px";
    filterToggle.style.left = "12px";
    filterToggle.style.top = "62px";
    filterToggle.style.position = "fixed";
    item.style.position = "fixed";
    headerLine.appendChild(filterToggle);
    headerLine.appendChild(item);
    filterToggle.style.position = "";
    item.style.position = "";
    line.style.width = "80%";
    line.style.marginLeft = "272px";
    form.style.marginLeft = "948px";
    input.style.width = "60%";
  } else {
    headerLine.style.display = "none";
    filterToggle.style.backgroundColor = "#19191b";
    imgdown.style.display = "none";
    filterToggle.style.left = "189px";
    filterToggle.style.top = "4px";
    filterToggle.textContent = "ФИЛЬТРЫ";
    item.style.hover = "#6ad513";
    block1.style.left = "37px";
    block2.style.left = "609px";
    block3.style.left = "1124px";
    line.appendChild(filterToggle);
    line.appendChild(item);
    filterToggle.style.position = "absolute";
    item.style.position = "absolute";
    line.style.width = "100%";
    line.style.marginLeft = "";
    form.style.marginLeft = "1114px";
    input.style.width = "40%";
  }
});

const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
document.addEventListener("DOMContentLoaded", function () {
  const search = document.querySelector("#search");
  const elements = document.querySelectorAll(".element");

  search.addEventListener("keyup", function (event) {
    const searchValue = event.target.value.toLowerCase();

    elements.forEach(function (element) {
      const title = element.querySelector(".monster-title-2");
      const titleText = title.textContent.toLowerCase();

      if (titleText.includes(searchValue) || searchValue === "") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  });
});
