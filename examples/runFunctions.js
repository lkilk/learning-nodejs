function executor(toNumber) {
    var result = '42'
    return toNumber(result);
}

function toNumber(param) {
    return Number(param);
}

console.log(executor(toNumber));

console.log(executor(function(param){
    return Number(param);
}));

console.log(executor(param => Number(param)));

