$('.banner-box-ctas').on('click', '#banner-video-play, #banner-video-play-mobile', function(e) {
    e.preventDefault();
    var target = e.target
    var videoId = $(target).attr('data-youtube');
    var overlay = $('.banner-overlay');
    var closeOverlay = $('#banner-overlay-close');

    // handler for overlay close button
    closeOverlay.on('click keydown', function(event) {
        if (event.keyCode === undefined || event.keyCode == 13 || event.keyCode == 27) {
            // undefined for click, 13 for enter key, 27 for esc key
            event.preventDefault();
            overlay.fadeOut(function(){
                // delete video iframe to stop playing
                $('#vid-'+videoId+'').remove();
                target.focus();
            });
        }
    });
    // close overlay on overlay click
    overlay.on('click', function(event) {
        closeOverlay.trigger( "click" );
    });

    overlay.fadeIn(function(){
        $(closeOverlay).focus();
        // inject video with autoplay
        $('.banner-video-embed').append('<iframe id="vid-'+videoId+'" class="youtube-video" width="560" height="315" type="text/html" src="https://www.youtube.com/embed/'+videoId+'?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
    });
});
