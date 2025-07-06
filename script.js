$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });
});

/* alert(
  'Esta página é fictícia, criada como parte das exigências para obtenção de nota na unidade curricular "Projeto Integrador 1" do curso técnico em Desenvolvimento de Sistemas do Instituto Federal de São Paulo.'
); */

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
