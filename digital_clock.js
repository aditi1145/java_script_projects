setInterval(showTime,1000);
function showTime(){
    let time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    am_pm ="am"

    if(hrs>=12){
        if(hrs > 12){
            hrs = hrs- 12;
            am_pm="pm";
        }
        else if(hrs == 0){
            hrs = 12;
            am_pm="am";
        }
    }

    hrs = hrs<10? "0"+ hrs : hrs ;
    mins = mins<10? "0"+ mins : mins ;
    secs = secs<10? "0"+ secs : secs ;

    let currentTime =  hrs +":" + mins + ":" + secs + am_pm;

    document.getElementById("mypage").innerHTML = currentTime;

}
showTime()