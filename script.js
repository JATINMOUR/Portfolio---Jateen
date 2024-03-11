$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- mail contact  -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });

});

var typed = new Typed(".typing-text", {
    strings: ["Jateen","Blogger" , "web designing", "android developer", "web developer","Gamer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const scroll = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL ABOUT */
scroll.reveal('.about .content h3', { delay: 200 });
scroll.reveal('.about .content .tag', { delay: 200 });
scroll.reveal('.about .content p', { delay: 200 });
scroll.reveal('.about .content .box-container', { delay: 200 });
scroll.reveal('.about .content .resumebtn', { delay: 200 });

/* SCROLL SKILLS */
scroll.reveal('.skills .container', { interval: 200 });
scroll.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
scroll.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
scroll.reveal('.work .box', { interval: 200 });

/* SCROLL CONTACT */
scroll.reveal('.contact .container', { delay: 400 });
scroll.reveal('.contact .container .form-group', { delay: 400 });