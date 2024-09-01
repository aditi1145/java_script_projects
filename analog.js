let seconds = document.querySelector(".second-hand")
let mins = document.querySelector(".minute-hand")
let hours = document.querySelector(".hour-hand")



function time() {
    let secs = new Date().getSeconds();
    let secDeg = secs * 6
    seconds.style.transform = `rotate(${secDeg}deg)`;
    let min = new Date().getMinutes();
    let calMin = min * 6
    mins.style.transform = `rotate(${calMin}deg)`;
    let hrs = new Date().getHours();
    let calhrs = (hrs / 2.00) * 60 + min  * (360/720)
    hours.style.transform = `rotate(${calhrs}deg)`;
    
}


setInterval(() => {
    time()
}, 1000);