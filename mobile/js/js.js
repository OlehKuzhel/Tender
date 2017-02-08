$(document).ready(function() {
    $('.cssload-container').fadeOut('1000');
    $('<link href="css/style.css" rel="stylesheet"><link href="css/normalize.css" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&subset=cyrillic" rel="stylesheet"><link rel="stylesheet" href="css/jquery-ui.css"><link href="css/jquery.bxslider.css" rel="stylesheet"><link href="css/jquery.arcticmodal-0.3.css" rel="stylesheet">').appendTo('head');
    $('.phone_n').mask('+7 (999) 999-99-99');
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

    obnul_s1();
    obnul_s3();
    obnul_s5();
    obnul_s7();
    obnul_s2();
    obnul_s4();
    obnul_s6();
    obnul_s8();


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


    $(".item_cen").click(function() {


        var th3 = $(this).find('.cenu_h3');
        $('.cenu_h3').removeClass('color_h3');
        $(th3).addClass('color_h3');


        var show_tab = $(this).attr("id");
        show_tab = "#" + show_tab + "_s";
        $.when($("#s_cen_1_s, #s_cen_2_s,#s_cen_3_s,#s_cen_4_s").fadeOut("fast")).then(function() {
            $(show_tab).fadeIn("fast");
            // obnul_s1();
            //  obnul_s3();
            //   obnul_s5();
            //    obnul_s7();
            // obnul_s2();

        });

    });


    // obnul__ten_s1();
    // obnul__ten_s3();
    // obnul__ten_s5();
    // obnul__ten_s7();
    obnul__ten_s2();
    obnul__ten_s4();
    obnul__ten_s6();
    obnul__ten_s8();


$(".h1").change(function() {

        var value1 = $(".h1").val();
        var value2 = $(".h2").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h1").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h1").val(value1);
        }
        $(".bk_sl_1").slider("values", 0, value1);
    });
    $(".h2").change(function() {

        var value1 = $(".h1").val();
        var value2 = $(".h2").val();

        if (value2 > 2000000000) {
            value2 = 2000000000;
            $(".h2").val(2000000000)
        }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h2").val(value2);
        }
        $(".bk_sl_1").slider("values", 1, value2);
    });

    $(".h3").change(function() {

        var value1 = $(".h3").val();
        var value2 = $(".h4").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h3").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h3").val(value1);
        }
        $(".bk_sl_3").slider("values", 0, value1);
    });
    $(".h4").change(function() {

        var value1 = $(".h3").val();
        var value2 = $(".h4").val();

        if (value2 > 2000000000) {
            value2 = 2000000000;
            $(".h4").val(2000000000)
        }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h4").val(value2);
        }
        $(".bk_sl_3").slider("values", 1, value2);
    });

    $(".h5").change(function() {

        var value1 = $(".h5").val();
        var value2 = $(".h6").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h5").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h5").val(value1);
        }
        $(".bk_sl_4").slider("values", 0, value1);
    });
    $(".h6").change(function() {

        var value1 = $(".h5").val();
        var value2 = $(".h6").val();

        if (value2 > 2000000000) {
            value2 = 2000000000;
            $(".h6").val(2000000000)
        }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h6").val(value2);
        }
        $(".bk_sl_4").slider("values", 1, value2);
    });

    $(".h7").change(function() {

        var value1 = $(".h7").val();
        var value2 = $(".h8").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h7").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h7").val(value1);
        }
        $(".bk_sl_5").slider("values", 0, value1);
    });
    $(".h8").change(function() {

        var value1 = $(".h7").val();
        var value2 = $(".h8").val();

        if (value2 > 2000000000) {
            value2 = 2000000000;
            $(".h8").val(2000000000)
        }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h8").val(value2);
        }
        $(".bk_sl_5").slider("values", 1, value2);
    });

    $(".h9").change(function() {

        var value1 = $(".h9").val();
        var value2 = $(".h10").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h9").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h9").val(value1);
        }
        $(".tender_ba1").slider("values", 0, value1);
    });
    $(".h10").change(function() {

        var value1 = $(".h9").val();
        var value2 = $(".h10").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h10").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h10").val(value2);
        }
        $(".tender_ba1").slider("values", 1, value2);
    });

    $(".h11").change(function() {

        var value1 = $(".h11").val();
        var value2 = $(".h12").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h11").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h11").val(value1);
        }
        $(".tender_ba2").slider("values", 0, value1);
    });
    $(".h12").change(function() {

        var value1 = $(".h11").val();
        var value2 = $(".h12").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h12").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h12").val(value2);
        }
        $(".tender_ba2").slider("values", 1, value2);
    });

    $(".h13").change(function() {

        var value1 = $(".h13").val();
        var value2 = $(".h14").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h13").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h13").val(value1);
        }
        $(".tender_ba3").slider("values", 0, value1);
    });
    $(".h14").change(function() {

        var value1 = $(".h13").val();
        var value2 = $(".h14").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h14").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h14").val(value2);
        }
        $(".tender_ba3").slider("values", 1, value2);
    });

    $(".h15").change(function() {

        var value1 = $(".h15").val();
        var value2 = $(".h16").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h15").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h15").val(value1);
        }
        $(".tender_ba4").slider("values", 0, value1);
    });
    $(".h16").change(function() {

        var value1 = $(".h15").val();
        var value2 = $(".h16").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h16").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h16").val(value2);
        }
        $(".tender_ba4").slider("values", 1, value2);
    });

    $(".h17").change(function() {

        var value1 = $(".h17").val();
        var value2 = $(".h18").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h17").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h17").val(value1);
        }
        $(".tender_ba5").slider("values", 0, value1);
    });
    $(".h18").change(function() {

        var value1 = $(".h17").val();
        var value2 = $(".h18").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h18").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h18").val(value2);
        }
        $(".tender_ba5").slider("values", 1, value2);
    });
    $(".h19").change(function() {

        var value1 = $(".h19").val();
        var value2 = $(".h20").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h19").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h19").val(value1);
        }
        $(".tender_ba6").slider("values", 0, value1);
    });
    $(".h20").change(function() {

        var value1 = $(".h19").val();
        var value2 = $(".h20").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h20").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h20").val(value2);
        }
        $(".tender_ba6").slider("values", 1, value2);
    });

    $(".h21").change(function() {

        var value1 = $(".h21").val();
        var value2 = $(".h22").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h21").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h21").val(value1);
        }
        $(".tender_kr1").slider("values", 0, value1);
    });
    $(".h22").change(function() {

        var value1 = $(".h21").val();
        var value2 = $(".h22").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h22").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h22").val(value2);
        }
        $(".tender_kr1").slider("values", 1, value2);
    });

    $(".h23").change(function() {

        var value1 = $(".h23").val();
        var value2 = $(".h24").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h23").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h23").val(value1);
        }
        $(".tender_kr2").slider("values", 0, value1);
    });
    $(".h24").change(function() {

        var value1 = $(".h23").val();
        var value2 = $(".h24").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h24").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h24").val(value2);
        }
        $(".tender_kr2").slider("values", 1, value2);
    });

    $(".h25").change(function() {

        var value1 = $(".h25").val();
        var value2 = $(".h26").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h25").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h25").val(value1);
        }
        $(".tender_kr3").slider("values", 0, value1);
    });
    $(".h26").change(function() {

        var value1 = $(".h25").val();
        var value2 = $(".h26").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h26").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h26").val(value2);
        }
        $(".tender_kr3").slider("values", 1, value2);
    });

    $(".h27").change(function() {

        var value1 = $(".h27").val();
        var value2 = $(".h28").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h27").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h27").val(value1);
        }
        $(".tender_kr4").slider("values", 0, value1);
    });
    $(".h28").change(function() {

        var value1 = $(".h27").val();
        var value2 = $(".h28").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h28").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h28").val(value2);
        }
        $(".tender_kr4").slider("values", 1, value2);
    });

    $(".h29").change(function() {

        var value1 = $(".h29").val();
        var value2 = $(".h8").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h29").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h29").val(value1);
        }
        $(".tender_kr5").slider("values", 0, value1);
    });
    $(".h30").change(function() {

        var value1 = $(".h29").val();
        var value2 = $(".h30").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h30").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h30").val(value2);
        }
        $(".tender_kr5").slider("values", 1, value2);
    });
    $(".h31").change(function() {

        var value1 = $(".h31").val();
        var value2 = $(".h32").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h31").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h31").val(value1);
        }
        $(".tender_kr6").slider("values", 0, value1);
    });
    $(".h32").change(function() {

        var value1 = $(".h31").val();
        var value2 = $(".h32").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h32").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h32").val(value2);
        }
        $(".tender_kr6").slider("values", 1, value2);
    });

    $(".h33").change(function() {

        var value1 = $(".h33").val();
        var value2 = $(".h34").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h33").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h33").val(value1);
        }
        $(".zakaz_t_1").slider("values", 0, value1);
    });
    $(".h34").change(function() {

        var value1 = $(".h33").val();
        var value2 = $(".h34").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h34").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h8").val(value2);
        }
        $(".zakaz_t_1").slider("values", 1, value2);
    });
    $(".h35").change(function() {

        var value1 = $(".h35").val();
        var value2 = $(".h36").val();
        if (value1 < 1000000) {
            value1 = 1000000;
            $(".h35").val(1000000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $(".h35").val(value1);
        }
        $(".zakaz_t_2").slider("values", 0, value1);
    });
    $(".h36").change(function() {

        var value1 = $(".h35").val();
        var value2 = $(".h36").val();

        // if (value2 > 2000000000) {
        //     value2 = 2000000000;
        //     $(".h36").val(2000000000)
        // }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $(".h36").val(value2);
        }
        $(".zakaz_t_2").slider("values", 1, value2);
    });



    $(".bk_sl_1").slider({
        range: true,
        step: 10,
        min: 1000000,
        max: 2000000000,
        values: [1000000000, 1500000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h1").val($(".bk_sl_1").slider("values", 0));
            $(".h2").val($(".bk_sl_1").slider("values", 1));
        }
    });

    $(".fir_p_ten").text(addProbel($(".bk_sl").slider("values", 0)) + " - " + addProbel($(".bk_sl").slider("values", 1)));
    $(".fir_p_ten").append('<span> P</span>');
    $(".fir_in_h").val($(".bk_sl").slider("values", 0) + " - " + $(".bk_sl").slider("values", 1));

    $(".bk_sl_3").slider({
        range: true,
        step: 10,
        min: 1000000,
        max: 2000000000,
        values: [1000000000, 1500000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h3").val($(".bk_sl_3").slider("values", 0));
            $(".h4").val($(".bk_sl_3").slider("values", 1));
        }
    });
    $(".bk_sl_4").slider({
        range: true,
        step: 10,
        min: 1000000,
        max: 2000000000,
        values: [1000000000, 1500000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h5").val($(".bk_sl_4").slider("values", 0));
            $(".h6").val($(".bk_sl_4").slider("values", 1));
        }
    });
    $(".bk_sl_5").slider({
        range: true,
        step: 10,
        min: 1000000,
        max: 2000000000,
        values: [1000000000, 1500000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h7").val($(".bk_sl_5").slider("values", 0));
            $(".h8").val($(".bk_sl_5").slider("values", 1));
        }
    });

    $(".tender_ba1").slider({
        range: true,
        step: 10,
        min: 100000,
        max: 150000000,
        values: [100000, 150000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h9").val($(".tender_ba1").slider("values", 0));
            $(".h10").val($(".tender_ba1").slider("values", 1));
        }
    });
    $(".tender_ba2").slider({
        range: true,
        step: 10,
        min: 100000,
        max: 150000000,
        values: [100000, 150000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h11").val($(".tender_ba2").slider("values", 0));
            $(".h12").val($(".tender_ba2").slider("values", 1));
        }
    });
    $(".tender_ba3").slider({
        range: true,
        step: 10,
        min: 100000,
        max: 150000000,
        values: [100000, 150000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h13").val($(".tender_ba3").slider("values", 0));
            $(".h14").val($(".tender_ba3").slider("values", 1));
        }
    });
    $(".tender_ba4").slider({
        range: true,
        step: 10,
        min: 100000,
        max: 150000000,
        values: [100000, 150000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h15").val($(".tender_ba4").slider("values", 0));
            $(".h16").val($(".tender_ba4").slider("values", 1));
        }
    });
    $(".tender_ba5").slider({
        range: true,
        step: 10,
        min: 100000,
        max: 150000000,
        values: [100000, 150000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h17").val($(".tender_ba5").slider("values", 0));
            $(".h18").val($(".tender_ba5").slider("values", 1));
        }
    });
    $(".tender_ba6").slider({
        range: true,
        step: 10,
        min: 100000,
        max: 150000000,
        values: [100000, 150000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h19").val($(".tender_ba6").slider("values", 0));
            $(".h20").val($(".tender_ba6").slider("values", 1));
        }
    });
    $(".tender_kr1").slider({
        range: true,
        step: 10,
        min: 100000,
        max: 500000000,
        values: [100000, 500000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h21").val($(".tender_kr1").slider("values", 0));
            $(".h22").val($(".tender_kr1").slider("values", 1));
        }
    });
    $(".tender_kr2").slider({
        range: true,
        step: 10,
        min: 100000,
        max: 500000000,
        values: [100000, 500000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h23").val($(".tender_kr2").slider("values", 0));
            $(".h24").val($(".tender_kr2").slider("values", 1));
        }
    });
    $(".tender_kr3").slider({
        range: true,
        step: 10,
        min: 100000,
        max: 500000000,
        values: [100000, 500000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h25").val($(".tender_kr3").slider("values", 0));
            $(".h26").val($(".tender_kr3").slider("values", 1));
        }
    });
    $(".tender_kr4").slider({
        range: true,
        step: 10,
        min: 100000,
        max: 500000000,
        values: [100000, 500000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h27").val($(".tender_kr4").slider("values", 0));
            $(".h28").val($(".tender_kr4").slider("values", 1));
        }
    });
    $(".tender_kr5").slider({
        range: true,
        step: 10,
       min: 100000,
        max: 500000000,
        values: [100000, 500000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h29").val($(".tender_kr5").slider("values", 0));
            $(".h30").val($(".tender_kr5").slider("values", 1));
        }
    });
    $(".tender_kr6").slider({
        range: true,
        step: 10,
       min: 100000,
        max: 500000000,
        values: [100000, 500000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h31").val($(".tender_kr6").slider("values", 0));
            $(".h32").val($(".tender_kr6").slider("values", 1));
        }
    });
    $(".zakaz_t1").slider({
        range: true,
        step: 10,
        min: 1000000,
        max: 2000000000,
        values: [1000000000, 1500000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h33").val($(".zakaz_t1").slider("values", 0));
            $(".h34").val($(".zakaz_t1").slider("values", 1));
        }
    });
     $(".zakaz_t2").slider({
        range: true,
        step: 10,
        min: 1000000,
        max: 2000000000,
        values: [1000000000, 1500000000],
        slide: function(event, ui) {
            $(".fir_p_ten").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
            $(".fir_p_ten").append('<span> P</span>');
            $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            // $(".h1").val(ui.values[0]);
            // $(".h2").val(ui.values[1]);
            $(".h35").val($(".zakaz_t2").slider("values", 0));
            $(".h36").val($(".zakaz_t2").slider("values", 1));
        }
    });
 

    function obnul__ten_s2() {
        $(".slide_tend_2").slider({
            range: true,
            step: 1,
            min: 1,
            max: 60,
            values: [1, 60],
            slide: function(event, ui) {
                $(".fir_p_el").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p_el").append('<span>  мес.</span>');
                $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });



        $(".fir_p_el").text(addProbel($(".slide_tend_2").slider("values", 0)) + " - " + addProbel($(".slide_tend_2").slider("values", 1)));
        $(".fir_p_el").append('<span> мес.</span>');
        $(".fir_in_h").val($(".slide_tend_2").slider("values", 0) + " - " + $(".slide_tend_2").slider("values", 1));


    };
    function obnul__ten_s4() {
        $(".slide_tend_4").slider({
            range: true,
            step: 1,
            min: 10,
            max: 90,
            values: [10, 90],
            slide: function(event, ui) {
                $(".fir_p_el").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p_el").append('<span>  дней.</span>');
                $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });



        $(".fir_p_el").text(addProbel($(".slide_tend_4").slider("values", 0)) + " - " + addProbel($(".slide_tend_4").slider("values", 1)));
        $(".fir_p_el").append('<span> дней.</span>');
        $(".fir_in_h").val($(".slide_tend_4").slider("values", 0) + " - " + $(".slide_tend_4").slider("values", 1));


    };
    function obnul__ten_s6() {
        $(".slide_tend_6").slider({
            range: true,
            step: 1,
            min: 1,
            max: 12,
            values: [1, 12],
            slide: function(event, ui) {
                $(".fir_p_el").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p_el").append('<span>  мес.</span>');
                $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });



        $(".fir_p_el").text(addProbel($(".slide_tend_6").slider("values", 0)) + " - " + addProbel($(".slide_tend_6").slider("values", 1)));
        $(".fir_p_el").append('<span> мес.</span>');
        $(".fir_in_h").val($(".slide_tend_6").slider("values", 0) + " - " + $(".slide_tend_6").slider("values", 1));


    };
    function obnul__ten_s8() {
        $(".slide_tend_8").slider({
            range: true,
            step: 1,
            min: 1,
            max: 60,
            values: [1, 60],
            slide: function(event, ui) {
                $(".fir_p_el").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p_el").append('<span>  мес.</span>');
                $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });



        $(".fir_p_el").text(addProbel($(".slide_tend_8").slider("values", 0)) + " - " + addProbel($(".slide_tend_8").slider("values", 1)));
        $(".fir_p_el").append('<span> мес.</span>');
        $(".fir_in_h").val($(".slide_tend_8").slider("values", 0) + " - " + $(".slide_tend_8").slider("values", 1));


    };

    $('#tend_1').click(function() {
        $(".fir_p_ten").text(addProbel($(".slide_tend_1").slider("values", 0)) + " - " + addProbel($(".slide_tend_1").slider("values", 1)));
        $(".fir_p_ten").append('<span> P</span>');
        $(".fir_in_h").val($(".slide_tend_1").slider("values", 0) + " - " + $(".slide_tend_1").slider("values", 1));
        $(".fir_p_el").text(addProbel($(".slide_tend_2").slider("values", 0)) + " - " + addProbel($(".slide_tend_2").slider("values", 1)));
        $(".fir_p_el").append('<span> мес.</span>');
        $(".fir_in_h").val($(".slide_tend_2").slider("values", 0) + " - " + $(".slide_tend_2").slider("values", 1));
    });
    $('#tend_2').click(function() {
        $(".fir_p_ten").text(addProbel($(".slide_tend_3").slider("values", 0)) + " - " + addProbel($(".slide_tend_3").slider("values", 1)));
        $(".fir_p_ten").append('<span> P</span>');
        $(".fir_in_h").val($(".slide_tend_3").slider("values", 0) + " - " + $(".slide_tend_3").slider("values", 1));
        $(".fir_p_el").text(addProbel($(".slide_tend_4").slider("values", 0)) + " - " + addProbel($(".slide_tend_4").slider("values", 1)));
        $(".fir_p_el").append('<span> дней.</span>');
        $(".fir_in_h").val($(".slide_tend_4").slider("values", 0) + " - " + $(".slide_tend_4").slider("values", 1));
    });
    $('#tend_3').click(function() {
        $(".fir_p_ten").text(addProbel($(".slide_tend_5").slider("values", 0)) + " - " + addProbel($(".slide_tend_5").slider("values", 1)));
        $(".fir_p_ten").append('<span> P</span>');
        $(".fir_in_h").val($(".slide_tend_5").slider("values", 0) + " - " + $(".slide_tend_5").slider("values", 1));
         $(".fir_p_el").text(addProbel($(".slide_tend_6").slider("values", 0)) + " - " + addProbel($(".slide_tend_6").slider("values", 1)));
        $(".fir_p_el").append('<span> мес.</span>');
        $(".fir_in_h").val($(".slide_tend_6").slider("values", 0) + " - " + $(".slide_tend_6").slider("values", 1));
    });
    $('#tend_4').click(function() {
        $(".fir_p_ten").text(addProbel($(".slide_tend_7").slider("values", 0)) + " - " + addProbel($(".slide_tend_7").slider("values", 1)));
        $(".fir_p_ten").append('<span> P</span>');
        $(".fir_in_h").val($(".slide_tend_7").slider("values", 0) + " - " + $(".slide_tend_7").slider("values", 1));
        $(".fir_p_el").text(addProbel($(".slide_tend_8").slider("values", 0)) + " - " + addProbel($(".slide_tend_8").slider("values", 1)));
        $(".fir_p_el").append('<span> мес.</span>');
        $(".fir_in_h").val($(".slide_tend_8").slider("values", 0) + " - " + $(".slide_tend_8").slider("values", 1));
    });


$('#s_cen_1').click(function() {
      $(".fir_p").text(addProbel($(".slide_pol_1").slider("values", 0)) + " - " + addProbel($(".slide_pol_1").slider("values", 1)));
        $(".fir_p").append('<span> P</span>');
        $(".fir_in_h").val($(".slide_pol_1").slider("values", 0) + " - " + $(".slide_pol_1").slider("values", 1));

        $(".two_p").text(addProbel($(".slide_pol_2").slider("values", 0)) + " - " + addProbel($(".slide_pol_2").slider("values", 1)));
        $(".two_p").append('<span> мес.</span>');
        $(".two_in_h").val($(".slide_pol_2").slider("values", 0) + " - " + $(".slide_pol_2").slider("values", 1));
 

    });
    $('#s_cen_2').click(function() {
       $(".fir_p").text(addProbel($(".slide_pol_3").slider("values", 0)) + " - " + addProbel($(".slide_pol_3").slider("values", 1)));
        $(".fir_p").append('<span> P</span>');
        $(".fir_in_h").val($(".slide_pol_3").slider("values", 0) + " - " + $(".slide_pol_3").slider("values", 1));
        $(".two_p").text(addProbel($(".slide_pol_4").slider("values", 0)) + " - " + addProbel($(".slide_pol_4").slider("values", 1)));
        $(".two_p").append('<span> дней.</span>');
        $(".two_in_h").val($(".slide_pol_4").slider("values", 0) + " - " + $(".slide_pol_4").slider("values", 1));

    });
    $('#s_cen_3').click(function() {
       $(".fir_p").text(addProbel($(".slide_pol_5").slider("values", 0)) + " - " + addProbel($(".slide_pol_5").slider("values", 1)));
        $(".fir_p").append('<span> P</span>');
        $(".fir_in_h").val($(".slide_pol_5").slider("values", 0) + " - " + $(".slide_pol_5").slider("values", 1));
        $(".two_p").text(addProbel($(".slide_pol_6").slider("values", 0)) + " - " + addProbel($(".slide_pol_6").slider("values", 1)));
        $(".two_p").append('<span> мес.</span>');
        $(".two_in_h").val($(".slide_pol_6").slider("values", 0) + " - " + $(".slide_pol_6").slider("values", 1));

    });
    $('#s_cen_4').click(function() {
       $(".fir_p").text(addProbel($(".slide_pol_7").slider("values", 0)) + " - " + addProbel($(".slide_pol_7").slider("values", 1)));
        $(".fir_p").append('<span> P</span>');
        $(".fir_in_h").val($(".slide_pol_7").slider("values", 0) + " - " + $(".slide_pol_7").slider("values", 1));
        $(".two_p").text(addProbel($(".slide_pol_8").slider("values", 0)) + " - " + addProbel($(".slide_pol_8").slider("values", 1)));
        $(".two_p").append('<span> мес.</span>');
        $(".two_in_h").val($(".slide_pol_8").slider("values", 0) + " - " + $(".slide_pol_8").slider("values", 1));
    });


    function obnul_s1() {
        $(".slide_pol_1").slider({
            range: true,
            step: 10,
            min: 1000000,
            max: 2000000000,
            values: [1000000, 2000000000],
            slide: function(event, ui) {
                $(".fir_p").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p").append('<span> P</span>');
                $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });





        $(".fir_p").text(addProbel($(".slide_pol_1").slider("values", 0)) + " - " + addProbel($(".slide_pol_1").slider("values", 1)));
        $(".fir_p").append('<span> P</span>');
        $(".fir_in_h").val($(".slide_pol_1").slider("values", 0) + " - " + $(".slide_pol_1").slider("values", 1));


    };
    function obnul_s3() {
        $(".slide_pol_3").slider({
            range: true,
            step: 10,
            min: 100000,
            max: 150000000,
            values: [100000, 150000000],
            slide: function(event, ui) {
                $(".fir_p").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p").append('<span> P</span>');
                $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });



        $(".fir_p").text(addProbel($(".slide_pol_3").slider("values", 0)) + " - " + addProbel($(".slide_pol_3").slider("values", 1)));
        $(".fir_p").append('<span> P</span>');
        $(".fir_in_h").val($(".slide_pol_3").slider("values", 0) + " - " + $(".slide_pol_3").slider("values", 1));


    };
    function obnul_s5() {
        $(".slide_pol_5").slider({
            range: true,
            step: 10,
            min: 100000,
            max: 500000000,
            values: [100000, 500000000],
            slide: function(event, ui) {
                $(".fir_p").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p").append('<span> P</span>');
                $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });



        $(".fir_p").text(addProbel($(".slide_pol_5").slider("values", 0)) + " - " + addProbel($(".slide_pol_5").slider("values", 1)));
        $(".fir_p").append('<span> P</span>');
        $(".fir_in_h").val($(".slide_pol_5").slider("values", 0) + " - " + $(".slide_pol_5").slider("values", 1));


    };
    function obnul_s7() {
        $(".slide_pol_7").slider({
            range: true,
            step: 10,
            min: 1000000,
            max: 2000000000,
            values: [1000000, 2000000000],
            slide: function(event, ui) {
                $(".fir_p").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p").append('<span> P</span>');
                $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });



        $(".fir_p").text(addProbel($(".slide_pol_7").slider("values", 0)) + " - " + addProbel($(".slide_pol_7").slider("values", 1)));
        $(".fir_p").append('<span> P</span>');
        $(".fir_in_h").val($(".slide_pol_7").slider("values", 0) + " - " + $(".slide_pol_7").slider("values", 1));


    };



    function obnul_s2() {

        $(".slide_pol_2").slider({
            range: true,
            step: 1,
            min: 1,
            max: 60,
            values: [1, 60],
            slide: function(event, ui) {

                $(".two_p").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));

                $(".two_p").append('<span> мес.</span>');
                $(".two_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });

        $(".two_p").text(addProbel($(".slide_pol_2").slider("values", 0)) + " - " + addProbel($(".slide_pol_2").slider("values", 1)));
        $(".two_p").append('<span> мес.</span>');
        $(".two_in_h").val($(".slide_pol_2").slider("values", 0) + " - " + $(".slide_pol_2").slider("values", 1));

    };
    function obnul_s4() {

        $(".slide_pol_4").slider({
            range: true,
            step: 1,
            min: 10,
            max: 90,
            values: [10, 90],
            slide: function(event, ui) {

                $(".two_p").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));

                $(".two_p").append('<span> дней.</span>');
                $(".two_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });

        $(".two_p").text(addProbel($(".slide_pol_4").slider("values", 0)) + " - " + addProbel($(".slide_pol_4").slider("values", 1)));
        $(".two_p").append('<span> дней.</span>');
        $(".two_in_h").val($(".slide_pol_4").slider("values", 0) + " - " + $(".slide_pol_4").slider("values", 1));

    };
     function obnul_s6() {

        $(".slide_pol_6").slider({
            range: true,
            step: 1,
            min: 1,
            max: 12,
            values: [1, 12],
            slide: function(event, ui) {

                $(".two_p").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));

                $(".two_p").append('<span> мес.</span>');
                $(".two_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });

        $(".two_p").text(addProbel($(".slide_pol_6").slider("values", 0)) + " - " + addProbel($(".slide_pol_6").slider("values", 1)));
        $(".two_p").append('<span> мес.</span>');
        $(".two_in_h").val($(".slide_pol_6").slider("values", 0) + " - " + $(".slide_pol_6").slider("values", 1));

    };
     function obnul_s8() {

        $(".slide_pol_8").slider({
            range: true,
            step: 1,
            min: 1,
            max: 60,
            values: [1, 60],
            slide: function(event, ui) {

                $(".two_p").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));

                $(".two_p").append('<span> мес.</span>');
                $(".two_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });

        $(".two_p").text(addProbel($(".slide_pol_8").slider("values", 0)) + " - " + addProbel($(".slide_pol_8").slider("values", 1)));
        $(".two_p").append('<span> мес.</span>');
        $(".two_in_h").val($(".slide_pol_8").slider("values", 0) + " - " + $(".slide_pol_8").slider("values", 1));

    };
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

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(55.717036, 37.628825), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#d3d3d3"
                }]
            }, {
                "featureType": "transit",
                "stylers": [{
                    "color": "#808080"
                }, {
                    "visibility": "off"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#b3b3b3"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffffff"
                }, {
                    "weight": 1.8
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#d7d7d7"
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ebebeb"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#a7a7a7"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#efefef"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#696969"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#737373"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#d6d6d6"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {}, {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#dadada"
                }]
            }]

        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.717036, 37.628825),
            map: map,
            icon: {
                url: 'images/pin.png',
                origin: new google.maps.Point(-151, 0),
                origin: new google.maps.Point(0, 0),
                size: new google.maps.Size(60, 80),
            },
            title: 'Тендер Финанс'
        });
        console.log('map.inited')
    };




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

    $('.a_inner').click(function() {
        var popup = $(this).data('pop');
        console.log(popup)
        var popup = '.info_a_' + popup;

        var popup = $(popup);

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

    // $(".modal_1").click(function(e) {
    //     e.preventDefault();
    //     $('#exampleModal_1').arcticmodal();
    // });

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
            scrollTop: $($(this).attr('href')).offset().top
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




    $('#vid1, #vid2, #vid4').click(function() {
        if ($(this).get(0).paused) {
            $(this).get(0).play();

        } else {
            $(this).get(0).pause();
        }
    });
    $('#sld1l_s5').click(function() {

        $('#vid1').get(0).pause();
        $('#vid2').get(0).pause();
        $('#vid4').get(0).pause();
    });
    $('#sld1r_s5').click(function() {

        $('#vid1').get(0).pause();
        $('#vid2').get(0).pause();
        $('#vid4').get(0).pause();

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
        slideWidth: 480,
        nextSelector: '#sld1r',
        prevSelector: '#sld1l',
        controls: true,
        pager: false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideMargin: 30

    });



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
        minSlides: 1,
        maxSlides: 2,
        slideMargin: 0,
        moveSlides: 2,

        controls: false,
        pager: false,
        speed: 300,

        onSliderLoad: function() {
            $('.slider1>div:not(.bx-clone)').eq(1).addClass('active-slide');

            $('.slider1>div:not(.bx-clone)').eq(0).addClass('act_s_1');
            $('.slider1>div:not(.bx-clone)').eq(1).addClass('act_s_2');
            $('.slider1>div:not(.bx-clone)').eq(2).addClass('act_s_3');
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            $('.slide_s7').removeClass('act_s_1 act_s_2 act_s_3');
            $('.slide_s7').removeClass('active-slide');
            $($slideElement).next().addClass('active-slide');

            $($slideElement).addClass('act_s_1');
            $($slideElement).next().addClass('act_s_2');
            $($slideElement).next().next().addClass('act_s_3');
        }

    });



    $(".slider_p").slider({
        animate: "slow",
        step: 1,
        min: 0,
        max: 2,
        value: 0,


        slide: function(event, ui) {
            $.when($(".opis").css("display", "none").removeClass('whidth_s_1 whidth_s_2 whidth_s_3')).then(slider.goToSlide(ui.value));
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
        if ($(this).hasClass("act_s_3")) {
            $(".opis").eq(2).toggleClass('whidth_s_3');
            $(".opis").removeClass('whidth_s_1 whidth_s_2 whidth_s_5 whidth_s_4')
        }
        if ($(this).hasClass("act_s_4")) {
            $(".opis").eq(3).toggleClass('whidth_s_4');
            $(".opis").removeClass('whidth_s_1 whidth_s_2 whidth_s_5 whidth_s_3')
        }
        if ($(this).hasClass("act_s_5")) {
            $(".opis").eq(4).toggleClass('whidth_s_3');
            $(".opis").removeClass('whidth_s_1 whidth_s_2 whidth_s_4 whidth_s_5')
        }

    });



    $("#tend_tab").tabs({
        collapsible: true,
        active: false
    });

    $('#tend_tab li a').click(function() {

        $('.ui-tabs-anchor').removeClass('act_ach');

        $(this).toggleClass('act_ach');
    });




});