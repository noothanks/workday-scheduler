var textAreaEl = $(".col-6");
var saveBtnEl = $("saveBtn")
var currentDayEl = $("currentDay");
var d = new Date()

var displayDate = function () {
    var month = moment().get('month');
    
    console.log(month);
}

displayDate;