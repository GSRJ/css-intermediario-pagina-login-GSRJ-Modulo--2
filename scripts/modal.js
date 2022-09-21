const buttonModal = document.querySelectorAll("[data-control-modal]");

for (let index = 0; index < buttonModal.length; index++) {
  buttonModal[index].addEventListener("click", function () {
    let valueModalControl =
      buttonModal[index].getAttribute("data-control-modal");
    document.getElementById(valueModalControl).classList.toggle("showModal");
  });
}
