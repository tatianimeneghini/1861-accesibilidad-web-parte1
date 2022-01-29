// Variables
var btnAbreDialog = document.querySelector("#abreDialog");
var dialog = document.querySelector(".dialogNewsletter");
var dialogBody = document.querySelector(".dialogNewsletter-body");
var dialogOverlay = document.querySelector(".dialogNewsletter-overlay");

// Cuando abrir el dialog...
btnAbreDialog.addEventListener("click", function () {
  dialog.classList.add("dialogNewsletter--abierto");
});

function cerrandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove("dialogNewsletter--abierto");
}

// Listeners
document
  .querySelector(".dialogNewsletter-cerrar")
  .addEventListener("click", cerrandoDialog);
