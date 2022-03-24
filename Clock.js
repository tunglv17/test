window.onload = () => {
    var minute = 5;
    var sec = 60;
    setInterval(() => {
        document.getElementById("time").innerHTML = minute + " : " + sec;
        sec--;
        if (sec == 00) {
            minute--;
            sec = 60;
            if (minute == 0) {
                minute = 5;
            }
        }
    }, 1000);
}