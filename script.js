function addUser(newUser){
    //Get the existing user data form the local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    //Add the new user to the array
    users.push(newUser);

    //Save the updated user data back to local storage
    localStorage.setItem('users',JSON.stringify(users));
}

//Function to retrieve all users
function getUsers(){
    //Get the user data from the local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    return users;
}

//Example usage:
const user1 = {name:'Vaibhav',age:30 }
const user2 = {name:'Kaustubh',age:30}

addUser(user1);
addUser(user2);

const allUsers = getUsers();
console.log(allUsers);