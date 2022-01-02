const timeclock = document.querySelector('.time-clock');

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

const updateClock = () => {
  const d = new Date();
  const h = addZero(d.getHours());
  const m = addZero(d.getMinutes());
  const s = addZero(d.getSeconds());
  
  const clockHTML = `
    <span>${h}</span>:
    <span>${m}</span>:
    <span>${s}</span>
` 
  
    timeclock.innerHTML = (clockHTML)
}

setInterval(updateClock, 1000);



const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let day = d.getDay();
let week = weekday[d.getDay()];
let name = month[d.getMonth()];
let year = d.getFullYear();

document.querySelector(".TxtWeek").innerHTML = week;
document.querySelector(".TxtDay").innerHTML = day;
document.querySelector(".TxtMonth").innerHTML = name;
document.querySelector(".TxtYear").innerHTML = year;


