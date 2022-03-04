function doWork(callback) {
    var result = null;
    setTimeout(function() {
        result = "My work here is done";
        callback(result);
    }, 3000);
}

doWork(function(output){
    console.log(output);
})

