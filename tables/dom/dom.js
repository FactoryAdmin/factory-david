document.addEventListener('DOMContentLoaded', ()=>{
    createPagination();
    setupPaginationEvents();
    showRecordsPerPage(1);
});


function initialData(newArrayData) {
    $tbodyMainTable.innerHTML = '';

    newArrayData.forEach((userData) => {
        const $row = createUserRow(userData);
        $tbodyMainTable.appendChild($row);
    });
}

function createUserRow(userData) {
    const $row = document.createElement('tr');
    Object.values(userData).forEach(value => {
        const $td = document.createElement('td');
        $td.textContent = value;
        $row.appendChild($td);
    });

    const $actionsTd = document.createElement('td');
    $actionsTd.classList.add('d-flex');
    $actionsTd.classList.add("gap-3");
    $actionsTd.classList.add('justify-content-center');
    $actionsTd.appendChild(generateButton('Modificar', 'btn-primary', () => editUser(userData), {dataTarget:'#confirmModifyModal', dataToggle:'modal'}));
    $actionsTd.appendChild(generateButton('Eliminar', 'btn-danger', () => confirmDeleteItem(userData), {dataTarget:"#confirmDeleteModal", dataToggle:'modal'}));

    $row.appendChild($actionsTd);
    return $row;
}


function generateButton(btnName, classBtn, actionBtn, modalConfigs=null) {

    let $button = document.createElement('button');
    $button.textContent = btnName;

    if(modalConfigs){
        const {dataTarget,dataToggle} = modalConfigs;
        $button.setAttribute('data-bs-target',dataTarget);
        $button.setAttribute('data-bs-toggle',dataToggle);
    }
    
    $button.classList.add('btn'); // agregue esta clase por separado
    $button.classList.add(classBtn || DEFAULT_STYLE_BTN);
    $button.addEventListener('click', actionBtn);
    return $button;
}


/* function closeModal() {
    modalConfig.modal.close();
} */



function deleteUser() {
    const userId = modalConfig.deleteButton.getAttribute('data-user-id');
    usersData = usersData.filter(user => user.userId !== userId);
    /* closeModal(); */
    /* initialData(usersData); */
}

function setupModalEvents() {
    modalConfig.deleteButton.addEventListener('click', deleteUser);
    /* modalConfig.closeButton.addEventListener('click', closeModal); */
}



function confirmDeleteItem(userData) {
    const { userId } = userData;
    modalConfig.userIdField.textContent = userId;
    modalConfig.deleteButton.setAttribute('data-user-id', userId);
};

function editUser(userData) {
    /* const { userId } = userData;
    editModalConfig.editUserField.textContent = userId; */
    const { username } = userData;
    editModalConfig.editUsername.setAttribute('placeholder', username)

    const { email } = userData;
    editModalConfig.editUserEmail.setAttribute('placeholder', email);

    editModalConfig.modifyUser.addEventListener('click', updateUserModify);
}

function updateUserModify() {
    console.log('modificando datos')
}

function createPagination() {
    const registerToShow = 10;
    const pagesQuantities = Math.ceil(usersData.length / registerToShow);

    for (let index = 1; index <= pagesQuantities; index++) {

        let $pages = document.createElement('a');
        $pages.setAttribute('href', '#');
        $pages.setAttribute('data-page-id', index);
        $pages.textContent = index;
        $pages.classList.add/* ('pages-style') */('page-link');
        $paginationContainer.classList.add(/* 'pagination-containerStyle' */'pagination');
        $paginationContainer.appendChild($pages);

    }
}



function setupPaginationEvents() {
    const links = document.querySelectorAll('#pagination-container > a');

    for (let index = 0; index < links.length; index++) {
        const currentPage = links[index].getAttribute('data-page-id');
        links[index].addEventListener('click',()=> showRecordsPerPage(currentPage));
    }
};


function showRecordsPerPage(currentPage) {
    const size = 10;
    const lastIndex = currentPage * size;
    const firstIndex = lastIndex - size;
    const newArrayData = usersData.slice(firstIndex, lastIndex);


    
    initialData(newArrayData);
    activePage(currentPage);
}

function activePage(currentPage) {
    const links = document.querySelectorAll('#pagination-container > a');

    links.forEach(page=> {
        page.classList.remove('activePage');
    })
    
    const activeLink = document.querySelector(`#pagination-container > a:nth-child(${currentPage})`);
    activeLink.classList.add('activePage');
    
}


setupModalEvents();




