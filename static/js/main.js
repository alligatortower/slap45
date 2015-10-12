$(document).ready(function(){
    try{
        Typekit.load();
    }catch(e){
    }
    finally {
        $(function () {
            var platform = navigator.platform.toLowerCase();
            if (platform.indexOf('windows') != -1 || platform.indexOf('linux') != -1 || platform.indexOf('win32') != -1) {
                $.srSmoothscroll();
            }
        });
        $($('section').get().reverse()).each(function(){
            var $bgobj = $(this); // assigning the object
            var origin = $bgobj.offset().top;

            $bgobj.data('origin', origin);
            $bgobj.css('position', 'absolute');
            $bgobj.css({ top:origin });
        });
    }

    $(window).scroll(function() {
        var yPos = $(window).scrollTop();
        var browserHeight = $(window).height();
        var card = false;
        var origin;
        $($('section').get().reverse()).each(function(){
            var that = $(this);
            origin = that.data('origin');
            if (yPos > origin) {
                card = that;
                return false;
            }
        });
        if (card !== false) {
            var cardHeight = card.height();
            var stopCheck = origin + (cardHeight - browserHeight);
            var fixHeight = yPos - (cardHeight - browserHeight);

            if (yPos > stopCheck){
                card.css({top: fixHeight});
            }
            else if (yPos <= 10) {
                $('section').first().css({top:0});
            }


        }
    })
        .resize(function() {
            //location.reload();
        });
});
