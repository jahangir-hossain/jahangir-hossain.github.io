// Preloader
$(window).on('load', function(e) {
    e.preventDefault();
    $("#intro-loader").delay(1e3).fadeOut();
    $(".mask").delay(1e3).fadeOut("slow");
});

$(function() {
	"use strict";

    // animation effect
    $(".item_top").each(function() {
        $(this).appear(function() {
            $(this).delay(200).animate({
                opacity: 1,
                top: "0px"
            }, 1e3)
        })
    });
    
    $(".item_bottom").each(function() {
        $(this).appear(function() {
            $(this).delay(200).animate({
                opacity: 1,
                bottom: "0px"
            }, 1e3)
        })
    });

    $(".item_left").each(function() {
        $(this).appear(function() {
            $(this).delay(200).animate({
                opacity: 1,
                left: "0px"
            }, 1e3)
        })
    });

    $(".item_right").each(function() {
        $(this).appear(function() {
            $(this).delay(200).animate({
                opacity: 1,
                right: "0px"
            }, 1e3)
        })
    });

    $(".item_fade_in").each(function() {
        $(this).appear(function() {
            $(this).delay(250).animate({
                opacity: 1,
                right: "0px"
            }, 1500)
        })
    });

	// typeit js
    new TypeIt("span.type-element", {
        strings: ['Web Designer & Developer', 'Python Programmer', 'Web Apps Developer'],
        speed: 200,
        breakLines: false,
        startDelay: 500,
        nextStringDelay: 500,
        loop: true,
        loopDelay:500,
        autoStart: true,
        waitUntilVisible: true
    }).go();

    // images popper
    var popper = $('.img-popper');
    var image = $('.img-container img');
    var popperImage = $('img.popper-content');
    var popperCaption = $('.popper-caption');
    var closeBtn = $('span.close');

    image.on('click', function() {
        popper.fadeIn(1000);
        let src = $(this).attr('src');
        popperImage.attr('src', src);
        popperCaption.text($(this).attr('alt'));
    });

    closeBtn.on('click', function() {
        popper.fadeOut(300);
    });

    // skill-bar
    $('ul.skill-bar li').each(function() {
        $(this).appear(function () {
            $(this).animate({
                opacity: 1,
                left: "0px"
            }, 2e3);

            let e = $(this).find('span').attr('data-width');
            $(this).find('span').animate({
                width: e + "%",
            }, 2e3, "easeOutBounce");
        });
    });

    // skill-chart
    $('.skill-chart').appear(function() {
        $('.skill-chart').easyPieChart({
            easing: "easeOutBounce",
            barColor: "#474d5d",
            trackColor: '#ace',
            size: 150,
            lineWidth: 15,
            animate: 2e3
            // onStep: function(e, t, n) {
            //     $(this.el).find('.percent').text(Math.round(n));
            // }
        });
    });

    // form-validate
    $(".validate").validate();
    var r = $("#contactform");
    var i = $("#contactForm_submit");
    var s = $(".form-respond");
    $(document).on("submit", "#contactform", function(e) {
        e.preventDefault();
        $.ajax({
            url: "sendemail.php",
            type: "POST",
            dataType: "html",
            data: r.serialize(),
            beforeSend: function() {
                s.fadeOut();
                i.html("Sending....")
            },
            success: function(e) {
                r.fadeOut(300);
                s.html(e).fadeIn(1e3);
                setTimeout(function() {
                    s.html(e).fadeOut(300);
                    $("#name, #email, #message").val("");
                    r.fadeIn(1800)
                }, 4e3)
            },
            error: function(e) {
                console.log(e)
            }
        });
    });

    // back-to-top
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });

    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });

    // smooth scroll
    $(".navbar-nav li a.nav-link, a.navbar-brand").bind("click", function(e) {
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top - 70
        }, 2e3, "easeInOutExpo");
        e.preventDefault()
    });
})