let slideIndexApresenta = 0;
autoShowSlidesApresenta();

function autoShowSlidesApresenta() {
  let i;
  let slidesApresenta = document.getElementsByClassName("apresentaSlide");
  for (i = 0; i < slidesApresenta.length; i++) {
    slidesApresenta[i].style.display = "none";
  }
  slideIndexApresenta++;
  if (slideIndexApresenta > slidesApresenta.length) {slideIndexApresenta = 1}
  slidesApresenta[slideIndexApresenta-1].style.display = "block";
  setTimeout(autoShowSlidesApresenta, 2000);
}

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