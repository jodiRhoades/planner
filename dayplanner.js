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


console.log("working")

function grabData(id) {
    console.log("The ID is: "+ id);
    var input= $("#"+ id).val();
    console.log(input);
    localStorage.setItem(id, input);
    getSavedNotes(); 
}
function getSavedNotes(id) {
    $("#"+ id).val(localStorage.getItem(id));
    console.log(localStorage.getItem(id));    
}

getSavedNotes("9AM");
getSavedNotes("10AM");
getSavedNotes("11AM");
getSavedNotes("12PM");
getSavedNotes("1PM");
getSavedNotes("2PM");
getSavedNotes("3PM");
getSavedNotes("4PM");
getSavedNotes("5PM");

//i can get a key and a value in application but it doesn't stay afer being refreshed.
