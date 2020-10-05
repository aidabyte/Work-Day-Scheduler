var currentDate = ("#currentDay")
var userInputArray = []
var time = (".input-time")

// making sure that jquery is working
$(document).ready(function() {
    $(".saveBtn").on("click", function() {

        var value = $(this)
        .siblings(".description")
        .val();

        var time = $(this).attr("input-time");
        var hour = moment().hour();

        localStorage.setItem(time,value);
        
    });
    //date,time, and updating seconds every one thousand miliseconds
    $("currentDay").text(moment());
    setInterval(displayTodaysDateAndTime, 1000)

    currentDate = $("#currentDay");
    displayTodaysDateAndTime();
    
    function displayTodaysDateAndTime() {
        currentDate.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }
});

    userInputArray = [];
for( let i = 9; i < userInputArray.length; i ++){
    userInputArray.push(
        moment()
        .hour(i)
        .format("h, a")
    );

}
