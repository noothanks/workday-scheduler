var textAreaEl = $(".col-6");
var saveBtnEl = $(".saveBtn");
var currentDayEl = $("#currentDay");

var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var hourArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var hour9 = $('#9');
var hour10 = $('#10');
var hour11 = $('#11');
var hour12 = $('#12');
var hour13 = $('#13');
var hour14 = $('#14');
var hour15 = $('#15');
var hour16 = $('#16');
var hour17 = $('#17');

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

    for(i=0; i< 9; i++) {
        var hour = moment().hour();
        if(hour < hourArr[i]) {
            var hourId = hourArr[i];
            $(`#${hourId}`).addClass('future');
        }

        if (hour === hourArr[i]) {
            var hourId = hour.toString();
            $(`#${hourId}`).addClass('present');
        }     
    }
}

// var handleChange = function(event) {
//     var hourId = event.target.id;
//     var appointmentText = event.target.value
//     return appointmentText, hourId
// }

var saveAppointments = function() {

    var appointmentArr = [
        {
            id: 9,
            text: hour9.val()
        },
        {
            id: 10,
            text: hour10.val()
        },
        {
            id: 11,
            text: hour11.val()
        },
        {
            id: 12,
            text: hour12.val()
        },
        {
            id: 13,
            text: hour13.val()
        },
        {
            id: 14,
            text: hour14.val()
        },
        {
            id: 15,
            text: hour15.val()
        },
        {
            id: 16,
            text: hour16.val()
        },
        {
            id: 17,
            text: hour17.val()
        }
    ];

    localStorage.setItem("appointments", JSON.stringify(appointmentArr));

    window.location.reload();
}

var loadAppointments = function() {
     var db = JSON.parse(localStorage.getItem("appointments")) || []

     for(i=0; i<db.length; i++) {
        $(`#${i + 9}`).val(db[i].text)
     }
}

displayDate();
colorCode();
loadAppointments();

// $("textarea").on('input', handleChange);
saveBtnEl.on('click', saveAppointments);