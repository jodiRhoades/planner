// install moments code for the Day, Month and Date  in Jumbo
var m = moment.parseZone();
$("#currentDay").text(m.format("dddd, MMMM Do"));

//hour blocks are color coded for current, past and future     
var currentHour = new Date().getHours();

$("currentHour").css("background-color", "red");
console.log(currentHour);


//Current hour in military time
// use the above hour to know what row to change the color
// create a for loop 
for (var i = currentHour + 1; i < 18; i++) {
    $('#time-' + i).removeClass('lightgray')
    $('#time-' + i).addClass('bg-success')
    //not functioning.... not sure how to fix it
}

getSavedNotes();
console.log("working")
$(".saveBtn").click(function(){
    console.log("click")
    var time = $(this).siblings("div.hour").text();
    var input = $(this).siblings("textarea.time-block").val();
    localStorage.setItem(time, input);
})

function getSavedNotes() {
    $("#1PM").val(localStorage.getItem("1PM"));

    // $("time-9").val(localStorage.getItem("time-9"));

}


