$(function () {
    // slider height
    var win = $(window).height();
    var upper = $('.upper-bar').innerHeight();
    var nav  = $('.navbar').innerHeight();
    console.log(`${win} + .... ${upper} +  ..... ${nav}`)
    // slider height


    // window scroll event
    $(window).scroll(function () {
        //Features scroll
        if ($(this).scrollTop() >= 280) {
            $(".i1").removeClass("animate__fadeOut").addClass("animate__fadeInUp");
            $(".i2").removeClass("animate__fadeOut").css("animation-delay", "500ms").addClass("animate__fadeInUp");
            $(".i3").removeClass("animate__fadeOut").css("animation-delay", "1000ms").addClass("animate__fadeInUp");
            $(".i4").removeClass("animate__fadeOut").css("animation-delay", "1500ms").addClass("animate__fadeInUp");

        }
        //Features scroll

        // Why choice is scroll
        if ($(this).scrollTop() >= 4908) {
            $(".Why-Choose-Us-Info").removeClass("animate__fadeOutRight").addClass("animate__fadeInRight");
            $(".Why-Choose-Us-Img").removeClass("animate__fadeOutLeft").addClass("animate__fadeInLeft");


        }
        // Why choice is scroll


    });


    // window scroll event

    $('.slider , .carousel-item').height(win - ( upper + nav ));
    //shuffle img
    $(".Featured-ul li").on("click",function () {
        $(this).addClass("li-active").siblings().removeClass("li-active");
        if ($(this).data("class") == "all") {
            $(".im").removeClass("animate__bounceOut").addClass("animate__bounceIn");
            $(".im").css("display","block");
        }
        else {
            $(".im").removeClass("animate__bounceIn").addClass("animate__bounceOut");
            $($(this).data("class")).removeClass("animate__bounceOut").addClass("animate__bounceIn");
            $($(this).data("class")).css("display","block");

        }
    });
    ////shuffle img

    //Testimonials Hover
    $(".Testimonials-slide").hover(function () {
        $(".Testimonials-icon").css('opacity', '1');
    },function () {

        $(".Testimonials-icon").css("opacity",'0')
    })

    //Testimonials Hover

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});