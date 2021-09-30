const formulario:any=document.getElementById("formulario");
const mensaje:any=document.getElementById("mensaje");
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	rut: /^[0-9kK\-]{10}$/, // Letras y guion
	nombre: /^[a-zA-ZÀ-ÿ\s\n]{1,80}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9}$/ // 9 numeros.
}

const campos = {
    nombre: false,
    rut: false,
    email:false,
    telefono:false
}

const validarFormulario = (evento) => {
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
}

const validarCampo = (expresion, input, espacio) =>{
    if(expresion.test(input.value)){
        document.getElementById(`campo_${espacio}`).classList.remove('formularioCampoIncorrecto');
        document.getElementById(`campo_${espacio}`).classList.add('formularioCampoCorrecto');
        document.querySelector(`#campo_${espacio} i`).classList.remove('fa-times-circle');
        document.querySelector(`#campo_${espacio} i`).classList.add('fa-check-circle');
        document.querySelector(`#campo_${espacio} .formularioInputError`).classList.remove('formularioInputError-activo');
        campos[espacio] = true;
    }
    else {
        document.getElementById(`campo_${espacio}`).classList.remove('formularioCampoCorrecto');
        document.getElementById(`campo_${espacio}`).classList.add('formularioCampoIncorrecto');
        document.querySelector(`#campo_${espacio} i`).classList.remove('fa-check-circle');
        document.querySelector(`#campo_${espacio} i`).classList.add('fa-times-circle');
        document.querySelector(`#campo_${espacio} .formularioInputError`).classList.add('formularioInputError-activo');
        campos[espacio] = false;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('keyup', validarFormulario);
});

formulario.addEventListener("submit", function(evento){

    if(campos.nombre && campos.rut && campos.telefono && campos.email){
        formulario.reset();
        formulario.style.display="none";
        mensaje.style.display="block";
        mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted. ";
        mensaje.style.color="#black";
        evento.preventDefault();
    }
    else{
        document.getElementById('formularioMensaje').classList.add('formularioMensaje-activo');
        evento.preventDefault();
    }
});

