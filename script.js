var currentDate = ("#currentDay")
var userInputArray = []
var time = (".input-time")
var currentHour = moment().hours();

// making sure that jquery is working
// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {
        $( ".saveBtn" ).click(function() {

        var value = $(this)
        // children of each element in the set of matched elements
        .children(".description")
        .val();

        var time = $(this).attr("input-time");
        var hour = moment().hour();  
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
    userInputArray.push( moment().hour(i) .format("h, a")
    );

}

function changeColors() {
    
}