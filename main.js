$(document).ready(function(){

    var hour = moment().hours();

    //current day is displayed at the top of the calendar

    function getDate(){
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };

    //Each timeblock is color coded to indicate whether it is in the past, present or future

    function colorSchedule(){
        $("input").each(function(){
            var rowHour = $(this).attr("id");
            var rowNumber = parseInt(rowHour);
            if (rowNumber === hour){
                $(this).addClass("present");
            } else if (rowNumber < hour){
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            };
        });
    };


    //Rendering stored inputs after page refresh

    function renderStoredInputs(){
        $(".event").each(function(){
            var inputId = $(this).attr("id");
            $(this).val(localStorage.getItem(inputId));
        });
    };

    //Click event to save user input in local storage

    $(".saveBtn").click(function(){
        var scheduleInputs = $(this).siblings(".event").val();
        var inputsLocation = $(this).siblings(".event").attr("id");
        localStorage.setItem(inputsLocation,scheduleInputs);
    });
    
    setInterval(getDate,1000);
    colorSchedule();
    setInterval(colorSchedule,1000);
    renderStoredInputs();

});