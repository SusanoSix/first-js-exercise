var database = [
    {
        username: "jack6",
        password: "123"
    },
    {
        username: "rob",
        password: "abc"
    },
    {
        username: "man",
        password: "pw"
    },
]

var newsFeed = [
    {
        user: "jack",
        post: "winter'\s pretty calm this year..."
    },
    {
        user: "rob",
        post: "found a new restuarant!!!"
    },
    {
        user: "bar",
        post: "I wonder who's in area ABC right now!"
    }
]

var userNamePrompt = prompt("Username");
var passwordPrompt = prompt("Password?")

//code for verifying login against database array
function validUser(username, password){
    for (var i = 0; i < database.length; i++){
        if (database[i].username === username   &&
            database[i].password === password ) {
                return true;
            
            } 
            

    } return false;
}

//code for executing validUser function 
function signIn (username, password){
    if (validUser (username, password)){
        console.log(newsFeed);
    } else {
        alert("Hmm. Try checking the username or password and try again!")
    }
}

signIn(userNamePrompt, passwordPrompt); 