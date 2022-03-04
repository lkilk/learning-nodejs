var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "Liam"
    };
    
    setTimeout(() => { 
        callback(user);
    }, 3000);

}

getUser(112, (userObject) => {
    console.log(userObject);
});

