$(document).ready(function () {

    //---------fixed header on scrol----------//
    let top_line = $('#top_line'),
    header_image = $('#header_img').innerHeight(),
    scroll = $(window).scrollTop();

    checkScroll(scroll);


    $(window).on('scroll', function() {
        scroll = $(this).scrollTop();

        checkScroll(scroll);
    });

    function checkScroll(scroll) {
        if(scroll >= header_image) {
            top_line.addClass('fixed')
        } else {
            top_line.removeClass('fixed')
        };
    };

    $(".city_input").select2({
        allowClear: false,
        tags: false,
        placeholder: 'Введите адрес',
        tokenSeperators: [],
        createSearchChoice: function(params) {
            return undefined;
       }
    });

    $(".select_weight").select2({
        allowClear: false,
        placeholder: 'Выберите вес'
    });

    
    $(".select_type").select2({
        allowClear: false,
        placeholder: 'Выберите вес'
    });

    $('.pou_up_cake_slider').slick({
        dots: false,
        nav: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: false,
                    slidesToScroll: 1
                }
            }
        ]
    });

    
    var min_amount_range = $('#min_amount_range');
    $('#min_amount_range').on('input', function(){
        var value = min_amount_range.val()
        
        $('#display_range_value').html(value);
    })
    var min_amount_range_2 = $('#min_amount_range_2');
    $('#min_amount_range_2').on('input', function(){
        var value = min_amount_range_2.val()
        
        $('#display_range_value_2').html(value);
    })


    $('.options_title').on('click', function() {
        $('.options_inner').slideToggle('400', function() {
            if($(this).is(':visible'))
                $(this).css('display', 'flex')
                $(this).css('height', '83vh')
        });
        
    })
    $('.close_options').on('click', function() {
        $('.options_inner').slideToggle('400', function() {
            if($(this).is(':visible'))
                $(this).css('display', 'flex')
                $(this).css('height', '83vh')
        });
    })

    $('.burger_box').on('click', function() {
        $('.burger').toggleClass('active');
        $('.burger_cross').toggleClass('active');
        $('.nav_popup').toggleClass('active');
    })

    $('#referal_toggle').on('click', function() {
        $('#referal_toggle').toggleClass('active');
        $('#referal_box').toggleClass('active');
    })

    $('#referal_revenue_toggle').on('click', function() {
        $('#referal_revenue_toggle').toggleClass('active');
        $('#referal_revenue_box').toggleClass('active');
    })

    $('.add_title').on('click', function() {
        $(this).siblings('.items_box').toggleClass('active');
        $(this).toggleClass('active');
    })



    
    $('.slider_wok').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: false,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: false,
                    slidesToScroll: 1
                }
            }
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            // instead of a settings object
        ]
    });

    
    $('.pop_up_healthy_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        swipeToSlide: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 470,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    swipeToSlide: true,
                    variableWidth: true,
                    slidesToScroll: 1
                }
            }
          
        ]
        
    });

    $('.week_slider').slick({
        dots: true,
        nav: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        customPaging: function(weekslider, i) {
            let slide = $(weekslider.$slides[i]).data();
            // slide.forEach(elem => {
            //     console.log(elem)
            // })
            console.log($(weekslider.$slides[i]))
            console.log(slide)
            return '<a class="dot">'+(i + 1)+'</a>';
        },
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.dish_slider').slick({
        slidesToShow: 2,
        nav: false,
        arrows: false,
        infinite: true,
        dots: false,
        slidesToScroll: 1,
        swipeToSlide: true
    });


    $('.parent').on('click', function() {
        $('.child').toggleClass('fadeIn', 'fadeOut')
    })
    
    
    $('.bootstrap_calendar').datepicker({
        multidate: true,
        weekStart: 1,
        language: 'ru',
        format: 'dd-mm-yyyy',
        startDate: 'now'
    })
});


// let el = document.querySelector('.parent')
// let child = document.querySelector('.child')
// el.addEventListener('click', showAndHide)

// function showAndHide(e) {

//     console.log(this.firstElementChild)
    
//     // if(this.firstElementChild.classname = '.child') {
//     //     child.className = ('child.show')
//     // }

//     // if(this.firstElementChild.classname = '.child.show') {
//     //     child.className = ('child.hide')
//     // }

//     if (child.className = child.className) {
//         child.className == 'child show'
//     } else {
//         child.className == 'child hide'
//     }

//     // child.className = child.className == 'child show' ? 'child hide' : 'child show'
    
// }




// document.addEventListener('animationstart', function(e) {
//     if(e.animationName === 'fade-in') {
//         e.target.classList.add('did-fade-in');
//     }
// });
// document.addEventListener('animationend', function(e) {
//     if(e.animationName === 'fade-out') {
//         e.target.classList.remove('did-fade-in');
//     }
// })