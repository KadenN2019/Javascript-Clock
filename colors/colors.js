function showTime(){
    var date = new Date();
    var hours = date.getHours() 
    var min = date.getMinutes() 
    var sec = date.getSeconds() 
    
    hours = (hours < 10) ? "0" + hours : hours
    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    
    var time = `#${hours}${min}${sec}`
    $("#colors").html(time)
    $("body").css("background", time)
    
    setInterval(showTime, 1000)

}

showTime()