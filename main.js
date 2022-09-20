import "@ui5/webcomponents/dist/Button";

const button = document.createElement("ui5-button");
button.textContent = "Click Me";

button.addEventListener("click", () => {
  alert("Hello World!");
});

document.querySelector('#app').appendChild(button);

