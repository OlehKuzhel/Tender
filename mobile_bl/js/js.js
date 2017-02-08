$(document).ready(function() {
    // $('.cssload-container').fadeOut('1000');
    //acинхронная загрузка css
    $('.cssload-container').fadeOut(1000);
    $('.inp').focus(
        function() {
            $(this).parent('div').addClass("focus_inp");
        }).blur(
        function() {
            $(this).parent('div').removeClass("focus_inp");

        });

    
    
    $(".vopros_l").accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"

    });


    $('.but_a').one("click", function() {
        $('.inp_back_f').removeClass('none_inp');
        $('.inp_f').attr('type', 'text');
        $('input[name="form_subject"]').val('Выбор: Получить предложение (С выбором Партнера)');

    });
    blur_p();
    focus_p();

    function blur_p() {
        $('input[type="text"]').blur(function() {
            if ($(this).val().length < 2) {
                $(this).addClass('error-input');
            }
        });
    };

    function focus_p() {
        $('input[type="text"]').focus(function() {
            $(this).removeClass('error-input');
        });
    };

    $('form').submit(function(e) {
        blur_p();
        focus_p();
        e.preventDefault();
        var th = $(this);
        $(this).find('input[type="text"]').trigger('blur');
        if (!$(this).find('input[type="text"]').hasClass('error-input')) {
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: th.serialize()
            }).done(function() {
                thank_h();

            });
            setTimeout(function() {
                // Done Functions

                th.trigger("reset");
            }, 1000);

        } else {
            error_f();
        }
    });




    $('.form_map').submit(function() {

        if ($('.inp_footer').val().length < 3) {
            error_f()
        };
        return false;

    });

    $('.form_select').submit(function() {

        if ($('.inp_cen').val().length < 3) {
            error_h()
        };
        return false;

    });

    function thank_h() {
        $('#thank_h').arcticmodal({
            speed: 200,
            overlay: {
                css: {
                    backgroundColor: '#111',
                    opacity: 0.9
                }
            }
        });

    };


    function error_f() {
        $('#error_footer').arcticmodal({
            speed: 200,
            overlay: {
                css: {
                    backgroundColor: '#111',
                    opacity: 0.9
                }
            }
        });

    };




    $('.arrow_prew_t').hover(function() {
        $(this).attr('src', 'images/hov_str.png');
    }, function() {
        $(this).attr('src', 'images/str_n.png');
    });

 // obnul_s1();

 //    obnul_s3();
 //    obnul_s5();
 //    obnul_s7();
 //    obnul_s2();
 //    obnul_s4();
 //    obnul_s6();
 //    obnul_s8();


    $(".item_cen").eq(0).click(function() {
        $(".item_cen").removeClass('act_1 act_2 act_3 act_4');
        $(this).addClass("act_1");

    });
    $(".item_cen").eq(1).click(function() {
        $(".item_cen").removeClass('act_1 act_2 act_3 act_4');
        $(this).addClass("act_2");

    });
    $(".item_cen").eq(2).click(function() {
        $(".item_cen").removeClass('act_1 act_2 act_3 act_4');
        $(this).addClass("act_3");

    });

    $(".item_cen").eq(3).click(function() {
        $(".item_cen").removeClass('act_1 act_2 act_3 act_4');
        $(this).addClass("act_4");

    });

    $('.mia_li a, .drop_ul_n a').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top 
        }, 1000);
        if ($(this).hasClass('tend')) {
            $("#tend_tab").tabs("option", "active", 0);

            return false;

        }

        if ($(this).hasClass('bank')) {

            $("#tend_tab").tabs("option", "active", 1);
            return false;
        }

        if ($(this).hasClass('tend_kr')) {
            $("#tend_tab").tabs("option", "active", 2);

            return false;
        }

        if ($(this).hasClass('kredit')) {
            $("#tend_tab").tabs("option", "active", 3);

            return false;

        }


    });

    function closeAll() {
        $('.tender_1, .tender_2, .tender_3, .tender_4').css('display', 'none');
        $('.tender_desktop_div').css('display', 'block');
    }


    $(".item_cen").click(function() {


        var th3 = $(this).find('.cenu_h3');
        $('.cenu_h3').removeClass('color_h3');
        $(th3).addClass('color_h3');


        var show_tab = $(this).attr("id");
        show_tab = "#" + show_tab + "_s";
        $.when($("#s_cen_1_s, #s_cen_2_s,#s_cen_3_s,#s_cen_4_s").fadeOut("fast")).then(function() {
            $(show_tab).fadeIn("fast");
            // obnul_s1();
            // obnul_s2();

        });

    });



    
    function addProbel(nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ' ' + '$2');
        }
        return x1 + x2;
    }






    $('.menua').click(function() {

    });



    var isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }


    function stabilize() {

        $('section, header').each(function(index, el) {

            var eTop = $(this).offset().top;
            var posTop = eTop - $(window).scrollTop();

            if (posTop > -$(window).height() / 2 && posTop < $(window).height() / 2) {
                $("html, body").animate({
                    scrollTop: $(this).offset().top
                }, 250);

            }

        });

    }

    $("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function() {
        $("html, body").stop();
    });
    if (isMobile != true) {
        $(window).scroll(function() {


            clearTimeout($.data(this, 'scrollTimer'));

            $.data(this, 'scrollTimer', setTimeout(stabilize, 1500));

        });
    };



    //навигация

    $('.dropdown ul li a').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });

    $('.ul_s2').bxSlider({
        slideWidth: 420,
        nextSelector: '#str_r_s2',
        prevSelector: '#str_l_s2',
        controls: true,
        pager: false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 0,
    });


    $('#tend_tab li').click(function() {
        $('.vis').css('display', 'block');
        $('.tender_form_display_none').css('display', 'none');

    });

    $('.tender_inner').click(function() {
        vubor = $(this).data('tup');
        $('.form_in_2').val(vubor);
        inner = $(this).data('inner');

        form = $(this).data('form');
        formin = $(this).data('formin');

        var reg = event.target;

        if (reg.className != "a_inner") {
            var inner = ".tender_" + inner + "_inner";
            var form = ".form_" + formin + "_" + form;

            $(inner).fadeOut(100, function() {
                $(form).fadeIn(50);
            });
        };

    });

    // Повзунки з інпутами
    // $( ".slide_tend_1" ).slider();
    // $( ".slide_tend_2" ).slider();
    $( ".slide_tend_1" ).slider({
      range: true,
      slide: function( event, ui ) {
        $( ".chislo_0" ).val(ui.values[ 0 ]);
        $( ".chislo_1" ).val(ui.values[ 1 ]);
        
      }
    });
    $( ".slide_tend_2" ).slider({
      range: true,
      step: 1,
      slide: function( event, ui ) {
        $(".fir_p_el").text(ui.values[0] + " - " + ui.values[1]);
        if ($(this).hasClass('den')) {
            $(".fir_p_el").append('<span> дней.</span>');
        } if (!$(this).hasClass('den')) {
            $(".fir_p_el").append('<span> мес.</span>');
        }
        $(".fir_in_up").val(ui.values[0] + " - " + ui.values[1]);
        
      }
    });

    

    $('#tend_tab li, .mia_li a').click(function() {

            var min_v = $(this).data('min');
            var max_v = $(this).data('max');
            var min_inv = $(this).data('invmin');
            var max_inv = $(this).data('invmax');
           

            var minm_v = $(this).data('minm');
            var maxm_v = $(this).data('maxm');

            var minm_inv = $(this).data('invminm');
            var maxm_inv = $(this).data('invmaxm');

            var slovo = $(this).data('slovo');

            $( ".slide_tend_2" ).slider( "option", "min", minm_v );
            $( ".slide_tend_2" ).slider( "option", "max", maxm_v );

            $( ".slide_tend_2" ).slider( "option", "values", [ minm_inv, maxm_inv ] );

            $( ".slide_tend_1" ).slider( "option", "min", min_v );
            $( ".slide_tend_1" ).slider( "option", "max", max_v );
            $( ".slide_tend_1" ).slider( "option", "values", [ min_inv, max_inv ] );

            var value_0 = $( ".slide_tend_1" ).slider( "values", 0 );
            var value_1 = $( ".slide_tend_1" ).slider( "values", 1 );

            var valuem_0 = $( ".slide_tend_2" ).slider( "values", 0 );
            var valuem_1 = $( ".slide_tend_2" ).slider( "values", 1 );

            $(".fir_p_el").text(valuem_0 + " - " + valuem_1);
            $(".fir_p_el").append('<span>'+ slovo +'</span>');


            $( ".chislo_0" ).val(value_0);
            $( ".chislo_1" ).val(value_1);
    });

    $(".fir_in_up").val($(".slide_tend_2").slider("values", 0) + " - " + $(".slide_tend_2").slider("values", 1));

    $('.chislo_0').change(function() {
        var vals_0 = $( ".slide_tend_1" ).slider( "option", "min" );

        var val_0 = $(this).val();

        if (val_0 < vals_0) {
            $(this).val(vals_0);
            $( ".slide_tend_1" ).slider( "values", 0, vals_0 );
        } else {
            $( ".slide_tend_1" ).slider( "values", 0, val_0 );
        }
        
        $( ".fir_in_h" ).val( $( ".slide_tend_1" ).slider( "values", 0 ) +
        " - " + $( ".slide_tend_1" ).slider( "values", 1 ) );

    });

     $('.chislo_1').change(function() {
        var vals_1 = $( ".slide_tend_1" ).slider( "option", "max" );

        var val_1 = $(this).val();

        if (val_1 > vals_1) {
            $(this).val(vals_1);
            $( ".slide_tend_1" ).slider( "values", 1, vals_1 );
        } else {
            $( ".slide_tend_1" ).slider( "values", 1, val_1 );
        }
        $( ".fir_in_h" ).val( $( ".slide_tend_1" ).slider( "values", 0 ) +
        " - " + $( ".slide_tend_1" ).slider( "values", 1 ) );
    });
     
