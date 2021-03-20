// calls updateDateAndTime and colorChenge every second to update header information and calendar colors
updateDateAndTime();
setInterval( updateDateAndTime , 1000)
colorChange();
setInterval( colorChange , 1000)
dayObject();

// Changes information in local storage
function dayObject() {
    var today = moment().format('L');
    // if there is no data for the current date, this block creates the objexct that stores that data
    if (localStorage.getItem(today) === null){
        var plan = {};
        for (i = 0; i < 10; i++) {
            plan[i] = ""     
        localStorage.setItem(today , JSON.stringify(plan));
        } 
    }
    // pulls the data from local storage and populates the calander
    var form = document.querySelectorAll(".form-control");
    for (i=0 ; i<form.length ;i++){
        form[i].value = JSON.parse(localStorage.getItem(today))[i];     
    }
}
// Function for updating date and time in header
function updateDateAndTime() {
    var currentDay = $("#currentDay");
    var currentTime = $("#currentTime");
    currentDay.innerHTML = "";
    currentTime.innerHtml = "";
    currentDay.text("Today is " + moment().format('dddd') + ", " +moment().format('ll')) 
    currentTime.text("Current time is " + moment().format('LT'))
}
// Changes color of table elements based on time of day
function colorChange () {
    var hour = moment().format('h');
    if (moment().format('a') === 'pm'){
        hour = parseInt(hour) + 12;
    }
    var times = document.querySelectorAll(".timeSlot");
    var timeSlots = [8,9,10,11,12,13,14,15,16,17]
    for (var i = 0; i < timeSlots.length; i++) {
        times[i].classList.remove("past");
        times[i].classList.remove("present");
        times[i].classList.remove("future");
        if(hour > timeSlots[i]){
            times[i].classList.add("past");
        }else if (hour == timeSlots[i]) {
            times[i].classList.add("present");
        }else {
            times[i].classList.add("future");
        }
    }
}
// On save button click, this changes the data in local storage
function button(i){
    var times = document.querySelectorAll(".timeSlot");
    var text = times[i].childNodes[0].nextSibling.nextElementSibling.childNodes[0].value
    var today = moment().format('L');
    var day = JSON.parse(localStorage.getItem(today));
    day[i] = text;
    localStorage.setItem(today , JSON.stringify(day));
}