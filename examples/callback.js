function product(num1, num2, callback) {
    var result = num1 * num2;
    callback(result);
}

// function print(result) {
//     console.log(result);
// }

// prdouct(37, 4, print); 

product(37, 4, function(result) {  // anonymous function instead 
    console.log(result);
});

product(37, 4, result => console.log(result)); // single line arrow function 




