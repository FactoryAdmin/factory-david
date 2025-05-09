const $tbodyMainTable = document.getElementById('tbodyMainTable');

let usersData = [

    { userId: '1', username: 'userOne', age: 25, email: 'userone@example.com' },
    { userId: '2', username: 'userTwo', age: 30, email: 'usertwo@example.com' },
    { userId: '3', username: 'userThree', age: 27, email: 'userthree@example.com' },
    { userId: '4', username: 'userFour', age: 22, email: 'userfour@example.com' },
    { userId: '5', username: 'userFive', age: 29, email: 'userfive@example.com' },
    { userId: '6', username: 'userSix', age: 33, email: 'usersix@example.com' },
    { userId: '7', username: 'userSeven', age: 31, email: 'userseven@example.com' },
    { userId: '8', username: 'userEight', age: 24, email: 'usereight@example.com' },
    { userId: '9', username: 'userNine', age: 26, email: 'usernine@example.com' },
    { userId: '10', username: 'userTen', age: 35, email: 'userten@example.com' },
    { userId: '11', username: 'userEleven', age: 28, email: 'usereleven@example.com' },
    { userId: '12', username: 'userTwelve', age: 23, email: 'usertwelve@example.com' },
    { userId: '13', username: 'userThirteen', age: 36, email: 'userthirteen@example.com' },
    { userId: '14', username: 'userFourteen', age: 32, email: 'userfourteen@example.com' },
    { userId: '15', username: 'userFifteen', age: 21, email: 'userfifteen@example.com' },
    { userId: '16', username: 'userSixteen', age: 34, email: 'usersixteen@example.com' },
    { userId: '17', username: 'userSeventeen', age: 29, email: 'userseventeen@example.com' },
    { userId: '18', username: 'userEighteen', age: 27, email: 'usereighteen@example.com' },
    { userId: '19', username: 'userNineteen', age: 22, email: 'usernineteen@example.com' },
    { userId: '20', username: 'userTwenty', age: 30, email: 'usertwenty@example.com' },
    { userId: '21', username: 'userTwentyOne', age: 28, email: 'usertwentyone@example.com' },
    { userId: '22', username: 'userTwentyTwo', age: 26, email: 'usertwentytwo@example.com' },
    { userId: '23', username: 'userTwentyThree', age: 25, email: 'usertwentythree@example.com' },
    { userId: '24', username: 'userTwentyFour', age: 31, email: 'usertwentyfour@example.com' },
    { userId: '25', username: 'userTwentyFive', age: 32, email: 'usertwentyfive@example.com' },
    { userId: '26', username: 'userTwentySix', age: 27, email: 'usertwentysix@example.com' },
    { userId: '27', username: 'userTwentySeven', age: 33, email: 'usertwentyseven@example.com' },
    { userId: '28', username: 'userTwentyEight', age: 24, email: 'usertwentyeight@example.com' },
    { userId: '29', username: 'userTwentyNine', age: 22, email: 'usertwentynine@example.com' },
    { userId: '30', username: 'userThirty', age: 23, email: 'userthirty@example.com' },
    { userId: '31', username: 'userThirtyOne', age: 35, email: 'userthirtyone@example.com' },
    { userId: '32', username: 'userThirtyTwo', age: 28, email: 'userthirtytwo@example.com' },
    { userId: '33', username: 'userThirtyThree', age: 30, email: 'userthirtythree@example.com' },
    { userId: '34', username: 'userThirtyFour', age: 34, email: 'userthirtyfour@example.com' },
    { userId: '35', username: 'userThirtyFive', age: 21, email: 'userthirtyfive@example.com' },
    { userId: '36', username: 'userThirtySix', age: 29, email: 'userthirtysix@example.com' },
    { userId: '37', username: 'userThirtySeven', age: 26, email: 'userthirtyseven@example.com' },
    { userId: '38', username: 'userThirtyEight', age: 32, email: 'userthirtyeight@example.com' },
    { userId: '39', username: 'userThirtyNine', age: 33, email: 'userthirtynine@example.com' },
    { userId: '40', username: 'userForty', age: 24, email: 'userforty@example.com' },
    { userId: '41', username: 'userFortyOne', age: 27, email: 'userfortyone@example.com' },
    { userId: '42', username: 'userFortyTwo', age: 25, email: 'userfortytwo@example.com' },
    { userId: '43', username: 'userFortyThree', age: 23, email: 'userfortythree@example.com' },
    { userId: '44', username: 'userFortyFour', age: 22, email: 'userfortyfour@example.com' },
    { userId: '45', username: 'userFortyFive', age: 36, email: 'userfortyfive@example.com' },
    { userId: '46', username: 'userFortySix', age: 31, email: 'userfortysix@example.com' },
    { userId: '47', username: 'userFortySeven', age: 28, email: 'userfortyseven@example.com' },
    { userId: '48', username: 'userFortyEight', age: 24, email: 'userfortyeight@example.com' },
    { userId: '49', username: 'userFortyNine', age: 34, email: 'userfortynine@example.com' },
    { userId: '50', username: 'userFifty', age: 26, email: 'userfifty@example.com' },
    { userId: '51', username: 'userFiftyOne', age: 33, email: 'userfiftyone@example.com' },
    { userId: '52', username: 'userFiftyTwo', age: 29, email: 'userfiftytwo@example.com' },
    { userId: '53', username: 'userFiftyThree', age: 35, email: 'userfiftythree@example.com' }
];



/* const btnClasses = {
    primary: 'btn-primary',
    warning: 'btn-success',
    error: 'btn-error'
}; */

const DEFAULT_STYLE_BTN = 'btn btn-primary';


const modalConfig = {
    modal: document.getElementById('confirmDeleteModal'),
    deleteButton: document.getElementById('deleteBtn'),
   /*  closeButton: document.getElementById('closeModal'), */
    userIdField: document.getElementById('userId')
};

const editModalConfig = {
    editUserField: document.getElementById('editUserId'),
    editUsername: document.getElementById('editUsername'),
    editUserEmail: document.getElementById('editUserEmail'),
    modifyUser: document.getElementById('modifyUser')
}


const $paginationContainer = document.getElementById('pagination-container');
