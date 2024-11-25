/* CREAR UN LOGIN DONDE INDIQUE SI LAS CREDENCIALES SON CORRECTAS O NO, 
DEBE MOSTRAR UN CARTEL DE ERROR DE CREDENCIALES. HACER UN ARRAY CON LOS USUARIOS 
Y CONTRASENIA CORRECTA Y SI ES CORRECTO LO REDIRIJE AL HOME 
COMO JONY PASO EN EL EJEMPLO */

const users = [
    { user: 'david71', pass: 'pass123' },
    { user: 'pepe25', pass: '123123' },
    { user: 'lolo12', pass: 'hola321' }
]

const $username = document.getElementById('user');
const $password = document.getElementById('pass');
const $spanError = document.getElementById('errorMsg');

const removeInputSpace = value=> value.trim();


const isFormValuesValid = function () {

    if (!removeInputSpace($username.value) && !removeInputSpace($password.value)) {
        $spanError.classList.add("errorMsg-show");
        $spanError.textContent = 'Los campos están vacíos';
        $username.classList.add("errorBorderStyle");
        $password.classList.add("errorBorderStyle");
        return false;
    }

    if (!removeInputSpace($username.value) || !removeInputSpace($password.value)) {
        $spanError.classList.add("errorMsg-show");
        $spanError.textContent = 'Algunos de los campos está vacío';
        $username.classList.add("errorBorderStyle");
        $password.classList.add("errorBorderStyle");
        return false;
    }

    if (removeInputSpace($username.value).length <= 3) {
        $spanError.classList.add("errorMsg-show");
        $spanError.textContent = 'El usuario debe tener mas de 3 caracteres';
        $username.classList.remove("errorBorderStyle");
        $password.classList.remove("errorBorderStyle");
        return false;
    }

    if (removeInputSpace($password.value).length <= 3) {
        $spanError.classList.add("errorMsg-show");
        $spanError.textContent = 'La contraseña debe tener mas de 3 caracteres';
        $username.classList.remove("errorBorderStyle");
        $password.classList.remove("errorBorderStyle");
        return false;
    }

    $spanError.classList.remove("errorMsg-show");
    $spanError.textContent = '';
    $username.classList.remove("errorBorderStyle");
    $password.classList.remove("errorBorderStyle");


    return true;
}


const userExist = function () {
    const userOk = users.some(user => user.user === $username.value && user.pass === $password.value);

    if (!userOk) {
        $spanError.classList.add("errorMsg-show");
        $spanError.textContent = 'El usuario o contraseña son incorrectos';
        return false;
    }

    return true;
}




function login(event) {
    event.preventDefault();

    if (!isFormValuesValid() || !userExist() ) {
        return;
    }

    return redirectTo();
}


function redirectTo() {
    document.location.href = 'index.html';
}

