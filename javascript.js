$(document).ready(function() {
    // Toggle the visibility of the detailed resume
    $(".toggle-button").click(function() {
    $(".detailed-resume").slideToggle();
    if ($(".detailed-resume").is(":visible")) {
    $(".toggle-button").text("Hide Detailed Resume");
    } else {
    $(".toggle-button").text("View Detailed Resume");
    }
    });
    
    // Smooth scroll for navigation links
    $("nav ul li a").click(function(event) {
    event.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate({
    scrollTop: $(target).offset().top
    }, 500);
    });
    });