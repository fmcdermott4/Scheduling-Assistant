// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php used for date code

// calls updateDateAndTime every second to update header information
updateDateAndTime();
colorChange();
setInterval( updateDateAndTime , 1000)

// Function for updating date and time in header
function updateDateAndTime() {
    var today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();
    var days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","November","December"]
    var currentDay = $("#currentDay");
    var currentTime = $("#currentTime");
    currentDay.innerHTML = "";
    currentTime.innerHtml = "";
    currentDay.text("Today is " + days[day] + ", " + months[month] + " " + day + ", " + year +".");
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var zero;
    var amPm = " AM"
    if(hours >=12){
        amPm = " PM";
        hours -=12;
    }
    if (minutes < 10 ){
        zero = "0";        
    } else {
        zero = "";
    }
    currentTime.text("Current time is " + hours + ":" + zero + minutes +" " + amPm)
}
// Changes color of table elements besed on time of day
function colorChange () {
    var today = new Date();
    var hour = today.getHours();
    var times = document.querySelectorAll(".timeSlot");
    var timeSlots = [8,9,10,11,12,13,14,15,16,17]
    for (var i = 0; i < timeSlots.length; i++) {
        if(hour > timeSlots[i]){
            times[i].classList.add("past");
        }else if (hour == timeSlots[i]) {
            times[i].classList.add("present");
        }else {
            times[i].classList.add("future");
        }
    }
}
