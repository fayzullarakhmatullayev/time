function time(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes().toString();
    var seconds = date.getSeconds().toString();
    
    if(minutes.length == 1){
        seconds = '0' + seconds;
    }
    if(seconds.length == 1){
        seconds = '0' + seconds;
    }
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = ":"+minutes + ":";
    document.querySelector('.seconds').innerHTML = seconds;
} 

setInterval(() => {
    time();
}, 1000);





