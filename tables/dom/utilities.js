const $tbodyMainTable = document.getElementById('tbodyMainTable');

let usersData = [
    {userId: '1', username: 'userOne'},
    {userId: '2', username: 'userTwo'},
    {userId: '3', username: 'userThree'},
    {userId: '4', username: 'userFour'},
    {userId: '5', username: 'userFive'},
    {userId: '6', username: 'userSix'},
    {userId: '7', username: 'userSeven'},
    {userId: '8', username: 'userEight'},
    {userId: '9', username: 'userNine'},
    {userId: '10', username: 'userTen'},
    {userId: '11', username: 'userEleven'},
    {userId: '12', username: 'userTwelve'},
    {userId: '13', username: 'userThirteen'},
    {userId: '14', username: 'userFourteen'},
    {userId: '15', username: 'userFifteen'},
    {userId: '16', username: 'userSixteen'},
    {userId: '17', username: 'userSeventeen'}
];

const btnClasses = {
    primary: 'primaryBtn',
    warning: 'warningBtn',
    error: 'errorBtn'
};

const DEFAULT_STYLE_BTN = 'primaryBtn';


const modalConfig = {
    modal: document.getElementById('modal'),
    deleteButton: document.getElementById('deleteBtn'),
    closeButton: document.getElementById('closeModal'),
    userIdField: document.getElementById('userId')
};

const $paginationContainer = document.getElementById('pagination-container');
