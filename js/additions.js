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
        });
    });
});