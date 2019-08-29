$('.banner-box-ctas').on('click', '#banner-video-play, #banner-video-play-mobile', function(e) {
    e.preventDefault();
    var target = e.target
    var videoId = $(target).attr('data-youtube');
    var overlay = $('.banner-overlay');
    var closeOverlay = $('#banner-overlay-close');

    overlay.fadeIn(function(){
        $(closeOverlay).focus();
        // add clicked link id to close button as data attribute to use in close button click handler
        $(closeOverlay).attr('data-targetId', $(target).attr('id'));
        // inject video with autoplay
        $('.banner-video-embed').append('<iframe id="vid-'+videoId+'" width="560" height="315" type="text/html" src="https://www.youtube.com/embed/'+videoId+'?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
    });
});
// handler for overlay close button
$('.banner-box').on('click keydown', '#banner-overlay-close', function(event) {
    // id of view video button clicked
    var returnFocusLink = $(this).attr('data-targetId');
    if (event.keyCode === undefined || event.keyCode == 13 || event.keyCode == 27) {
        // undefined for click, 13 for enter key, 27 for esc key
        event.preventDefault();
        $('.banner-overlay').fadeOut(function(){
            // delete video iframe to stop playing
            $('.banner-video-embed iframe').remove();
            $('#'+returnFocusLink).focus();
        });
    }
});
