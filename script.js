var currentDate = ("#currentDay")
var userInputArray = []
var time = (".input-time")


$(document).ready(function() {
    $(".saveBtn").on("click", function() {

        var value = $(this)
        .siblings(".description")
        .val();

        var time = $(this).attr("input-time");
        var hour = moment().hout();

        localStorage.setItem(time,value);
        
    });
});