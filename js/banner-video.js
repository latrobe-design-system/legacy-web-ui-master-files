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
                    // stop the video
                    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                    target.focus();
                });
            }
        })

        overlay.fadeIn(function(){
            $(closeOverlay).focus();
            //play video
            $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            });
        );    
});
