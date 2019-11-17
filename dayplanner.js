// install moments code for the Day, Month and Date  in Jumbo
var m = moment.parseZone();
$("#currentDay").text(m.format("dddd, MMMM Do"));

//hour blocks are color coded for current, past and future     
var currentHour = new Date().getHours();
$("currentHour").css("background-color", "red");

//Current hour in military time
// use the above hour to know what row to change the color
// create a for loop 
for (var i = currentHour + 1; i < 18; i++) {
    $('#time-' + i).removeClass('lightgray')
    $('#time-' + i).addClass('bg-success')
    //??not sure how well this functions since I'm not in the actual working hours of the planner

}
//on clicking the save button we save the new event to local storage
var newEvent=[{"time-9":""}, {"time-10":""}, {"time-11":""}, {"time-12":""}, {"time-1":""}, {"time-2":""}, {"time-3":""}, {"time-4":""}, {"time-5":""}]
$(".saveBtn").click(function(){
   localStorage.setItem("newEvent", JSON.stringify(newEvent));
   $("newEvent").text("newEvent");
   //??feel like I need to ad JSONparse
   //??Can't remembr how to "append" or is it "text"
   //??I still need to get a value... but not sure where to put it or how. 
   //??I can type "dentist" in textarea and I'll get a key of "newEvent but the Vaule is screwy
   
});    





