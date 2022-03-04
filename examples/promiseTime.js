function promiseTime(time) {
    return new Promise(function(resolve, reject){
        if (time > 0){
            setTimeout(resolve, time);
        } else {
            reject();
        }
     }).then(function(){
         console.log(`Ran setTimeout after ${time}ms`);
     }).catch(function(){
         console.log(`Timeout of ${time}ms is too short`);
     })//.finally(function(){
    //      console.log('Finished');
    //  })
}

promiseTime(3000);