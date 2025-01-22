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
    {userId: '17', username: 'userSeventeen'},
    {userId: '18', username: 'userEighteen'},
    {userId: '19', username: 'userNineteen'},
    {userId: '20', username: 'userTwenty'},
    {userId: '21', username: 'userTwentyOne'},
    {userId: '22', username: 'userTwentyTwo'},
    {userId: '23', username: 'userTwentyThree'},
    {userId: '24', username: 'userTwentyFour'},
    {userId: '25', username: 'userTwentyFive'},
    {userId: '26', username: 'userTwentySix'},
    {userId: '27', username: 'userTwentySeven'},
    {userId: '28', username: 'userTwentyEight'},
    {userId: '29', username: 'userTwentyNine'},
    {userId: '30', username: 'userThirty'},
    {userId: '31', username: 'userThirtyOne'},
    {userId: '32', username: 'userThirtyTwo'},
    {userId: '33', username: 'userThirtyThree'},
    {userId: '34', username: 'userThirtyFour'},
    {userId: '35', username: 'userThirtyFive'},
    {userId: '36', username: 'userThirtySix'},
    {userId: '37', username: 'userThirtySeven'},
    {userId: '38', username: 'userThirtyEight'},
    {userId: '39', username: 'userThirtyNine'},
    {userId: '40', username: 'userForty'},
    {userId: '41', username: 'userFortyOne'},
    {userId: '42', username: 'userFortyTwo'},
    {userId: '43', username: 'userFortyThree'},
    {userId: '44', username: 'userFortyFour'},
    {userId: '45', username: 'userFortyFive'},
    {userId: '46', username: 'userFortySix'},
    {userId: '47', username: 'userFortySeven'},
    {userId: '48', username: 'userFortyEight'},
    {userId: '49', username: 'userFortyNine'},
    {userId: '50', username: 'userFifty'},
    {userId: '51', username: 'userFiftyOne'},
    {userId: '52', username: 'userFiftyTwo'},
    {userId: '53', username: 'userFiftyThree'}
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
