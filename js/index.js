let lastDate = new Date('dec 31, 2023  17:35:55').getTime();

let definedFuctioncalleverysecond = setInterval(function(){

    let currentDate = new Date().getTime();

    let remainingTime = lastDate - currentDate
    
    let days = Math.floor(remainingTime/(1000*60*60*24));
    let hours = Math.floor((remainingTime%(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((remainingTime%(1000*60*60))/(1000*60));
    let seconds = Math.floor((remainingTime%(1000*60))/(1000));
    
    
    document.getElementById('clock').innerHTML = days + 'd ' + hours + 'h ' + minutes +'m '+ seconds + 's'
    
     if(remainingTime<0){
        clearInterval(definedFuctioncalleverysecond);
        document.getElementById('clock').innerHTML = 'COMPLETED';
     }

}, 1000);

