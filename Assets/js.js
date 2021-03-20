// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php used for date code

// calls updateDateAndTime every second to update header information
updateDateAndTime();
setInterval( updateDateAndTime , 1000)
colorChange();
setInterval( colorChange , 1000)
dayObject();

// Declare day object if it doesn't exist
function dayObject() {
    var today = moment().format('L');
    if (localStorage.getItem(today) === null){
        var plan = {};
        for (i = 0; i<9; i++) {
            plan[i] = "Nothing planned" + i;     
        localStorage.setItem(today , JSON.stringify(plan));
        } 
    }
    var form = document.querySelectorAll(".form-Control");
    for (i=0 ; i<form.length;i++){
        debugger;
        form[i];
        

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
    var today = new Date();
    var hour = today.getHours();
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

// function button(i){
//     var times = document.querySelectorAll(".timeSlot");
//     var today = moment().format('L');
//     var day = localStorage.getItem(today)
//     debugger;
    // console.log(times[i].childNodes[0].nextSibling.nextElementSibling.childNodes[0].value)
    // localStorage.setItem(day[i] , times[i].childNodes[0].nextSibling.nextElementSibling.childNodes[0].value);
// }
