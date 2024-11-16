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


const userIsValid = function () {

    if (!$username.value && !$password.value) {
        $spanError.style.display = 'block';
        $spanError.textContent = 'Los campos están vacíos';
        $username.style.border = 'solid 2px rgb(192, 59, 59)';
        $password.style.border = 'solid 2px rgb(192, 59, 59)';
        return false;
    }

    if (!$username.value || !$password.value) {
        $spanError.style.display = 'block';
        $spanError.textContent = 'Algunos de los campos está vacío';
        $username.style.border = 'solid 2px rgb(192, 59, 59)';
        $password.style.border = 'solid 2px rgb(192, 59, 59)';
        return false;
    }

    if ($username.value.length <= 3) {
        $spanError.style.display = 'block';
        $spanError.textContent = 'El usuario debe tener mas de 3 caracteres';
        $username.style.border = 'none';
        $password.style.border = 'none';
        return false;
    }

    if ($password.value.length <= 3) {
        $spanError.style.display = 'block';
        $spanError.textContent = 'La contraseña debe tener mas de 3 caracteres';
        $username.style.border = 'none';
        $password.style.border = 'none';
        return false;
    }

    $spanError.style.display = 'none';
    $spanError.textContent = '';
    $username.style.border = 'none';
    $password.style.border = 'none';


    return true;
}


const userExist = function () {
    const userOk = users.some(user => user.user === $username.value && user.pass === $password.value);

    if (!userOk) {
        $spanError.style.display = 'block';
        $spanError.textContent = 'El usuario o contraseña son incorrectos';
        return false;
    }

    return true;
}


const deleteUserSpace = function () {
    const userArraySpace = $username.value.split("");


    if (userArraySpace[userArraySpace.length - 1] === " ") {
        userArraySpace.pop();
        $username.value = userArraySpace.join("");
    }



    //hice esto primero pero queda raro que elimine todos los espacios
    /* const noSpace = userArraySpace.filter(word => word !== " ").join("");
    $username.value = noSpace; */

    return;
}

const deletePasswordSpace = function () {
    const passArraySpace = $password.value.split("");

    if (passArraySpace[passArraySpace.length - 1] === " ") {
        passArraySpace.pop();
        $password.value = passArraySpace.join("");
    }

    return;
}




function login() {
    deleteUserSpace();
    deletePasswordSpace();

    if (userIsValid() === false) {
        return;
    }

    if (userExist() === false) {
        return;
    }

    redirectTo();

    return;
}


function redirectTo() {
    document.location.href = 'index.html';
}

