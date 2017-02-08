
$(document).ready(function() {
    $('.cssload-container').fadeOut('1000');
    $('.inp').focus(function() {
        $(this).parent('div').addClass("focus_inp");
    }).blur(function() {
        $(this).parent('div').removeClass("focus_inp");
    });
   
    $('.phone_n').mask('+7 (999) 999-99-99');

   obnul_s1();
    obnul_s2();
    
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
        if ($(this).hasClass('sl_1_bk')) {
            obnul_s1();
            obnul_s2();
        }
        if ($(this).hasClass('sl_2_bk')) {
            obnul_s3();
            obnul_s4();
        }
        if ($(this).hasClass('sl_3_bk')) {
            obnul_s5();
            obnul_s6();
        }
        if ($(this).hasClass('sl_4_bk')) {
            obnul_s7();
            obnul_s8();
        }
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



    $('.bank_gar').click(function() {
        $(".bk_sl_2").slider({
            range: true,
            step: 1,
            min: 1,
            max: 60,
            values: [1, 60],
            slide: function(event, ui) {
                $(".fir_p_el").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p_el").append('<span>  мес.</span>');
                $(".fir_in_up").val(ui.values[0] + " - " + ui.values[1]);
            }
        });
        $(".fir_p_el").text(addProbel($(".bk_sl_2").slider("values", 0)) + " - " + addProbel($(".bk_sl_2").slider("values", 1)));
        $(".fir_p_el").append('<span> мес.</span>');
        $(".fir_in_up").val($(".bk_sl_2").slider("values", 0) + " - " + $(".bk_sl_2").slider("values", 1));

    });

      $('.tend_tab_cl').click(function() {
       $(".tender_ba_2").slider({
              range: true,
              step: 1,
              min: 10,
              max: 90,
              values: [20, 60],
              slide: function(event,ui) {
                  $(".fir_p_el").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                  $(".fir_p_el").append('<span>  дней.</span>');
                  $(".fir_in_up").val(ui.values[0] + " - " + ui.values[1]);
              }
          });
          $(".fir_p_el").text(addProbel($(".tender_ba_2").slider("values", 0)) + " - " + addProbel($(".tender_ba_2").slider("values", 1)));
          $(".fir_p_el").append('<span> дней.</span>');
          $(".fir_in_up").val($(".tender_ba_2").slider("values", 0) + " - " + $(".tender_ba_2").slider("values", 1));
          });

    $('.tend_kr_cl').click(function() {
         $(".tender_kr_2").slider({
                range: true,
                step: 1,
                min: 1,
                max: 12,
                values: [5, 9],
                slide: function(event,ui) {
                    $(".fir_p_el").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                    $(".fir_p_el").append('<span>  мес.</span>');
                    $(".fir_in_up").val(ui.values[0] + " - " + ui.values[1]);
                }
            });
            $(".fir_p_el").text(addProbel($(".tender_kr_2").slider("values", 0)) + " - " + addProbel($(".tender_kr_2").slider("values", 1)));
            $(".fir_p_el").append('<span> мес.</span>');
            $(".fir_in_up").val($(".tender_kr_2").slider("values", 0) + " - " + $(".tender_kr_2").slider("values", 1));
            });
    $('.zakaz_t').click(function() {

         $(".zakaz_t_2").slider({
                range: true,
                step: 1,
                min: 1,
                max: 60,
                values: [20, 40],
                slide: function(event,ui) {
                    $(".fir_p_el").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                    $(".fir_p_el").append('<span>  мес.</span>');
                    $(".fir_in_up").val(ui.values[0] + " - " + ui.values[1]);
                }
            });
            $(".fir_p_el").text(addProbel($(".zakaz_t_2").slider("values", 0)) + " - " + addProbel($(".zakaz_t_2").slider("values", 1)));
            $(".fir_p_el").append('<span> мес.</span>');
            $(".fir_in_up").val($(".zakaz_t_2").slider("values", 0) + " - " + $(".zakaz_t_2").slider("values", 1));
            });


$("#v1, #v2, #v3, #v4, #v5, #v6, #v7, #v8").keyup(function() {

  value_chi_1 = $("#v1").val();
  value_chi_2 = $("#v2").val();

  value_chi_3 = $("#v3").val();
  value_chi_4 = $("#v4").val();

  value_chi_5 = $("#v5").val();
  value_chi_6 = $("#v6").val();

  value_chi_7 = $("#v7").val();
  value_chi_8 = $("#v8").val();

$(".sl_bk_1").slider({ 
values: [value_chi_1, value_chi_2]
 });
$(".sl_bk_3").slider({ 
values: [value_chi_3, value_chi_4]
 });
$(".sl_bk_5").slider({ 
values: [value_chi_5, value_chi_6]
 });
$(".sl_bk_7").slider({ 
values: [value_chi_7, value_chi_8]
 });
});
    function obnul_s1() {
         value_chi_1s = $("#v1").val();
        value_chi_2s = $("#v2").val();

        $(".sl_bk_1").slider({
            range: true,
            step: 10,
            min: 1000000,
            max: 2000000000,
            values: [value_chi_1s, value_chi_2s],
            slide: function(event, ui) {
                $(".fir_p").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p").append('<span> P</span>');
                $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
                $("#v1").val(ui.values[0]);
                $("#v2").val(ui.values[1]);
            }
        });
        $(".fir_p").text(addProbel($(".sl_bk_1").slider("values", 0)) + " - " + addProbel($(".sl_bk_1").slider("values", 1)));
        $(".fir_p").append('<span> P</span>');
        $(".fir_in_h").val($(".sl_bk_1").slider("values", 0) + " - " + $(".sl_bk_1").slider("values", 1));
    };
    function obnul_s3() {
        value_chi_3s = $("#v3").val();
        value_chi_4s = $("#v4").val();
     $(".sl_bk_3").slider({
            range: true,
            step: 10,
            min: 100000,
            max: 150000000,
            values: [value_chi_3s, value_chi_4s],
            slide: function(event, ui) {
                $(".fir_p").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p").append('<span> P</span>');
                $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
                $("#v3").val(ui.values[0]);
                $("#v4").val(ui.values[1]);
            }
        });
        $(".fir_p").text(addProbel($(".sl_bk_3").slider("values", 0)) + " - " + addProbel($(".sl_bk_3").slider("values", 1)));
        $(".fir_p").append('<span> P</span>');
        $(".fir_in_h").val($(".sl_bk_3").slider("values", 0) + " - " + $(".sl_bk_3").slider("values", 1));
    };
    function obnul_s5() {
        value_chi_5s = $("#v5").val();
        value_chi_6s = $("#v6").val();
     $(".sl_bk_5").slider({
            range: true,
            step: 10,
            min: 100000,
            max: 500000000,
            values: [value_chi_5s, value_chi_6s],
            slide: function(event, ui) {
                $(".fir_p").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p").append('<span> P</span>');
                $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
                $("#v5").val(ui.values[0]);
                $("#v6").val(ui.values[1]);
            }
        });
        $(".fir_p").text(addProbel($(".sl_bk_5").slider("values", 0)) + " - " + addProbel($(".sl_bk_5").slider("values", 1)));
        $(".fir_p").append('<span> P</span>');
        $(".fir_in_h").val($(".sl_bk_5").slider("values", 0) + " - " + $(".sl_bk_5").slider("values", 1));
    };
    function obnul_s7() {
        value_chi_7s = $("#v7").val();
        value_chi_8s = $("#v8").val();
         $(".sl_bk_7").slider({
            range: true,
            step: 10,
            min: 1000000,
            max: 2000000000,
           values: [value_chi_7s, value_chi_8s],
            slide: function(event, ui) {
                $(".fir_p").text(addProbel(ui.values[0]) + " - " + addProbel(ui.values[1]));
                $(".fir_p").append('<span> P</span>');
                $(".fir_in_h").val(ui.values[0] + " - " + ui.values[1]);
                $("#v7").val(ui.values[0]);
                $("#v8").val(ui.values[1]);
            }
        });
        $(".fir_p").text(addProbel($(".sl_bk_7").slider("values", 0)) + " - " + addProbel($(".sl_bk_7").slider("values", 1)));
        $(".fir_p").append('<span> P</span>');
        $(".fir_in_h").val($(".sl_bk_7").slider("values", 0) + " - " + $(".sl_bk_7").slider("values", 1));
    };
    function obnul_s2() {
        $(".sl_bk_2").slider({
            range: true,
            step:1,
            min: 1,
            max: 60,
            values: [20, 40],
            slide: function(event, ui) {
                $(".two_p").text(ui.values[0] + " - " + ui.values[1]);
                $(".two_p").append('<span> мес.</span>');
                $(".two_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });
        $(".two_p").text($(".sl_bk_2").slider("values", 0) + " - " + $(".sl_bk_2").slider("values", 1));
        $(".two_p").append('<span> мес.</span>');
        $(".two_in_h").val($(".sl_bk_2").slider("values", 0) + " - " + $(".sl_bk_2").slider("values", 1));
         };
        function obnul_s4() {
        $(".sl_bk_4").slider({
            range: true,
            step:1,
            min: 10,
            max: 90,
            values: [30, 40],
            slide: function(event, ui) {
                $(".two_p").text(ui.values[0] + " - " + ui.values[1]);
                $(".two_p").append('<span> дней.</span>');
                $(".two_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });
        $(".two_p").text($(".sl_bk_4").slider("values", 0) + " - " + $(".sl_bk_4").slider("values", 1));
        $(".two_p").append('<span> дней.</span>');
        $(".two_in_h").val($(".sl_bk_4").slider("values", 0) + " - " + $(".sl_bk_4").slider("values", 1));
         };
        function obnul_s6() {
        $(".sl_bk_6").slider({
            range: true,
            min: 1,
            step:1,
            max: 12,
            values: [2, 5],
            slide: function(event, ui) {
                $(".two_p").text(ui.values[0] + " - " + ui.values[1]);
                $(".two_p").append('<span> мес.</span>');
                $(".two_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });
        $(".two_p").text($(".sl_bk_6").slider("values", 0) + " - " + $(".sl_bk_6").slider("values", 1));
        $(".two_p").append('<span> мес.</span>');
        $(".two_in_h").val($(".sl_bk_6").slider("values", 0) + " - " + $(".sl_bk_6").slider("values", 1));
    };
function obnul_s8() {
        $(".sl_bk_8").slider({
            range: true,
            step:1,
            min: 1,
            max: 60,
            values: [20, 40],
            slide: function(event, ui) {
                $(".two_p").text(ui.values[0] + " - " + ui.values[1]);
                $(".two_p").append('<span> мес.</span>');
                $(".two_in_h").val(ui.values[0] + " - " + ui.values[1]);
            }
        });
        $(".two_p").text($(".sl_bk_8").slider("values", 0) + " - " + $(".sl_bk_8").slider("values", 1));
        $(".two_p").append('<span> мес.</span>');
        $(".two_in_h").val($(".sl_bk_8").slider("values", 0) + " - " + $(".sl_bk_8").slider("values", 1));
    };
    // obnul__ten_s1();
    // obnul__ten_s2();

    
     google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapOptions = {
            zoom: 11,
            scrollwheel: false,
            center: new google.maps.LatLng(56.019770, 37.863892),
            styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(56.019770, 37.863892),
            map: map,
            icon: {
                url: 'images/pin1.png',
                origin: new google.maps.Point(-151, 0),
                origin: new google.maps.Point(0, 0),
                size: new google.maps.Size(60, 80),
            },
            title: 'Тендер Финанс'
        });
        console.log('map.inited')
    };
    $('.item_cen').hover(function() {
        var th3 = $(this).find('.cenu_h3');
        $('.item_cen').toggleClass('changed');
        $(this).removeClass('changed');
        $('.cenu_h3').toggleClass('act');
        $(th3).removeClass('act');
    });
    $('.menua').click(function() {
        // $(this).addClass('active_menu_head');
        // $(this).removeClass('hover_menu_menua');
        // $('.dropdown').slideToggle("slow", function() {
        //     if ($('.dropdown').css('display') == 'none') {
        //         $('.menua').removeClass('active_menu_head');
        //     }
        // });
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

    // function stabilize() {
    //     $('section, header').each(function(index, el) {
    //         var eTop = $(this).offset().top;
    //         var posTop = eTop - $(window).scrollTop();
    //         if (posTop > -$(window).height() / 2 && posTop < $(window).height() / 2) {
    //             $("html, body").animate({
    //                 scrollTop: $(this).offset().top
    //             }, 250);
    //         }
    //     });
    // }
    // $("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function() {
    //     $("html, body").stop();
    // });
    // if (isMobile != true) {
    //     $(window).scroll(function() {
    //         clearTimeout($.data(this, 'scrollTimer'));
    //         $.data(this, 'scrollTimer', setTimeout(stabilize, 1500));
    //     });
    // };
    $('.slide a').click(function() {
        return false;
    });
    $('.pc-menu ul li a').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top 
        }, 1000);
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
    
    // внутрішні блоки
    
    $('.tender_inner').click(function () {

    // var formArray = [
    //   [


                        
                     
                     

    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Банковская гарантия"> <input type="hidden" name="тип услуги" value="44 — ФЗ"> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Банковская гарантия"> <input type="hidden" name="тип услуги" value="223 — ФЗ"> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Банковская гарантия"> <input type="hidden" name="тип услуги" value="185 — ФЗ"> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Банковская гарантия"> <input type="hidden" name="тип услуги" value="Коммерция"> </form>'
    //   ],
    //   [
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Тендерный займ"> <input type="hidden" name="тип услуги" value="СБЕРБАНК-АСТ Автоматизированная систематоргов"> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Тендерный займ"> <input type="hidden" name="тип услуги" value="Единая электронная торговая площадка roseltorg.ru"> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Тендерный займ"> <input type="hidden" name="тип услуги" value="ЭТП ММВБ "> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Тендерный займ"> <input type="hidden" name="тип услуги" value="тендер РТС"> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Тендерный займ"> <input type="hidden" name="тип услуги" value="ZakazRF"> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Тендерный займ"> <input type="hidden" name="тип услуги" value="Ком. площадки"> </form>'
    //   ],
    //   [
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Тендерный кредит"> <input type="hidden" name="тип услуги" value="СБЕРБАНК-АСТ Автоматизированная систематоргов"> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Тендерный кредит"> <input type="hidden" name="тип услуги" value="Единая электронная торговая площадка roseltorg.ru"> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Тендерный кредит"> <input type="hidden" name="тип услуги" value="ЭТП ММВБ "> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Тендерный кредит"> <input type="hidden" name="тип услуги" value="тендер РТС"> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Тендерный кредит"> <input type="hidden" name="тип услуги" value="ZakazRF"> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Тендерный кредит"> <input type="hidden" name="тип услуги" value="Ком. площадки"> </form>'
    //   ],
    //   [
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Кредит на исполнение"> <input type="hidden" name="тип услуги" value="Государственный заказчик"> </form>',
    //     '<form class="bank_form"><input type="hidden" name="project_name" value="Тендер Финанс"><input type="hidden" name="admin_email" value="kuzhel.ol@yandex.ru"><input type="hidden" name="form_subject" value="Анкета"><div class="sliders_ui"><div class="left_slider"><p class="nazva_sl">Выберите сумму<br>обеспечения</p> <div class="slider_range_tend slide_tend_1"></div> <p class="cost fir_p_ten"></p> <input type="hidden" class="fir_in_h" name="Сумма обеспечения:"> </div> <div class="right_slider"> <p class="nazva_sl">Выберите срок действия<br>банковской гарантии</p> <div class="slider_range_tend slide_tend_2"></div> <p class="cost fir_p_el"></p> <input type="hidden" class="fir_in_h" name="Cрок действия:"> </div> </div> <hr class="bank_hr"> <p class="form_t">Заполните ваши контактные данные, и наш менеджер сориентирует вас постоимости в течение 5 минут</p> <div class="input_inner"> <div class="inp_in_b"> <input type="text" placeholder="Имя" class="inp_in"> </div> <div class="inp_in_b"> <input type="text" placeholder="Телефон" class="inp_in phone_n"> </div> <div class="but_in_b"> <input type="submit" class="but_in" value="Узнать стоимость"> </div> </div> <input type="hidden" name="услуга" value="Кредит на исполнение"> <input type="hidden" name="тип услуги" value="Коммерческий заказчик"> </form>'
    //   ]
    // ];

    inner = $(this).data('inner'); // 0-ий рівень вкладеності. номер закладки [1, 2, 3, 4]

    form = $(this).data('form'); // 1-ий рівень вкладеності. Дізнаємося номер форми яку хоче відкрити юзер
    var numForm = form; // 1-ий рівень вкладеності. Дізнаємося номер форми яку хоче відкрити юзер
    formin = $(this).data('formin'); // 0-ий рівень вкладеності. номер закладки [1, 2, 3, 4]

    var reg = event.target; // клікнутий елемент

    if (reg.className != "a_inner") {  // якщо це не "подробнее", то вікриваємо форму

      var inner = ".tender_" + inner + "_inner";
      var form = ".form_" + formin + "_" + form;

     // $(form).html(formArray[formin - 1][numForm - 1]);

      // obnul__ten_s1();
      // obnul__ten_s2();
      $(inner).fadeOut(400, function () {
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
// $('input[type="text"]').focus(function() {
//     $(this).parent('div').removeClass('error_input_f');
// });
$('.inp_f').focus(
    function() {
        $(this).parent('div').addClass("focus_inp_f");
    }).blur(
    function() {
        $(this).parent('div').removeClass("focus_inp_f");

    });


});




$('#vid1, #vid2, #vid4').click(function () {
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


$('.inp_f').focus(
    function() {
        $(this).parent('div').addClass("focus_inp_f");
    }).blur(
    function() {
        $(this).parent('div').removeClass("focus_inp_f");

    });
$('.inp_cen, .inp_footer, .inp_in').focus(
    function() {
        $(this).parent('div').addClass("focus_inp");
    }).blur(
    function() {
        $(this).parent('div').removeClass("focus_inp");

    });

       $(window).scroll(function(){
                if($(this).scrollTop()>340){
                    
                    $(".fixed_menu").stop().animate({top: '0px'}, "fast");
                }
                else if ($(this).scrollTop()<340){
                    
                    $(".fixed_menu").stop().animate({top: '-59px'}, "fast");
                }
            });
        
      $('#nav-toggle').click(function() {
        $('#desktop-menu').css('width', '400px');
        $('#desktop-menu').addClass('border');
        $('#desktop-menu ul').css('display', 'block');

        return false;

    });

   
});