// when the docoment is ready, run the function(s) defined with in function(){}
$(document).ready(function(){
    $("#myCarousel").carousel({interval:2000});
    // when button is clicked and has a fa of pause, pause the carousel and change the fa to play
    // vise versa
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass("fa-play")){
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
            $("#myCarousel").carousel("cycle");
        }else if($("#carouselButton").children("span").hasClass("fa-pause")){
            $("#carouselButton").children("span").addClass("fa-play");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#myCarousel").carousel("pause");
        }
    });
    $("#loginButton").click(function(){
        $("#login").modal("show");
    })
    $("#reservationButton").click(function(){
        $("#reservation").modal("show");
    })
})