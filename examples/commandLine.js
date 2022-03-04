var args = process.argv; // argv = variable amount of arguments

//console.log(args[2]);

// for (var i = 2; i < args.length; i++){
//     console.log(args[i]);
// }

console.log(args.slice(2));

console.log('The first value is ' + args[2]);

//ES6 template strings - use "backticks" or "oblique quotes" ``
console.log(`The second value is ${args[3]}`);

//arrow function (annonymous function)
args.forEach(element => {
    console.log(element);
})