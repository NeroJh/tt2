var formulario = document.getElementById("formulario");
var mensaje = document.getElementById("mensaje");
var inputs = document.querySelectorAll('#formulario input');
var expresiones = {
    rut: /^[0-9kK\-]{10}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s\n]{1,80}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{9}$/ // 9 numeros.
};
var campos = {
    nombre: false,
    rut: false,
    email: false,
    telefono: false
};
var validarFormulario = function (evento) {
    switch (evento.target.name) {
        case "nombreEstudiante":
            validarCampo(expresiones.nombre, evento.target, 'nombre');
            break;
        case "rutEstudiante":
            validarCampo(expresiones.rut, evento.target, 'rut');
            break;
        case "emailEstudiante":
            validarCampo(expresiones.email, evento.target, 'email');
            break;
        case "telefonoEstudiante":
            validarCampo(expresiones.telefono, evento.target, 'telefono');
            break;
        case "lenguaje":
            break;
        case "nivel":
            break;
        case "conoc":
            break;
        case "masDificil":
            break;
        case "opinion":
            break;
    }
};
var validarCampo = function (expresion, input, espacio) {
    if (expresion.test(input.value)) {
        document.getElementById("campo_" + espacio).classList.remove('formularioCampoIncorrecto');
        document.getElementById("campo_" + espacio).classList.add('formularioCampoCorrecto');
        document.querySelector("#campo_" + espacio + " i").classList.remove('fa-times-circle');
        document.querySelector("#campo_" + espacio + " i").classList.add('fa-check-circle');
        document.querySelector("#campo_" + espacio + " .formularioInputError").classList.remove('formularioInputError-activo');
        campos[espacio] = true;
    }
    else {
        document.getElementById("campo_" + espacio).classList.remove('formularioCampoCorrecto');
        document.getElementById("campo_" + espacio).classList.add('formularioCampoIncorrecto');
        document.querySelector("#campo_" + espacio + " i").classList.remove('fa-check-circle');
        document.querySelector("#campo_" + espacio + " i").classList.add('fa-times-circle');
        document.querySelector("#campo_" + espacio + " .formularioInputError").classList.add('formularioInputError-activo');
        campos[espacio] = false;
    }
};
inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('keyup', validarFormulario);
});
formulario.addEventListener("submit", function (evento) {
    if (campos.nombre && campos.rut && campos.telefono && campos.email) {
        formulario.reset();
        formulario.style.display = "none";
        mensaje.style.display = "block";
        mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted. ";
        mensaje.style.color = "#black";
        evento.preventDefault();
    }
    else {
        document.getElementById('formularioMensaje').classList.add('formularioMensaje-activo');
        evento.preventDefault();
    }
});
