var textAreaEl = $(".col-6");
var saveBtnEl = $(".saveBtn");
var currentDayEl = $("#currentDay");

var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var hourArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var appointmentArr = [];

var displayDate = function () {
    //get current month
    var month = moment().month().toString();
    month = monthArr[month]

    //get day of month
    var day = moment().date().toString();
    
    //get current year
    var year = moment().year().toString();

    var currentDate = `The current date is ${month} ${day}, ${year}`

    currentDayEl.text(currentDate);
}

var colorCode = function() {
    var hour = moment().hour();

    for(i=0; i< hourArr.length; i++) {
        if(hour < hourArr[i]) {
            var hourId = hourArr[i].toString();
            $(`#${hourId}`).addClass('future');
        }

        if (hour = hourArr[i]) {
            var hourId = hour.toString();
            $(`#${hourId}`).addClass('present');
            // return;
        }     
    }
}

var handleChange = function(event) {
    var hourId = event.target.id;
    var appointmentText = event.target.value
    return appointmentText, hourId
}

var saveAppointments = function() {
    for (i=0; i<hourArr; i++) {
        //get hour id
        //get appointmentText
        //create an object for each hour
        //set hour object property to corresponding textArea id
        //set appointment object property to corresponding textArea value
        //stringify and set to local storage
    }
}

displayDate();
colorCode();

$("textarea").on('input', handleChange);
saveBtnEl.on('click', saveAppointments);