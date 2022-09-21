import { refreshTable } from "./table.js";

const buttonPrev = document.createElement("ui5-button");
const buttonNext = document.createElement("ui5-button");
buttonPrev.textContent = "<";
buttonNext.textContent = ">";


buttonPrev.addEventListener("click", () => {
  let page = document.getElementById("page").getAttribute("page");
  page = parseInt(page) - 1;
  document.getElementById("page").setAttribute("page", page);
  document.getElementById("page").innerHTML = page;
  refreshTable(page);
}, refreshTable);

buttonNext.addEventListener("click", () => {
  let page = document.getElementById("page").getAttribute("page");
  page = parseInt(page) + 1;
  document.getElementById("page").setAttribute("page", page);
  document.getElementById("page").innerHTML = page;
  refreshTable(page);
}, refreshTable);

document.getElementById("button-prev").appendChild(buttonPrev);
document.getElementById("page").innerHTML = "1";
document.getElementById("button-next").appendChild(buttonNext);