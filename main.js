function clock(){
const date = new Date()
 let hrs = date.getHours()
 let mins = date.getMinutes()
 let secs = date.getSeconds()
 let session = 'AM';

if (hrs > 12){
    hrs = hrs - 12
    session = 'PM';
}
if (hrs <10){
    hrs = "0" + hrs
}
if (mins < 10){
    mins = "0" + mins
}
if (secs < 10){
    secs = "0" + secs
}
 document.querySelector("#clock").innerHTML = `${hrs} : ${mins} : ${secs} ${session}`;
}
setInterval('clock()', 1000);

clock()