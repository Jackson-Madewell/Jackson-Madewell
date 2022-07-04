$('.barText2').hover(function() {
    $(this).css('color', 'grey');
}, function() {
    $(this).css('color', 'darkslategrey');

});

$('#AboutMe').click(function() {
    $('#ContactMeWhole').hide();
    $('#ProjectsWhole').hide();
    $('#AboutMeWhole').show();
});

$('#Portfolio').click(function() {
    $('#ContactMeWhole').hide();
    $('#ProjectsWhole').show();
    $('#AboutMeWhole').hide();
});

$('#ContactMe').click(function() {
    $('#ContactMeWhole').show();
    $('#ProjectsWhole').hide();
    $('#AboutMeWhole').hide();
});


$("button").click(function() {
    let val1 = $(".artist").val();
    let val2 = $(".hours").val();
    let result = Number(val2) * 365 * 50;
    $(".result").append("<p> You will listen to " + result + " hours of " + val1 + ".</p>");
});

$('#music-calc').click(function() {
    $('#musicfortune').show();
    $('#linked').hide();
});

$('#linkup').click(function() {
    $('#musicfortune').hide();
    $('#linked').show();
});

var choice = "";

$("#pooh").click(function() { 
    $("#pooh").hide();
    $("#spotem").hide();
    $(".txt1").hide();
    choice = "pooh";
    $("#pooh2").show();
    $("#txt2").show();
    $("#buttong").show();
});
$("#spotem").click(function() { 
    $("#pooh").hide();
    $("#spotem").hide();
    $(".txt1").hide();
    choice = "spotem";
    $("#spotem2").show();
    $("#txt3").show();
    $("#buttong").show();
});

$('#buttong').click(function() {
    $("#pooh2").hide();
    $("#txt2").hide();
    $("#buttong").hide();
    $("#spotem2").hide();
    $("#txt3").hide();
    $("#buttong").hide();
    $("#pooh").show();
    $("#spotem").show();
    $(".txt1").show();
});