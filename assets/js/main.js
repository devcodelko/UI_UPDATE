$( function() {

    // ------------ Smooth Scrolling with Lenis ------------
    if (typeof Lenis !== 'undefined') {
        window.lenis = new Lenis({
            duration: 1.2,
            easing: function (t) {
                return Math.min(1, 1.001 - Math.pow(2, -10 * t));
            },
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.5,
            infinite: false,
        });

        function raf(time) {
            if (window.lenis) {
                window.lenis.raf(time);
            }
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();

    // scrollIt
    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'linear',         // the easing function for animation
        scrollTime: 700,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -100            // offste (in px) for fixed top navigation
      });


    // ---------- nav scroll -----------
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar")

        if (bodyScroll > 200) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });
    

    // ---------- to top -----------
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $(".to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });
    
    // ------- to top -------
    $('.to_top').on('click', function(e) {
        e.preventDefault();
        if (window.lenis) {
            window.lenis.scrollTo(0, { duration: 1.2 });
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 600);
        }
        return false;
    });

    // ------ sidemenu 7 ------
    $(".side_menu_btn").on("click", function() {
        $(this).toggleClass("active");
        $("#side_menu").toggleClass("show");
        $(".side_overlay").toggleClass("show");
    })

    $(".side_menu_cls").on("click", function() {
        $("#side_menu").removeClass("show");
        $(".side_overlay").removeClass("show");
    })

    $(".side_overlay").on("click", function() {
        $("#side_menu").removeClass("show");
        $(this).removeClass("show");
    })

    // --------- navbar active ---------
    $(".faq-category li a").on("click", function() {
        $(this).addClass("active");
        $(this).parent().siblings().children("a").removeClass("active");
    })

    // --------- navbar active ---------



    /* ==============  priceing_s2  ============== */
    $('#monthly-input2').on('change', function() {
        $(".yearly_price , .monthly_price").toggleClass("show");
    });
    /* ==============  priceing_s5  ============== */
    $('#monthly-input').on('change', function() {
        $(".monthly_price").show();
        $(".monthly_price").siblings(".yearly_price").hide();
    });
    $('#yearly-input').on('change', function() {
        $(".yearly_price").show();
        $(".yearly_price").siblings(".monthly_price").hide();
    });


