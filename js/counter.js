const today = new Date()
const tomorrow = new Date(today)
var deadline = tomorrow.setDate(tomorrow.getDate() + 1)
var zero_s;
var zero_m;

var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);

if (seconds-10 < 0) {

        zero_s = "0";
} else zero_s = "";

if (minutes-10 < 0) {

        zero_m = "0";
} else zero_m = "";

document.querySelector(".timer__hours_num-1").innerHTML = String(parseInt((hours / 10), 10)); 
document.querySelector(".timer__hours_num-2").innerHTML = String(parseInt((hours % 10), 10));

document.querySelector(".timer__minutes_num-1").innerHTML = String(parseInt((minutes / 10), 10)); 
document.querySelector(".timer__minutes_num-2").innerHTML = String(parseInt((minutes % 10), 10));

document.querySelector(".timer__seconds_num-1").innerHTML = String(parseInt((seconds / 10), 10)); 
document.querySelector(".timer__seconds_num-2").innerHTML = String(parseInt((seconds % 10), 10)); 

document.querySelector(".applic-timer__hours_num-1").innerHTML = String(parseInt((hours / 10), 10)); 
document.querySelector(".applic-timer__hours_num-2").innerHTML = String(parseInt((hours % 10), 10));

document.querySelector(".applic-timer__minutes_num-1").innerHTML = String(parseInt((minutes / 10), 10)); 
document.querySelector(".applic-timer__minutes_num-2").innerHTML = String(parseInt((minutes % 10), 10));

document.querySelector(".applic-timer__seconds_num-1").innerHTML = String(parseInt((seconds / 10), 10)); 
document.querySelector(".applic-timer__seconds_num-2").innerHTML = String(parseInt((seconds % 10), 10)); 

}, 1000);