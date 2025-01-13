document.addEventListener('DOMContentLoaded', /* initialData */ ()=>{
    createPagination();
    setupPaginationEvents();
    showRecordsPerPage(1);
});


function initialData(newArrayData) {
    $tbodyMainTable.innerHTML = '';
    /* usersData.forEach((userData) => {
        const $row = createUserRow(userData);
        $tbodyMainTable.appendChild($row);
    }); */
    /* createPagination();
    setupPaginationEvents(); */

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
    $actionsTd.appendChild(generateButton('Eliminar', 'error', () => confirmDeleteItem(userData)));
    $actionsTd.appendChild(generateButton('Modificar', 'primary', () => { }));

    $row.appendChild($actionsTd);
    return $row;
}


function generateButton(btnName, classBtn, actionBtn) {

    let $button = document.createElement('button');
    $button.textContent = btnName;
    $button.classList.add(btnClasses[classBtn] || DEFAULT_STYLE_BTN);
    $button.addEventListener('click', actionBtn);
    return $button;
}


function closeModal() {
    modalConfig.modal.close();
}



function deleteUser() {
    const userId = modalConfig.deleteButton.getAttribute('data-user-id');
    usersData = usersData.filter(user => user.userId !== userId);
    closeModal();
    initialData();
}

function setupModalEvents() {
    modalConfig.deleteButton.addEventListener('click', deleteUser);
    modalConfig.closeButton.addEventListener('click', closeModal);
}



function confirmDeleteItem(userData) {
    const { userId } = userData;
    modalConfig.userIdField.textContent = userId;
    modalConfig.deleteButton.setAttribute('data-user-id', userId);
    modalConfig.modal.showModal();
}



function createPagination() {
    const registerToShow = 10;
    const pagesQuantities = Math.ceil(usersData.length / registerToShow);

    for (let index = 1; index <= pagesQuantities; index++) {

        let $pages = document.createElement('a');
        $pages.setAttribute('href', '#');
        $pages.setAttribute('data-page-id', index);
        $pages.textContent = index;
        $pages.classList.add('pages-style');
        $paginationContainer.classList.add('pagination-containerStyle');
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




