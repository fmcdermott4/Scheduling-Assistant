// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php used for date code

// calls updateDateAndTime every second to update header information
updateDateAndTime();
setInterval( updateDateAndTime , 1000)
colorChange();
setInterval( colorChange , 1000)

// Function for updating date and time in header
function updateDateAndTime() {
    var currentDay = $("#currentDay");
    var currentTime = $("#currentTime");
    currentDay.innerHTML = "";
    currentTime.innerHtml = "";
    currentDay.text("Today is " + moment().format('dddd') + ", " +moment().format('ll')) 
    currentTime.text("Current time is " + moment().format('LT'))
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
