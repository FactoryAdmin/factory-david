document.addEventListener('DOMContentLoaded', ()=>{
    getProducts();
    getUser();
});




const getProducts = async (pagenumber=1) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

        }
        spinnerModal();
        let response = await fetch(`http://localhost:4000/products/?page=${pagenumber}`, options);
        let data = await response.json();
        

        productsData = data;
        console.log(productsData)
        
        initialData(productsData);
        createPagination();
        showRecordsPerPage(1);

    } catch (error) {
        console.log(error)
    }
}

function getUser() {
    
    const savedUser = localStorage.getItem('user');
    $catchUsername.textContent = `"${savedUser}"`;
}


function initialData(productsData) {
    $mainTable.innerHTML = '';
    productsData.values.forEach(product => {
        const $row = createProductRow(product);
        $mainTable.appendChild($row);
    });
    
}

function formatCurrency(value) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
    }).format(value);
}

function createProductRow(product) {
    const $row = document.createElement('tr');
    Object.entries(product).forEach(([key,value]) => {
        const $td = document.createElement('td');
        /* let valueToShow = value; */
        /* if(key === 'price') {
            valueToShow = formatCurrency(value);
        } */
        
        $td.textContent = key=== "price" ? formatCurrency(value) : value;
        /* $td.textContent = valueToShow; */
        $row.appendChild($td);
        
    });

    const $actionsTd = document.createElement('td');
    $actionsTd.classList.add('d-flex');
    $actionsTd.classList.add("gap-3");
    $actionsTd.classList.add('justify-content-center');
    $actionsTd.appendChild(generateButton('Modificar', 'btn-primary', () => modifyProduct(product), { dataTarget: '#confirmModifyModal', dataToggle: 'modal' }));
    $actionsTd.appendChild(generateButton('Eliminar', 'btn-danger', () => confirmDeleteProduct(product), { dataTarget: "#confirmDeleteModal", dataToggle: 'modal' }));

    $row.appendChild($actionsTd);
    return $row;
}


function generateButton(btnName, classBtn, actionBtn, modalConfigs = null) {

    let $button = document.createElement('button');
    $button.textContent = btnName;

    if (modalConfigs) {
        const { dataTarget, dataToggle } = modalConfigs;
        $button.setAttribute('data-bs-target', dataTarget);
        $button.setAttribute('data-bs-toggle', dataToggle);
    }

    $button.classList.add('btn'); // agregue esta clase por separado
    $button.classList.add(classBtn || DEFAULT_STYLE_BTN);
    $button.addEventListener('click', actionBtn);
    return $button;
}

function deleteProduct() {
    const description = deleteModal.deleteBtn.getAttribute('data-product-name');
    productsData = productsData.filter(product => product.description !== description);
    newProductData = productsData;
    console.log(newProductData);

    showRecordsPerPage(1);
    createPagination();
    popoversAlerts($deletePopover);
}

function setupModalEvents() {
    deleteModal.deleteBtn.addEventListener('click', () => {
        deleteProduct(),
        spinnerModal()
    });
}

function confirmDeleteProduct(product) {
    const { description } = product;
    console.log(description);
    deleteModal.descriptionProduct.textContent = description;
    deleteModal.deleteBtn.setAttribute('data-product-name', description);
};

function modifyProduct(product) {
    const { description, stock, price } = product;
    editModal.productName.value = description;
    editModal.StockProduct.value = stock;
    editModal.PriceProduct.value = price;

    //esto es como el addEventListener pero este no acumular eventos, entonces no tengo errores
    //al clickear en varios productos y que se modifiquen todos
    editModal.modifyBtn.onclick = () => updateProductModify(product);
}



function updateProductModify(product) {
    product.description = editModal.productName.value;
    product.stock = editModal.StockProduct.value;
    product.price = editModal.PriceProduct.value;


    newProductData = productsData;
    

    spinnerModal();
    showRecordsPerPage(1);
    createPagination();
    popoversAlerts($modifyPopover);
}


function createPagination() {
    $paginationContainer.innerHTML = '';
    /* const registerToShow = 10;
    const pagesQuantities = Math.ceil(productsData.length / registerToShow); */ 
    console.log(productsData.pages)
    for (let index = 1; index <= productsData.pages; index++) {

        let $pages = document.createElement('a');
        $pages.setAttribute('href', '#');
        $pages.setAttribute('data-page-id', index);
        $pages.textContent = index;
        $pages.classList.add('page-link');
        $paginationContainer.classList.add('pagination');
        $paginationContainer.appendChild($pages);

    }
    
    setupPaginationEvents();
    
}

function setupPaginationEvents() {
    const links = document.querySelectorAll('#pagination-container > a');

    for (let index = 0; index < links.length; index++) {
        const currentPage = links[index].getAttribute('data-page-id');
        links[index].addEventListener('click',()=> {
            showRecordsPerPage(currentPage),
            spinnerModal()
        });
    }
};


async function showRecordsPerPage(currentPage) {
    /* const size = 10;
    const lastIndex = currentPage * size;
    const firstIndex = lastIndex - size;

    const newArrayProduct = productsData.slice(firstIndex, lastIndex); */
    try {
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

        }
        spinnerModal();
        let response = await fetch(`http://localhost:4000/products/?page=${currentPage}`, options);
        let data = await response.json();


        initialData(data);
        activePage(currentPage);
    } catch (error) {
        
    }
}

function activePage(currentPage) {
    const links = document.querySelectorAll('#pagination-container > a');
    

    links.forEach(page=> {
        page.classList.remove('activePage');
    })
    
    const activeLink = document.querySelector(`#pagination-container > a:nth-child(${currentPage})`);
    activeLink.classList.add('activePage');
    
}


const createProduct = () => {

    createModal.createBtn.addEventListener('click', () => confirmCreateProduct());
}


function confirmCreateProduct() {

    const newProduct = {
        code: parseInt(productsData[productsData.length-1].code)+1,
        description: createModal.newProductName.value,
        stock: createModal.newStockProduct.value,
        price: createModal.newPriceProduct.value,
    }
    
    if(!validateNewProduct(newProduct)) {
        return;
    } 

    productsData.push(newProduct);

    newArrayProductTwo = productsData;

    spinnerModal();
    showRecordsPerPage(1);
    createPagination();
    popoversAlerts($createPopover);
    refreshModalInputs();
}


function refreshModalInputs() {
    createModal.newProductName.value = '';
    createModal.newStockProduct.value = null;
    createModal.newPriceProduct.value = null;

}

function validateNewProduct(newProduct) {


    for (let product of productsData) {
        if (product.description === newProduct.description) {
            alert(`El producto ya existe, por favor intenta otro`);
            return false;
        }
    }    

    return true;
}



setupModalEvents();
createProduct();



/* function showDate() {
    const today = new Date();

    const anio = today.getFullYear();
    const month = today.getMonth().toString().length == 1 ? "0"+(today.getMonth()+1) : today.getMonth()
    const day = today.getDate();

    console.log(today.getMonth());
    return console.log(`${day}-${month}-${anio}`);
}

showDate(); */


