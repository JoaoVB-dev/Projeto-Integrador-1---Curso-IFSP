/* Botao de aviso */

$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });
});

alert(
  'Esta página é fictícia, criada como parte das exigências para obtenção de nota na unidade curricular "Projeto Integrador 1" do curso técnico em Desenvolvimento de Sistemas do Instituto Federal de São Paulo.'
);

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

// Validação formulario

const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const telefoneRegex = /^\d{10,11}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  nameValidate();
  emailValidate();
  telValidate();

  if (isFormValid()) {
    alert("Formulário enviado com sucesso!");
    form.submit(); // se quiser continuar o envio real
  } else {
    alert(
      "Formulário inválido. Verifique os campos obrigatórios e tente novamente."
    );
  }
});

function isFormValid() {
  return (
    campos[0].value.length >= 3 &&
    emailRegex.test(campos[1].value) &&
    telefoneRegex.test(campos[2].value) &&
    campos[3].value.length >= 10
  );
}

function setError(index) {
  campos[index].style.border = "2px solid red";
  spans[index].style.display = "block";
}

function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

function emailValidate() {
  if (!emailRegex.test(campos[1].value)) {
    setError(1);
  } else {
    removeError(1);
  }
}

function telValidate() {
  if (!telefoneRegex.test(campos[2].value)) {
    setError(2);
  } else {
    removeError(2);
  }
}

function mensagemValidate() {
  if (campos[3].value.length < 10) {
    setError(3);
  } else {
    removeError(3);
  }
}