// Повзунки з інпутами кінець

    $('.a_inner').click(function() {
        var popup = $(this).data('pop');
        console.log(popup)
        var popup = '.info_a_' + popup;
        console.log(popup)
        var popup = $(popup);
        // var popup_g = $(".more_info").data('info', popup);

        // var popup = popup_g;
        $(popup).arcticmodal({
            speed: 200,
            overlay: {
                css: {
                    backgroundColor: '#fff',
                    opacity: 1
                }
            }
        });
        return false;
    })


    $('.menua').click(function() {
        $('#mob_menu').arcticmodal({
            speed: 200,
            overlay: {
                css: {
                    backgroundColor: '#111',
                    opacity: 0.9
                }
            }
        });
        return false;
    });

    onScroll();



    var menu_selector = ".mob_ul_m li";

    function onScroll() {
        var scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function() {
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + " a.act_s_m").removeClass("act_s_m");
                $(this).addClass("act_s_m");
            } else {
                $(this).removeClass("act_s_m");
            }
        });
    }
    $(document).on("scroll", onScroll);

    $('.mob_ul_m li a').click(function(e) {
        $('.mob_ul_m li a').removeClass('act_s_m');
        $(this).addClass('act_s_m');
        e.preventDefault();
        $('#mob_menu').arcticmodal('close');
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top - 90
        }, 1000);
    });




    $('.vopros_l p').click(function() {
        $('.vopros_l p').removeClass('active_p');
        $(this).addClass('active_p');
    });



    $(".vopros_l>p").click(function() {

        var show = $(this).attr("id");
        show = "#" + show + "_o";
        $.when($("#v_1_o, #v_2_o,#v_3_o,#v_4_o,#v_5_o,#v_6_o,#v_7_o,#v_8_o").fadeOut("fast")).then(function() {
            $(show).fadeIn("fast");
        });

    })
    $('.but_a').click(function() {
        return false;
    });




    $('.chisla').bxSlider({
        slideWidth: 420,
        nextSelector: '#sld1r_s5_n',
        prevSelector: '#sld1l_s5_n',
        controls: true,
        pager: false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 0,
        touchEnabled: false
    })



    $('.slide_s4').bxSlider({
        slideWidth: 420,
        nextSelector: '#sld1r',
        prevSelector: '#sld1l',
        controls: true,
        pager: false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 0

    });


    // $('#vid1, #vid2, #vid4').click(function() {
    //     if ($(this).get(0).paused) {
    //         $(this).get(0).play();

    //     } else {
    //         $(this).get(0).pause();
    //     }
    // });
    // $('#sld1l_s5').click(function() {

    //     $('#vid1').get(0).pause();
    //     $('#vid2').get(0).pause();
    //     $('#vid4').get(0).pause();
    // });
    // $('#sld1r_s5').click(function() {

    //     $('#vid1').get(0).pause();
    //     $('#vid2').get(0).pause();
    //     $('#vid4').get(0).pause();

    // });
    // $('.chisla').bxSlider({
    //             slideWidth: 420,
    //         touchEnabled: false,
    //         // nextSelector: '#sld1r',
    //         // prevSelector: '#sld1l',
    //         controls: true,
    //         pager: false,
    //         auto: false,
    //         speed: 500,
    //         minSlides: 1,
    //         maxSlides: 1,
    //         moveSlides: 1,
    //         slideMargin:30
    //         })
    // $('.chisla_m').bxSlider({
    //       
    //   });


    $('.slide_s2').bxSlider({
        slideWidth: 160,

        controls: false,
        pager: true,
        auto: false,
        speed: 500,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 3,
        slideMargin: 30
    });

    $('.slide_s5').bxSlider({

        slideWidth: 480,
        nextSelector: '#sld1r_s5',
        prevSelector: '#sld1l_s5',
        controls: true,
        pager: false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 30,
        adaptiveHeight: true
    });
    // Функция слайдера 7 блок

    slider = $('.slider1').bxSlider({
        slideWidth: 210,
        minSlides: 2,
        maxSlides: 2,
        slideMargin: 0,
        moveSlides: 2,
        infiniteLoop:false,
        controls: false,
        pager: false,
        speed: 300,

        onSliderLoad: function() {
            // $('.slider1>div:not(.bx-clone)').eq(1).addClass('active-slide');

            // $('.slider1>div:not(.bx-clone)').eq(0).addClass('act_s_1');
            // $('.slider1>div:not(.bx-clone)').eq(1).addClass('act_s_2');
            // $('.slider1>div:not(.bx-clone)').eq(2).addClass('act_s_3');

            // $('.slider1>div:not(.bx-clone)').eq(0).addClass('active-slide');
            $('.slider1>div:not(.bx-clone)').eq(0).addClass('act_s_1');
            $('.slider1>div:not(.bx-clone)').eq(1).addClass('act_s_2');
            // $('.slider1>div:not(.bx-clone)').eq(2).addClass('act_s_3');
            // $('.slider1>div:not(.bx-clone)').eq(3).addClass('act_s_4');
            // $('.slider1>div:not(.bx-clone)').eq(4).addClass('act_s_5');
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            $('.slide_s7').removeClass('act_s_1 act_s_2 act_s_3 act_s_4 act_s_5');
            // $('.slide_s7').removeClass('active-slide');
            // $($slideElement).next().addClass('active-slide');
            $($slideElement).addClass('act_s_1');
            if ($($slideElement).next().hasClass('had')) {
                 $($slideElement).next().addClass('act_s_2');
            } else {
                $($slideElement).next().addClass('act_s_1');
            }
            $($slideElement).next().next().addClass('act_s_2');
            $($slideElement).next().next().next().addClass('act_s_2');
            $($slideElement).next().next().next().next().addClass('act_s_2');
            
        },

        onSlideNext:function($slideElement, oldIndex, newIndex){ 
            if ( $( ".slider_p" ).slider( "value")==0) {
               $( ".slider_p" ).slider( "value", 1 );
            }
             else if ( $( ".slider_p" ).slider( "value") == 1) {
               $( ".slider_p" ).slider( "value", 2 );
            }
            
         },
         onSlidePrev:function($slideElement, oldIndex, newIndex){ 
            if ( $( ".slider_p" ).slider( "value")==2) {
               $( ".slider_p" ).slider( "value", 1 );
            }
             else if ( $( ".slider_p" ).slider( "value") == 1) {
               $( ".slider_p" ).slider( "value", 0 );
            }
            
         }

    });



    $(".slider_p").slider({
        animate: "slow",
        step: 1,
        min: 0,
        max: 2,
        value: 0,


        slide: function(event, ui) {
            $.when($(".opis").css("display", "none").removeClass('whidth_s_1 whidth_s_2 whidth_s_3 whidth_s_4 whidth_s_5')).then(slider.goToSlide(ui.value));
            var handle = $('.ui-slider-handle'),
                handleWidth = handle.width(),
                position = handle.position(),
                marginLeft;
            if (ui.value == 0)
                marginLeft = 0;

            else if (ui.value == 1)
                marginLeft = -handleWidth + 29;
            else if (ui.value == 2)
                marginLeft = -handleWidth - 0;
            setTimeout(function() {
                handle.animate({
                    marginLeft: marginLeft + 'px'
                }, 200);

            }, 200)

        }


    });


    $(".slide_s7").click(function() {

        id_slide = $(this).attr("id");
        switch (id_slide) {
            case 's_1':
                $('p.sl_p').remove();
                $(".opis").append('<p class="sl_p">Профессионал с 30 летним стажем в области бухгалтерского учета, управленческого учёта, аудита и финансового консалтинга. Также имеет большой опыт в области финансового планирования. Имеет в собственном портфеле таких клиентов, как ОАО «Чайка», ОАО «Росуголь», АО «Воткинский завод», Театр зверей им. Дурова и др.</p>');
                break;
            case 's_2':
                $('p.sl_p').remove();
                $(".opis").append('<p class="sl_p">Специалист с опытом работы в банковской системе 15 лет. Более 11 лет работы в ПАО «Сбербанк России» на руководящих позициях. Признана лучшим менеджером Сбербанка России в 2012 году. Высшее финансовое образование. Специализация – структуризация сделок по предоставлению обеспечения на сумму 300 млн рублей и более.</p>');
                break;
            case 's_3':
                $('p.sl_p').remove();
                $(".opis").append('<p class="sl_p">Специалист по обеспечению заявок на участие в конкурсах/аукционах на ЭТП. Имеет собственный наработанный пул банков и МФО, специализирующихся на тендерных кредитах и займах. Имеет профильное высшее образование.</p>');
                break;
            case 's_4':
                $('p.sl_p').remove();
                $(".opis").append('<p class="sl_p">Эксперт в области кредитования юридических лиц и оформления банковских гарантий в соответствии с 44-ФЗ, 223-ФЗ и 185-ФЗ. Профильное высшее образование в области финансов. Более 10 лет стажа на руководящих позициях в банках ТОП-50. Тендерное финансирование было выбрано в качестве основного направления оказания финансовых услуг, исходя из наработанной годами профильной контактной базы, экспертности участников нашей команды и высокого спроса на данный вид услуг.</p>');
                break;
            case 's_5':
                $('p.sl_p').remove();
                $(".opis").append('<p class="sl_p">ТОП-менеджер Российских и зарубежных финансовых институтов из сегмента крупные и крупнейшие банки. Имеет профильное финансовое образование. Опыт работы со всей продуктовой линейкой SME. Специализированные знания по банковским гарантиям классического и POS-анализа.</p>');
                break;
        };


        if ($(this).hasClass("act_s_1")) {
            $(".opis").eq(0).toggleClass('whidth_s_1');
            $(".opis").removeClass('whidth_s_2 whidth_s_3 whidth_s_5 whidth_s_4')
        }
        if ($(this).hasClass("act_s_2")) {
            $(".opis").eq(1).toggleClass('whidth_s_3');
            $(".opis").removeClass('whidth_s_1 whidth_s_2 whidth_s_5 whidth_s_4')
        }
        // if ($(this).hasClass("act_s_3")) {
        //     $(".opis").eq(2).toggleClass('whidth_s_3');
        //     $(".opis").removeClass('whidth_s_1 whidth_s_2 whidth_s_5 whidth_s_4')
        // }
        // if ($(this).hasClass("act_s_4")) {
        //     $(".opis").eq(3).toggleClass('whidth_s_4');
        //     $(".opis").removeClass('whidth_s_1 whidth_s_2 whidth_s_5 whidth_s_3')
        // }
        // if ($(this).hasClass("act_s_5")) {
        //     $(".opis").eq(4).toggleClass('whidth_s_3');
        //     $(".opis").removeClass('whidth_s_1 whidth_s_2 whidth_s_4 whidth_s_5')
        // }

    });



    $("#tend_tab").tabs({
        collapsible: true,
        active: false
    });



    $('#tend_tab li a').click(function() {

        $('.ui-tabs-anchor').removeClass('act_ach');

        $(this).toggleClass('act_ach');
    });


$('.phone_n').mask('+7 (999) 999-99-99');

$(".video__play").click(function(){
        var dataYoutube = $(this).parents('.videoscript').data('yout');
        // console.log(dataYoutube);
        $(this).parents('.videoscript').html('<iframe src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" height="223.25" width="400" frameborder="0" allowfullscreen></iframe>')
    });

});