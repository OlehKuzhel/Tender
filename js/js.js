$(document).ready(function() {
    $('.cssload-container').fadeOut('slow');
    $('.inp').focus(function() {
        $(this).parent('div').addClass("focus_inp");
    }).blur(function() {
        $(this).parent('div').removeClass("focus_inp");
    });
    $('.phone_n').mask('+7 (999) 999-99-99');
    $(".menua").hover(function() {
        $(this).addClass('hover_menu_menua');
    }, function() {
        $(this).removeClass('hover_menu_menua');
    });
    $('.arrow_prew_t').hover(function() {
        $(this).attr('src', 'images/hov_str.png');
    }, function() {
        $(this).attr('src', 'images/str_n.png');
    });
    $(".item_cen").click(function() {
        $('.item_cen').unbind('mouseenter');
        $('.item_cen').unbind('mouseleave');
        $('.item_cen').removeClass('opacity_s9');
        $('.item_cen').addClass('changed');
        $(this).removeClass('changed');
        var th3 = $(this).find('.cenu_h3');
        $('.cenu_h3').addClass('act');
        $(th3).removeClass('act');
        var show_tab = $(this).attr("id");
        show_tab = "#" + show_tab + "_s";
        $.when($("#s_cen_1_s, #s_cen_2_s,#s_cen_3_s,#s_cen_4_s").fadeOut("fast")).then(function() {
            $(show_tab).fadeIn("fast");
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
    $(".slide_tend_1").slider({
        range: true,
        slide: function(event, ui) {
            $(".chislo_0").val(ui.values[0]);
            $(".chislo_1").val(ui.values[1]);
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $(".slide_tend_2").slider({
        range: true,
        step: 1,
        slide: function(event, ui) {
            $(".fir_p_el").text(ui.values[0] + " - " + ui.values[1]);
            if ($(this).hasClass('den')) {
                $(".fir_p_el").append('<span> дней.</span>');
            }
            if (!$(this).hasClass('den')) {
                $(".fir_p_el").append('<span> мес.</span>');
            }
            $(".fir_in_up").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $('.tender_desktop_div, .mia_li a, .drop_ul_n li a').click(function() {
        var min_v = $(this).data('min');
        var max_v = $(this).data('max');
        var min_inv = $(this).data('invmin');
        var max_inv = $(this).data('invmax');
        var minm_v = $(this).data('minm');
        var maxm_v = $(this).data('maxm');
        var minm_inv = $(this).data('invminm');
        var maxm_inv = $(this).data('invmaxm');
        var slovo = $(this).data('slovo');
        var usluga = $(this).data('usluga');
        $('.form_in_1').val(usluga);
        $(".slide_tend_2").slider("option", "min", minm_v);
        $(".slide_tend_2").slider("option", "max", maxm_v);
        $(".slide_tend_2").slider("option", "values", [minm_inv, maxm_inv]);
        $(".slide_tend_1").slider("option", "min", min_v);
        $(".slide_tend_1").slider("option", "max", max_v);
        $(".slide_tend_1").slider("option", "values", [min_inv, max_inv]);
        var value_0 = $(".slide_tend_1").slider("values", 0);
        var value_1 = $(".slide_tend_1").slider("values", 1);
        var valuem_0 = $(".slide_tend_2").slider("values", 0);
        var valuem_1 = $(".slide_tend_2").slider("values", 1);
        $(".fir_p_el").text(valuem_0 + " - " + valuem_1);
        $(".fir_p_el").append('<span>' + slovo + '</span>');
        $(".chislo_0").val(value_0);
        $(".chislo_1").val(value_1);
    });
    $(".fir_in_up").val($(".slide_tend_2").slider("values", 0) + " - " + $(".slide_tend_2").slider("values", 1));
    $('.chislo_0').change(function() {
        var vals_0 = $(".slide_tend_1").slider("option", "min");
        var val_0 = $(this).val();
        if (val_0 < vals_0) {
            $(this).val(vals_0);
            $(".slide_tend_1").slider("values", 0, vals_0);
        } else {
            $(".slide_tend_1").slider("values", 0, val_0);
        }
        $(".fir_in_h").val($(".slide_tend_1").slider("values", 0) + " - " + $(".slide_tend_1").slider("values", 1));
    });
    $('.chislo_1').change(function() {
        var vals_1 = $(".slide_tend_1").slider("option", "max");
        var val_1 = $(this).val();
        if (val_1 > vals_1) {
            $(this).val(vals_1);
            $(".slide_tend_1").slider("values", 1, vals_1);
        } else {
            $(".slide_tend_1").slider("values", 1, val_1);
        }
        $(".fir_in_h").val($(".slide_tend_1").slider("values", 0) + " - " + $(".slide_tend_1").slider("values", 1));
    });
    $(".slide_pol_1").slider({
        range: true,
        step: 10,
        min: 1000000,
        max: 2000000000,
        values: [100000000, 1000000000],
        slide: function(event, ui) {
            $(".chislo_n_0").val(ui.values[0]);
            $(".chislo_n_1").val(ui.values[1]);
            $(".fir_in_h_n").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $(".slide_pol_2").slider({
        range: true,
        step: 1,
        min: 1,
        max: 60,
        values: [1, 60],
        slide: function(event, ui) {
            $(".two_p").text(ui.values[0] + " - " + ui.values[1]);
            if ($(this).hasClass('den')) {
                $(".two_p").append('<span> дней.</span>');
            }
            if (!$(this).hasClass('den')) {
                $(".two_p").append('<span> мес.</span>');
            }
            $(".two_p").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $('.item_cen').click(function() {
        var min_v = $(this).data('min');
        var max_v = $(this).data('max');
        var min_inv = $(this).data('invmin');
        var max_inv = $(this).data('invmax');
        var minm_v = $(this).data('minm');
        var maxm_v = $(this).data('maxm');
        var minm_inv = $(this).data('invminm');
        var maxm_inv = $(this).data('invmaxm');
        var slovo = $(this).data('slovo');
        $(".slide_pol_2").slider("option", "min", minm_v);
        $(".slide_pol_2").slider("option", "max", maxm_v);
        $(".slide_pol_2").slider("option", "values", [minm_inv, maxm_inv]);
        $(".slide_pol_1").slider("option", "min", min_v);
        $(".slide_pol_1").slider("option", "max", max_v);
        $(".slide_pol_1").slider("option", "values", [min_inv, max_inv]);
        var value_0_n = $(".slide_pol_1").slider("values", 0);
        var value_1_n = $(".slide_pol_1").slider("values", 1);
        var valuem_0 = $(".slide_pol_2").slider("values", 0);
        var valuem_1 = $(".slide_pol_2").slider("values", 1);
        $(".two_p").text(valuem_0 + " - " + valuem_1);
        $(".two_p").append('<span>' + slovo + '</span>');
        $(".chislo_n_0").val(value_0_n);
        $(".chislo_n_1").val(value_1_n);
    });
    $('.chislo_n_0').change(function() {
        var vals_0 = $(".slide_pol_1").slider("option", "min");
        var val_0 = $(this).val();
        if (val_0 < vals_0) {
            $(this).val(vals_0);
            $(".slide_pol_1").slider("values", 0, vals_0);
        } else {
            $(".slide_pol_1").slider("values", 0, val_0);
        }
        $(".fir_in_h_n").val($(".slide_pol_1").slider("values", 0) + " - " + $(".slide_pol_1").slider("values", 1));
    });
    $('.chislo_n_1').change(function() {
        var vals_1 = $(".slide_pol_1").slider("option", "max");
        var val_1 = $(this).val();
        if (val_1 > vals_1) {
            $(this).val(vals_1);
            $(".slide_pol_1").slider("values", 1, vals_1);
        } else {
            $(".slide_pol_1").slider("values", 1, val_1);
        }
        $(".fir_in_h_n").val($(".slide_pol_1").slider("values", 0) + " - " + $(".slide_pol_1").slider("values", 1));
    });
    $(".two_p").text($(".slide_pol_2").slider("values", 0) + " - " + $(".slide_pol_2").slider("values", 1));
    $(".two_p").append('<span> мес.</span>');
    $(".two_in_h").val($(".slide_pol_2").slider("values", 0) + " - " + $(".slide_pol_2").slider("values", 1));
    $('.item_cen').hover(function() {
        var th3 = $(this).find('.cenu_h3');
        $('.item_cen').toggleClass('changed');
        $(this).removeClass('changed');
        $('.cenu_h3').toggleClass('act');
        $(th3).removeClass('act');
    });
    $('.menua').click(function() {
        $('#desktop-menu').css('width', '400px');
        $('#desktop-menu').addClass('border');
        $('#desktop-menu ul').css('display', 'block');
        return false;
    });
    $('.dropdown li a').click(function() {
        $('.dropdown').slideToggle(400);
        setTimeout(function() {
            $('.menua').removeClass('active_menu_head');
        }, 400);
    });
    var isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }
    $('.pc-menu ul li a').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        $('#desktop-menu ul').css('display', 'none');
        $('#desktop-menu').css('width', '0px');
        $('#desktop-menu').removeClass('border');
    });

    $('section, header').click(function() {
         $('#desktop-menu ul').css('display', 'none');
        $('#desktop-menu').css('width', '0px');
        $('#desktop-menu').removeClass('border');
    });



    $('.mia_li a, .drop_ul_n a').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        if ($(this).hasClass('tend')) {
            closeAll();
            animateR(".tender_2", ".tender_desktop_div_1, .tender_desktop_div_3, .tender_desktop_div_4");
            return false;
        }
        if ($(this).hasClass('bank')) {
            closeAll();
            animateR(".tender_1", ".tender_desktop_div_2, .tender_desktop_div_3, .tender_desktop_div_4");
            return false;
        }
        if ($(this).hasClass('tend_kr')) {
            closeAll();
            animateR(".tender_3", ".tender_desktop_div_2, .tender_desktop_div_1, .tender_desktop_div_4");
            return false;
        }
        if ($(this).hasClass('kredit')) {
            closeAll();
            animateR(".tender_4", ".tender_desktop_div_2, .tender_desktop_div_3, .tender_desktop_div_1");
            return false;
        }
    });
    $('.slide a').click(function() {
        return false;
    });
    $(".tender_desktop_div_1").click(function() {
        animateR(".tender_1", ".tender_desktop_div_2, .tender_desktop_div_3, .tender_desktop_div_4");
        return false;
    });
    $(".tender_desktop_div_2").click(function() {
        animateR(".tender_2", ".tender_desktop_div_1, .tender_desktop_div_3, .tender_desktop_div_4");
        return false;
    });
    $(".tender_desktop_div_3").click(function() {
        animateR(".tender_3", ".tender_desktop_div_2, .tender_desktop_div_1, .tender_desktop_div_4");
        return false;
    });
    $(".tender_desktop_div_4").click(function() {
        animateR(".tender_4", ".tender_desktop_div_2, .tender_desktop_div_3, .tender_desktop_div_1");
        return false;
    });

    function animateR(param1, param2) {
        if ($(param1).css("display") == "none") {
            $(param2).animate({
                width: ["toggle", "swing"],
                opacity: "toggle"
            }, {
                duration: 400,
                specialEasing: {
                    width: "linear",
                    height: "easeOutBounce"
                },
                complete: function() {
                    $(param1).fadeIn(400);
                    $(".form_4_1, .form_4_2, .form_1_1, .form_1_2, .form_1_3, .form_1_4, " + ".form_2_1, .form_2_2, .form_2_3, .form_2_4, .form_2_5, .form_2_6, .form_3_1, " + ".form_3_2, .form_3_3, .form_3_4, .form_3_5, .form_3_6").css("display", "none");
                    $(".arrow_prew_t").css("display", "inline-block");
                    $(".arrow_next_t").css("display", "none");
                },
            });
        } else {
            $(param1).fadeOut(400, function() {
                $(param1 + "_inner").css("display", "block");
                $(".arrow_prew_t").css("display", "none");
                $(param2).animate({
                    width: ["toggle", "swing"],
                    opacity: "toggle"
                }, {
                    duration: 400,
                    specialEasing: {
                        width: "linear",
                        height: "easeOutBounce"
                    },
                });
            });
        };
    };

    function closeAll() {
        $('.tender_1, .tender_2, .tender_3, .tender_4').css('display', 'none');
        $('.tender_desktop_div').css('display', 'block');
    }
    $('.tender_inner').click(function(event) {
        vubor = $(this).data('vubor');
        $('.form_in_2').val(vubor);
        inner = $(this).data('inner');
        form = $(this).data('form');
        var numForm = form;
        formin = $(this).data('formin');
        var reg = event.target;
        if (reg.className != "a_inner") {
            var inner = ".tender_" + inner + "_inner";
            var form = ".form_" + formin + "_" + form;
            $(inner).fadeOut(400, function() {
                $(form).fadeIn(300);
            });
        }
    });
    $('.tender_desktop_div').hover(function() {
        $('.tender_desktop_div').addClass('opacity');
        $(this).removeClass('opacity');
        if ($(this).find(".arrow_prew_t").css("display") != "block") {
            $(this).find(".arrow_next_t").css({
                "display": "inline-block",
                "vertical-align": "middle"
            });
        } else {
            $(this).find(".arrow_next_t").css({
                "display": "none",
            });
        }
    }, function() {
        $('.tender_desktop_div').removeClass('opacity');
        $(this).find(".arrow_next_t").css({
            "display": "none",
        });
    });
    $(".modal_1").click(function(e) {
        e.preventDefault();
        $('#exampleModal_1').arcticmodal();
    });
    $('.vopros_l p').click(function() {
        $('.vopros_l p').removeClass('active_p');
        $(this).addClass('active_p');
    });

    function scrollbarWidth() {
        var block = $('<div>').css({
                'height': '50px',
                'width': '50px'
            }),
            indicator = $('<div>').css({
                'height': '200px'
            });
        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }
    $(".vopros_l>p").click(function() {
        var show = $(this).attr("id");
        show = "#" + show + "_o";
        $.when($("#v_1_o, #v_2_o,#v_3_o,#v_4_o,#v_5_o,#v_6_o,#v_7_o,#v_8_o").fadeOut("fast")).then(function() {
            $(show).fadeIn("fast");
        });
    })
    var overlay = $('.overlay');
    var close = $('.close, .overlay');
    $('.a_inner').click(function() {
        $('body').css({
            'overflow': 'hidden',
            'margin-right': scrollbarWidth()
        });
        pop = $(this).data('pop');
        $('.more-info span').fadeIn('fast');
        overlay.fadeIn('fast', function() {
            elem = ".more-info_a_" + pop;
            $(elem).fadeIn('fast');
            $(elem).css({
                "z-index": "9999",
                "position": "fixed",
                "right": "0",
                "top": "0"
            });
            $(elem).animate({
                width: ["700px", "swing"],
            }, {
                duration: 400,
                specialEasing: {
                    width: "linear",
                    height: "easeOutBounce"
                },
                complete: function() {},
            });
        });
        return false;
    });
    close.click(function() {
        $(".more-info").animate({
            width: ["0px", "swing"],
        }, {
            duration: 400,
            specialEasing: {
                width: "linear",
                height: "easeOutBounce"
            },
            complete: function() {
                $(".more-info").css("z-index", "4");
            },
        });
        $('.more-info span').fadeOut('fast');
        $.when(overlay.fadeOut('fast')).then(function() {
            setTimeout(function() {
                $('body').css({
                    'overflow': 'auto',
                    'margin-right': '0'
                });
            }, 200)
        });
    });
    $('.slide_s4').bxSlider({
        slideWidth: 660,
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
    $('.slide_s2').bxSlider({
        slideWidth: 500,
        nextSelector: '#sld1r_s2',
        prevSelector: '#sld1l_s2',
        controls: true,
        pager: false,
        auto: false,
        speed: 500,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 5,
        slideMargin: 15
    });
    $('.slide_s5').bxSlider({
        slideWidth: 940,
        nextSelector: '#sld1r_s5',
        prevSelector: '#sld1l_s5',
        controls: true,
        pager: false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 0
    });
    slider = $('.slider1').bxSlider({
        slideWidth: 250,
        minSlides: 3,
        startSlide: 1,
        maxSlides: 3,
        slideMargin: 20,
        moveSlides: 1,
        controls: false,
        pager: false,
        speed: 300,
        onSliderLoad: function() {
            $('.slider1>div:not(.bx-clone)').eq(2).addClass('active-slide');
            $('.slider1>div:not(.bx-clone)').eq(1).addClass('act_s_1');
            $('.slider1>div:not(.bx-clone)').eq(2).addClass('act_s_2');
            $('.slider1>div:not(.bx-clone)').eq(3).addClass('act_s_3');
            $('.slider1>div:not(.bx-clone)').eq(4).addClass('act_s_4');
            $('.slider1>div:not(.bx-clone)').eq(0).addClass('act_s_5');
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            $('.slide_s7').removeClass('act_s_1 act_s_2 act_s_3 act_s_4 act_s_5');
            $('.slide_s7').removeClass('active-slide');
            $($slideElement).next().addClass('active-slide');
            $($slideElement).addClass('act_s_1');
            $($slideElement).next().addClass('act_s_2');
            $($slideElement).next().next().addClass('act_s_3');
            $($slideElement).next().next().next().addClass('act_s_4');
            $($slideElement).next().next().next().next().addClass('act_s_5');
        }
    });
    $(".slider_p").slider({
        animate: "slow",
        step: 1,
        min: 0,
        max: 2,
        value: 1,
        slide: function(event, ui) {
            $.when($(".opis").css("display", "none").removeClass('whidth_s_1 whidth_s_2 whidth_s_3 whidth_s_4 whidth_s_5')).then(slider.goToSlide(ui.value));
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
            $(".opis").removeClass('whidth_s_2 whidth_s_3 whidth_s_4 whidth_s_5')
        }
        if ($(this).hasClass("act_s_2")) {
            $(".opis").eq(1).toggleClass('whidth_s_2');
            $(".opis").removeClass('whidth_s_1 whidth_s_3 whidth_s_4 whidth_s_5')
        }
        if ($(this).hasClass("act_s_3")) {
            $(".opis").eq(2).toggleClass('whidth_s_3');
            $(".opis").removeClass('whidth_s_1 whidth_s_2 whidth_s_4 whidth_s_5')
        }
        if ($(this).hasClass("act_s_4")) {
            $(".opis").eq(3).toggleClass('whidth_s_4');
            $(".opis").removeClass('whidth_s_1 whidth_s_2 whidth_s_5 whidth_s_3')
        }
        if ($(this).hasClass("act_s_5")) {
            $(".opis").eq(4).toggleClass('whidth_s_5');
            $(".opis").removeClass('whidth_s_1 whidth_s_2 whidth_s_4 whidth_s_3')
        }
    });
    $('.but_a').click(function() {
        return false;
    });
    $('.but_a').one("click", function() {
        $('.but_back_fb').before('<div class="inp_back_f"><input class="inp_f" placeholder="Имя" type="text"></div><div class="inp_back_f"><input class="inp_f phone_n" placeholder="Телефон" type="text"></div>');
        $('input[name="form_subject"]').val('Выбор: Получить предложение (С выбором Партнера)');
        $('.phone_n').mask('+7 (999) 999-99-99');
        $('input[type="text"]').blur(function() {
            if ($(this).val().length < 2) {
                $(this).parent('div').addClass('error_input_f');
            }
        });
        $('.inp_f').focus(function() {
            $(this).parent('div').addClass("focus_inp_f");
        }).blur(function() {
            $(this).parent('div').removeClass("focus_inp_f");
        });
    });
    $('.inp_f').focus(function() {
        $(this).parent('div').addClass("focus_inp_f");
    }).blur(function() {
        $(this).parent('div').removeClass("focus_inp_f");
    });
    $('.inp_cen, .inp_footer, .inp_in').focus(function() {
        $(this).parent('div').addClass("focus_inp");
    }).blur(function() {
        $(this).parent('div').removeClass("focus_inp");
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 340) {
            $(".fixed_menu").stop().animate({
                top: '0px'
            }, "fast");
        } else if ($(this).scrollTop() < 340) {
            $(".fixed_menu").stop().animate({
                top: '-59px'
            }, "fast");
        }
    });
    $('#nav-toggle').click(function() {
        $('#desktop-menu').css('width', '400px');
        $('#desktop-menu').addClass('border');
        $('#desktop-menu ul').css('display', 'block');
        return false;
    });
    $(".video__play").click(function() {
        var dataYoutube = $(this).parents('.videoscript').data('yout');
        $(this).parents('.videoscript').html('<iframe src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" height="223.25" width="400" frameborder="0" allowfullscreen></iframe>')
    });
    $('.sel_ip').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });


    // форми 

    blur_p();
focus_p();


function blur_p() {$('input[type="text"]').blur(function() {if($(this).val().length < 2) {$(this).addClass('error-input');}});};
function focus_p() {$('input[type="text"]').focus(function() {$(this).removeClass('error-input');});};

    $('form').submit(function(e){
        this_f = $(this);
        blur_p();
        focus_p();
    e.preventDefault();
    th = $(this)
    console.log(th)
    $(this).find('input[type="text"]').trigger('blur');
    if(!$(this).find('input[type="text"]').hasClass('error-input')){
         $.ajax({
            type: "POST",
            url: "mail.php", 
            data: th.serialize(),
        }).done(function() {
                 if ($(th).hasClass('form_head')) {
         thank_h();
     }
     if ($(th).hasClass('form_map')) {
         thank_f();
     }
             if ($(th).hasClass('form_f')) {
         thank_h();
     }

             if ($(th).hasClass('bank_form')) {
         thank_h();
     }
            });
        
         setTimeout(function() {
                
               $('.inp_cen, .inp_in, .inp_f, .inp').val('')
               
            }, 1000);

    }else{
       if ($(this).hasClass('form_head')) {
        error_h();
    }
    if ($(this).hasClass('form_map')) {
        error_f();
    }
    if ($(this).hasClass('form_f')) {
        error_h();
    }
    if ($(this).hasClass('bank_form')) {
        error_h();
    }
    }
});



 
 
 

function modal_h() {
    $('#modal_h').arcticmodal({
            speed: 200,
            overlay: {
                css: {
                    backgroundColor: '#222',
                    opacity: 1
                }
            }
        });
}


  function thank_f() {
          $('#thank_f').arcticmodal({
            speed: 200,
            overlay: {
                css: {
                    backgroundColor: '#fff',
                    opacity: 0
                }
            }
        });
    };
    function thank_h() {
        $('#thank_head').arcticmodal({
            speed: 200,
            overlay: {
                css: {
                    backgroundColor: '#fff',
                    opacity: 0
                }
            }
        });
    };

     function error_h() {
        $('#error_head').arcticmodal({
            speed: 200,
            overlay: {
                css: {
                    backgroundColor: '#fff',
                    opacity: 0
                }
            }
        });
    };
   
    function error_f() {
        $('#error_footer').arcticmodal({
            speed: 200,
            overlay: {
                css: {
                    backgroundColor: '#fff',
                    opacity: 0
                }
            }
        });
    };



$('input[type="text"]:not(.sel_ip)').blur(function() {
    if ($(this).val().length < 2) {
        $(this).parent('div').addClass('error_input_f');
    }
});
$('input[type="text"]:not(.sel_ip)').focus(function() {
    $(this).parent('div').removeClass('error_input_f');
});

 $('.closing-btn').click(function() {

        $('#desktop-menu ul').css('display', 'none');
        $('#desktop-menu').css('width', '0px');
        $('#desktop-menu').removeClass('border');
        return false;
    });


});