/* ===============================  projects style-12  =============================== */
    var containerEl = document.querySelector('.projects.style-12 .items');
    if (containerEl && typeof mixitup === 'function') {
        var mixer = mixitup(containerEl);
    }
    // ----- active & unactive -----
    $(".mix_tabs").on("click" , ".tab-link" , function(){
        $(this).addClass("active").siblings().removeClass("active");
    })




    // -------- counter --------
        $('.counter').countUp({
            delay: 10,
            time: 2000
        });

    // -------- blog effect --------
    $(".blog .blog_box").mouseenter(function(){
        $(this).find(".text").slideDown();
    })
    $(".blog .blog_box").mouseleave(function(){
        $(this).find(".text").slideUp();
    })

      // --------- fav btn ---------
  $(".fav-btn").on("click" , function(){
        $(this).toggleClass("active");
    })

    // --------- grid list view ---------
    $(".grid-list-btns").on( "click", ".bttn" , function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".grid-list-btns").on( "click", ".list-btn" , function(){
        $(".products-content .products").addClass("list-view");
    })

    $(".grid-list-btns").on( "click", ".grid-btn" , function(){
        $(".products-content .products").removeClass("list-view");
    })


    // ------------ increase products -----------
    $(".qt-plus").click(function() {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    });

    $(".qt-minus").click(function() {

        child = $(this).parent().children(".qt");

        if (parseInt(child.html()) > 1) {
            child.html(parseInt(child.html()) - 1);
        }

        $(this).parent().children(".full-price").addClass("minused");

    });

});

 // ---------- hover dropdown -----------
 const $dropdown = $(".dropdown");
 const $dropdownToggle = $(".dropdown-toggle");
 const $dropdownMenu = $(".dropdown-menu");
 const showClass = "show";

 $(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $dropdown.hover(
        function() {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });
  



// ------------ swiper sliders -----------
$(document).ready(function() {
    var swiper = new Swiper('.portfolio-slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: ".portfolio-slider .swiper-pagination"
        },
        navigation: {
            nextEl: '.portfolio-slider .swiper-button-next',
            prevEl: '.portfolio-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ blog sliders -----------
    var swiper = new Swiper('.blog_slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: ".blog_slider .swiper-pagination"
        },
        navigation: {
            nextEl: '.blog_slider .swiper-button-next',
            prevEl: '.blog_slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        // loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ services sliders -----------
    var swiper = new Swiper('.services_slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: ".services_slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.services_slider .swiper-button-next',
            prevEl: '.services_slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.works_slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: ".works_slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.works_slider .swiper-button-next',
            prevEl: '.works_slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.reviews_slider .swiper-container', {
        effect: "fade",
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: ".reviews_slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.reviews_slider .swiper-button-next',
            prevEl: '.reviews_slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.testimonial-slider.style-3 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 100,
        speed: 1000,
        pagination: {
            el: ".testimonial-slider.style-3 .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonial-slider.style-3 .swiper-button-next',
            prevEl: '.testimonial-slider.style-3 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.screenshots-slider.style-4 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });
      
    // ------------ clients sliders -----------
    let SwiperBottom = new Swiper('.clients-slider5 .swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 6,
    speed: 6000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        787: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 6,
        }
    }
    });
      
    // ------------ testimonial sliders -----------
    var swiper = new Swiper('.testimonial-slider.style-5 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: ".testimonial-slider.style-5 .swiper-pagination",
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ services sliders -----------
    var swiper = new Swiper('.services-slider.style-6 .swiper-container', {
        slidesPerView: 6,
        centeredSlides: true,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 6,
            }
        },
        on: {
            slideChange: function () {
              var activeIndex = this.activeIndex;
              var realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
             $('.swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2');
             $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').prev().prev().addClass('swiper-slide-nth-prev-2');
             $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').next().next().addClass('swiper-slide-nth-next-2');
            },
          }
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.slider-3items .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: ".slider-3items .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-3items .swiper-button-next',
            prevEl: '.slider-3items .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.testi-slider.style-6 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.testi-slider.style-6 .swiper-button-next',
            prevEl: '.testi-slider.style-6 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true
    });

    // ------------ works sliders -----------
    var swiper = new Swiper('.blog-details-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        speed: 1000,
        pagination: {
            el: ".blog-details-slider .swiper-pagination",
            clickable: "true",
        },
        navigation: {
            nextEl: '.blog-details-slider .swiper-button-next',
            prevEl: '.blog-details-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true
    });

    // ------------ related-postes-slider -----------
    var swiper = new Swiper('.related-postes-slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 80,
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.related-postes-slider .swiper-button-next',
            prevEl: '.related-postes-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ related-postes-slider -----------
    var swiper = new Swiper('.culture-slider .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: "true",
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ gallery-thumbs-slider -----------
    var galleryThumbs = new Swiper('.product .gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
    });
    var galleryTop = new Swiper('.product .gallery-top', {
        spaceBetween: 10,
        navigation: false,
        thumbs: {
            swiper: galleryThumbs
        }
    });

    // ------------ related-postes-slider -----------
    var swiper = new Swiper('.related-products-slider .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 24,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.related-products-slider .swiper-button-next',
            prevEl: '.related-products-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    // ------------ features-slider7 -----------
    var swiper = new Swiper('.features-slider7 .swiper-container', {
        spaceBetween: 50,
        centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ projects-slider7 -----------
    var swiper = new Swiper('.projects-slider7 .swiper-container', {
        // slidesPerView: 5,
        spaceBetween: 40,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.projects.style-7 .swiper-button-next',
            prevEl: '.projects.style-7 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        observer: true,
        observeParents: true,
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ testimonials-slider -----------
    var swiper = new Swiper('.testimonials-slider7 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ features-slider7 -----------
    var swiper = new Swiper('.services-slider8 .swiper-container', {
        spaceBetween: 50,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ features-slider7 -----------
    var swiper = new Swiper('.imgs-content-slider .swiper-container', {
        spaceBetween: 50,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ features-slider7 -----------
    var swiper = new Swiper('.careers-positions-slider5 .swiper-container', {
        spaceBetween: 30,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: false,
        navigation: {
            nextEl: '.careers-positions-slider5 .swiper-button-next',
            prevEl: '.careers-positions-slider5 .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ works sliders -----------
    var swiper = new Swiper('.projects-slider8 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1200,
        pagination: false,
        navigation: {
            nextEl: '.projects.style-8 .swiper-button-next',
            prevEl: '.projects.style-8 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
    });

     // ------------ about2-imgs-slider -----------
     var swiper = new Swiper('.about2-imgs-slider .swiper-container', {
        spaceBetween: 50,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ login sliders -----------
    var swiper = new Swiper('.sign-imgs-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: ".sign-imgs-slider .swiper-pagination",
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
    });

    // ------------ login sliders -----------
    var swiper = new Swiper('.testimonials-slider11 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: ".testimonials-slider11 .swiper-pagination",
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });


    // ------------ features-line-slider12 -----------
    var swiper = new Swiper('.features-line-slider12 .swiper-container', {
        spaceBetween: 0,
        centeredSlides: true,
        // slidesPerView: 6,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ collections-slider12 -----------
    var swiper = new Swiper('.collections-slider12 .swiper-container', {
        spaceBetween: 30,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        loop: false,
        pagination: false,
        navigation: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ projects-slider13 -----------
    var swiper = new Swiper('.projects-slider13 .swiper-container', {
        spaceBetween: 30,
        // centeredSlides: true,
        // slidesPerView: 6,
        observer: true,
        observeParents: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: false,
        navigation: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ projects-slider13 -----------
    var swiper = new Swiper('.testimonials-slider14 .swiper-container', {
        spaceBetween: 50,
        // centeredSlides: true,
        // slidesPerView: 6,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        loop: false,
        pagination: false,
        navigation: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ projects-slider13 -----------
    var swiper = new Swiper('.testimonials-slider16 .swiper-container', {
        spaceBetween: 30,
        // centeredSlides: true,
        slidesPerView: 3,
        direction: 'vertical',
        speed: 1500,
        autoplay: {
            delay: 6000,
        },
        loop: true,
        pagination: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ tc-header-slider1 -----------
    var swiper = new Swiper('.tc-testimonials-st17 .testi-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1500,
        pagination: false,
        navigation: {
            nextEl: '.tc-testimonials-st17 .swiper-button-next',
            prevEl: '.tc-testimonials-st17 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // instagram-slider
    var swiper = new Swiper('.tc-instagram-st17 .instagram-slider', {
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        speed: 30000,
	    allowTouchMove: false,
        autoplay: {
            delay: 1,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });


    // ------------ tc-testimonials-st12 -----------
    var swiper = new Swiper('.tc-testimonials-st12 .testi-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1500,
        pagination: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });
    

});



$( function() {
    // ---------- portfolio mixitup -----------
    var containerEl = document.querySelector('.mix-container');
    var mixer = mixitup(containerEl);
} );


// ========================= typed js text Animation Start (from D:/UPICON-PROJECT/var) ===================
$(function () {
    if ($(".typed-text").length && typeof Typed !== "undefined") {
        $(".typed-text").each(function () {
            var $this = $(this);
            var customStrings = $this.data("strings");
            var stringsArray = ["Next-Gen", "Intelligent", "Modern AI"];
            if (customStrings && Array.isArray(customStrings)) {
                stringsArray = customStrings;
            }
            new Typed(this, {
                strings: stringsArray,
                typeSpeed: 60,   // slower = smoother typing
                backSpeed: 40,   // smooth deleting
                backDelay: 1500, // pause before deleting
                startDelay: 500, // delay before start
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        });
    }
});
// ========================= typed js text Animation End ===================

// ========================= Parallax Cursor Hover (from D:/UPICON-PROJECT/var) ===================
$(function () {
    $(document).on("mousemove", function (e) {
        $(".move-on-cursor-hover").each(function () {
            var movingValue = $(this).attr("data-value") || 1;
            var x = (e.clientX * movingValue) / 100;
            var y = (e.clientY * movingValue) / 100;
            $(this).css("transform", "translateX(" + x + "px) translateY(" + y + "px)");
        });
    });
});
// ========================= End Parallax Cursor Hover ===================


// ========================= Clip Animation Image Scroll Reveal (Exact match from D:/UPICON-PROJECT/var) ===================
(function () {
  function initClipAnimation() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      return;
    }
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

    const initialClipPaths = [
      "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
      "polygon(33.33% 0%, 33.33% 0%, 33.33% 0%, 33.33% 0%)",
      "polygon(65.66% 0%, 66.66% 0%, 66.66% 0%, 66.66% 0%)",
      "polygon(0% 33.33%, 0% 33.33%, 0% 33.33%, 0% 33.33%)",
      "polygon(33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%)",
      "polygon(65.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%)",
      "polygon(0% 66.66%, 0% 66.66%, 0% 66.66%, 0% 66.66%)",
      "polygon(33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%)",
      "polygon(65.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%)",
    ];

    const finalClipPaths = [
      "polygon(0% 0%, 34.33% 0%, 34.33% 34.33%, 0% 34.33%)",
      "polygon(32.33% 0%, 66.66% 0%, 66.66% 33.33%, 33.33% 34.33%)",
      "polygon(65.66% 0%, 100% 0%, 100% 33.33%, 65.66% 34.33%)",
      "polygon(0% 33.33%, 33.33% 33.33%, 33.33% 66.66%, 0% 66.66%)",
      "polygon(30.33% 33.33%, 66.66% 33.33%, 66.66% 66.66%, 33.33% 66.66%)",
      "polygon(65.66% 33.33%, 100% 32.33%, 100% 66.66%, 65.66% 66.66%)",
      "polygon(0% 65.66%, 33.33% 66.66%, 33.33% 100%, 0% 100%)",
      "polygon(30.33% 66.66%, 66.66% 65.66%, 66.66% 100%, 33.33% 100%)",
      "polygon(65.66% 66.66%, 100% 65.66%, 100% 100%, 65.66% 100%)",
    ];

    // Create mask divs for each wrapper
    document.querySelectorAll(".clip-animation").forEach((wrapper) => {
      const img = wrapper.querySelector(
        ".clip-animation-img[data-animate='true']"
      );
      if (!img) return;
      const url = img.src;

      // Remove old masks if any (reuse safe)
      wrapper.querySelectorAll(".mask").forEach((m) => m.remove());

      for (let i = 0; i < 9; i++) {
        const mask = document.createElement("div");
        mask.className = "mask mask-" + (i + 1);
        Object.assign(mask.style, {
          backgroundImage: "url(" + url + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          inset: "0",
        });
        wrapper.appendChild(mask);
      }
    });

    // Animate masks with GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && gsap.utils) {
      gsap.utils.toArray(".clip-animation").forEach((wrapper) => {
        const masks = wrapper.querySelectorAll(".mask");
        if (!masks.length) return;

        gsap.set(masks, { clipPath: (i) => initialClipPaths[i] });

        const order = [
          [".mask-1"],
          [".mask-2", ".mask-4"],
          [".mask-3", ".mask-5", ".mask-7"],
          [".mask-6", ".mask-8"],
          [".mask-9"],
        ];

        const tl = gsap.timeline({
          scrollTrigger: { trigger: wrapper, start: "top 75%" },
        });

        order.forEach((targets, i) => {
          const validTargets = targets
            .map((c) => wrapper.querySelector(c))
            .filter((el) => el);

          if (validTargets.length) {
            tl.to(
              validTargets,
              {
                clipPath: (j, el) => finalClipPaths[Array.from(masks).indexOf(el)],
                duration: 1,
                ease: "power4.out",
                stagger: 0.1,
              },
              i * 0.125
            );
          }
        });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initClipAnimation);
  } else {
    initClipAnimation();
  }
})();
// ========================= End Clip Animation Image Scroll Reveal ===================

// ========================= Language Toggle (Hindi / English) ===================
window.toggleLanguage = function (lang) {
  try {
    localStorage.setItem('site_lang', lang);
  } catch (e) {}

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
};

(function () {
  try {
    var savedLang = localStorage.getItem('site_lang') || 'en';
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        window.toggleLanguage(savedLang);
      });
    } else {
      window.toggleLanguage(savedLang);
    }
  } catch (e) {}
})();

// ========================= Varion Image Hover Auto-Init ===================
(function () {
  function initVarionImgEffects() {
    document.querySelectorAll('.varion-img-effect').forEach(function (wrapper) {
      var imgs = wrapper.querySelectorAll('img');
      if (imgs.length === 1) {
        var clone = imgs[0].cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        wrapper.insertBefore(clone, imgs[0]);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVarionImgEffects);
  } else {
    initVarionImgEffects();
  }
})();
// ========================= End Varion Image Hover Auto-Init ===================


// ==========================================
// Modern Mobile Offcanvas Menu Controller
$(function() {
    var $navbar = $('.navbar.style-17');
    var $collapse = $navbar.find('.navbar-collapse');
    var $toggler = $navbar.find('.navbar-toggler');

    // Ensure 3 toggler bars exist inside toggler
    if ($toggler.find('.toggler-bar').length === 0) {
        $toggler.html('<span class="toggler-bar"></span><span class="toggler-bar"></span><span class="toggler-bar"></span>');
    }

    // Ensure offcanvas backdrop exists
    if ($('.navbar-backdrop').length === 0) {
        $('<div class="navbar-backdrop"></div>').appendTo('body');
    }
    var $backdrop = $('.navbar-backdrop');

    // Ensure offcanvas header exists inside collapse
    if ($collapse.find('.offcanvas-nav-header').length === 0) {
        var headerHtml = '<div class="offcanvas-nav-header d-lg-none">' +
            '<a href="index.html" class="offcanvas-logo">' +
                '<img src="assets/img/logo_varion.png" alt="Varion Consulting">' +
            '</a>' +
            '<button type="button" class="offcanvas-close-btn" aria-label="Close">' +
                '<i class="fal fa-times"></i>' +
            '</button>' +
        '</div>';
        $collapse.prepend(headerHtml);
    }

    // Ensure offcanvas footer info exists in nav-side
    if ($collapse.find('.offcanvas-footer-contact').length === 0) {
        var footerHtml = '<div class="offcanvas-footer-contact d-lg-none mt-2">' +
            '<div class="mb-1"><i class="fal fa-phone-alt me-1 color-orange4"></i> <a href="tel:+919236454882">+91 92364 54882</a></div>' +
            '<div><i class="fal fa-envelope me-1 color-orange4"></i> <a href="mailto:info@varionadvisors.com">info@varionadvisors.com</a></div>' +
        '</div>';
        $collapse.find('.nav-side').append(footerHtml);
    }

    var isAnimating = false;

    function openOffcanvas() {
        if (isAnimating) return;
        isAnimating = true;
        $collapse.removeClass('closing').addClass('show');
        $toggler.attr('aria-expanded', 'true');
        $backdrop.addClass('active');
        $('body').addClass('mobile-menu-open');
        setTimeout(function() { isAnimating = false; }, 320);
    }

    function closeOffcanvas() {
        if (isAnimating || !$collapse.hasClass('show')) return;
        isAnimating = true;
        $collapse.addClass('closing');
        $toggler.attr('aria-expanded', 'false');
        $backdrop.removeClass('active');
        $('body').removeClass('mobile-menu-open');
        setTimeout(function() {
            $collapse.removeClass('show closing');
            isAnimating = false;
        }, 260);
    }

    // Intercept toggler click
    $toggler.off('click').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($collapse.hasClass('show')) {
            closeOffcanvas();
        } else {
            openOffcanvas();
        }
    });

    // Close on backdrop or close button
    $(document).off('click', '.offcanvas-close-btn, .navbar-backdrop').on('click', '.offcanvas-close-btn, .navbar-backdrop', function(e) {
        e.preventDefault();
        closeOffcanvas();
    });

    // Close on nav link click in mobile
    $(document).off('click', '.navbar.style-17 .navbar-nav .nav-link').on('click', '.navbar.style-17 .navbar-nav .nav-link', function() {
        if ($(window).width() < 992) {
            closeOffcanvas();
        }
    });

    // Close on ESC key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $collapse.hasClass('show')) {
            closeOffcanvas();
        }
    });

    // Reset on window resize to desktop
    $(window).on('resize', function() {
        if ($(window).width() >= 992) {
            $collapse.removeClass('show closing');
            $toggler.attr('aria-expanded', 'false');
            $backdrop.removeClass('active');
            $('body').removeClass('mobile-menu-open');
        }
    });

    // Close on resize to desktop
    $(window).on('resize', function() {
        if ($(window).width() >= 992 && $collapse.hasClass('show')) {
            closeOffcanvas();
        }
    });
});
