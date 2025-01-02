const btnClasses = {
    primary: 'primaryBtn',
    warning: 'warningBtn',
    error: 'errorBtn'
};

const DEFAULT_STYLE_BTN = 'primaryBtn';

const $deleteBtn = document.getElementById('deleteBtn');
const $modal = document.getElementById('modal');
const $closeModal = document.getElementById('closeModal');

function initialData() {
    $tbodyMainTable.innerHTML = '';

    usersData.forEach((userData) => {
        let $row = document.createElement('tr');
        for (const prop in userData) {
            let $td = document.createElement('td');
            $td.textContent = userData[prop];
            $row.appendChild($td);
        }
        
        let $actionsTd = document.createElement('td');
        
        $actionsTd.appendChild( generateButton('Eliminar','error', () => deleteUserModal(userData)));//CAMBIE
        $actionsTd.appendChild( generateButton('Modificar','primary', ''));

        $row.appendChild($actionsTd);
        $tbodyMainTable.appendChild($row);
    })
}


function generateButton(btnName,classBtn,actionBtn) {
    
    let $buttons = document.createElement('button');
    $buttons.textContent = btnName;

    if(btnName === 'Eliminar') {
        //AGREGUE ESTO DE ACA ABAJO
        $buttons.addEventListener('click',()=>{
            $modal.showModal();
        })
        //AGREGUE ESTO DE ACA PARA CERRAR MODAL DESP DE ELIMINAR
        $modal.close(); 
    }

    let classToAdd = btnClasses.hasOwnProperty(classBtn) ? btnClasses[classBtn] : DEFAULT_STYLE_BTN;
    $buttons.classList.add(classToAdd); 

    $buttons.onclick = actionBtn;   // usar el addEventListener
    /* $buttons.addEventListener('click', actionBtn); */ //SI LO CAMBIO A ESTO, NO ME FUNCIONA

    return $buttons;
}


function deleteUser(userId) {
    const newUsersData = usersData.filter(user => user.userId != userId);
    usersData = newUsersData;
    initialData();
};

//TRATAR DE HACER UNA FUNCION PARA EL DELETE USER DONDE SALGA UN MODAL

function deleteUserModal(userData) {
    const {userId} = userData;
    document.getElementById('index').textContent = userId;
    $deleteBtn.addEventListener('click', ()=> deleteUser(userId));
    //AGREGUE ESTO DE ACA ABAJO
    $closeModal.addEventListener('click', ()=> {
        $modal.close();
    })
}



