$('.banner-box-ctas').on('click', '#banner-video-play, #banner-video-play-mobile', function(e) {
        e.preventDefault();
        var target = e.target
        var videoId = $(target).attr('data-youtube');
        var overlay = $('#vid-' + videoId);
        var closeOverlay = $('#banner-overlay-close');

        closeOverlay.on('click keydown', function(event) {
            if (event.keyCode === undefined || event.keyCode == 13 || event.keyCode == 27) {
                event.preventDefault();
                overlay.fadeOut(function(){
                    target.focus();
                });
            }
        })

        overlay.fadeIn();
        $(closeOverlay).focus();
});
