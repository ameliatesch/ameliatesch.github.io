var speed = 'slow';

$('html, body').hide();
$('html, body').css({visibility:''});

$(document).ready(function() {
    $('html, body').fadeIn(speed, function() {
        $('a[href], button[href]').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0 || url.indexOf('mailto:') == 0) return;
            event.preventDefault(); 
            $('html, body').fadeOut(speed, function() {
                window.location = url;
            });
            $('html, body').show();
        });
    });

    fixHeaderMargin();

    
});

$(window).resize(function() {
    fixHeaderMargin();

});

function fixHeaderMargin() {
    if($(window).width() <= 500) {

        var indent = -0.6 - (500 - $(window).width())*0.0055

        $('.hebheaderfix').css({"text-indent": indent + 'em', "margin-left":'0em'});
    } else {
        $('.hebheaderfix').css({"text-indent":'0em', "margin-left":'0em'});
    }
}
