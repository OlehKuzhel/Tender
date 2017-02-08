blur_p();
focus_p();


function blur_p() {$('input[type="text"]').blur(function() {if($(this).val().length < 2) {$(this).addClass('error-input');}});};
function focus_p() {$('input[type="text"]').focus(function() {$(this).removeClass('error-input');});};

    $('form').submit(function(e){
        this_f = $(this);
        blur_p();
        focus_p();
    e.preventDefault();
    var th = $(this);
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
                
                th.trigger("reset");
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
