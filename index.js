let slideIndexCliente = 0;
autoShowSlidesCliente();

function autoShowSlidesCliente() {
  let i;
  let slidesCliente = document.getElementsByClassName("clienteSlide");
  for (i = 0; i < slidesCliente.length; i++) {
    slidesCliente[i].style.display = "none";
  }
  slideIndexCliente++;
  if (slideIndexCliente > slidesCliente.length) {slideIndexCliente = 1}
  slidesCliente[slideIndexCliente-1].style.display = "block";
  setTimeout(autoShowSlidesCliente, 2000);
}