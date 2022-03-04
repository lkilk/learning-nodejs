var asyncAdd = (arg1, arg2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof arg1 === 'number' && typeof arg2 === 'number'){
                resolve(arg1 + arg2);
            } else {
                reject('Arguments must be numbers');
            }
        }, 3000);
    });
}

asyncAdd(5, '7')
    .then((res) => console.log('Result: ',res))
    .catch((errorMessage) => console.log(errorMessage));
