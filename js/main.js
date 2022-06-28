const interval= document.getElementById("interval");
var intervalInstance;

function startInterval(){
    intervalInstance = setInterval(function (){
        interval.innerHTML= new Date().toLocaleTimeString();

    }, 0000)
}

function stopInterval(){
    clearInterval(intervalInstance);
}