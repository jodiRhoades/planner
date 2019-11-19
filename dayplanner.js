// install moments code for the Day, Month and Date  in Jumbo
var m = moment.parseZone();
$("#currentDay").text(m.format("dddd, MMMM Do"));

//hour blocks are color coded for current, past and future     
var currentHour = new Date().getHours();

$('#time'+currentHour).addClass('bg-danger');

//Current hour in military time
// use the above hour to know what row to change the color

for(var i = currentHour + 1; i < 18; i++) {
    $('#time' + i).removeClass('lightgray')
    $('#time' + i).addClass('bg-success')    
}

// create a for loop to go through as the hour changes

for  (var j=9; j<18; j++){
    getSavedNotes(j)
}

for  (var j=10; j<18; j++){
    getSavedNotes(j)
}

for  (var j=11; j<18; j++){
    getSavedNotes(j)
}

for  (var j=12; j<18; j++){
    getSavedNotes(j)
}

for  (var j=13; j<18; j++){
    getSavedNotes(j)
}

for  (var j=14; j<18; j++){
    getSavedNotes(j)
}

for  (var j=15; j<18; j++){
    getSavedNotes(j)
}

for  (var j=16; j<18; j++){
    getSavedNotes(j)
}

for  (var j=17; j<18; j++){
    getSavedNotes(j)
}


// when this button is clicked it will save the notes into local storage
$('.btn').click(function() {
    var hour= $(this).val()
    localStorage.setItem(hour, $('#time'+hour).val())    
})

function getSavedNotes(id) {
    $("#time"+id).val(localStorage.getItem(id));
    console.log(localStorage.getItem(id));    
}


