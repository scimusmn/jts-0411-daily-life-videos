$(document).ready( function(){


	function initialize() {

		//Set up language toggle
    	$( ".video-button" ).on( "click", function(){

    		//Launch fullscreen video player
    		var src = $(this).attr('data-video-src');
    		showFullscreenVideo(src);

    	});

    	//Position buttons in grid
    	var l=0;
    	var t=0;
    	$("#selection_screen").children('div').each(function(index) {

    		$(this).css('left', l);
    		$(this).css('top', t);

    		l += 635;

    		if ( (index+1) % 3 == 0){
    			t+=357;
    			l=0;
    		}

    	});


	}

	function setupVideoPlayer(){
		//Create video tag
        var videoTag = '<video id="screensaver_video" style="position:fixed; top:0px; left:0px; z-index:999;" class="video-js vjs-default-skin vjs-big-play-centered"><source src="'+videoSrc+'" type="video/mp4" /></video>';
        var videoOptions = { "controls": false, "autoplay": false, "loop": "true", "preload": "auto" };

        //Append to html
        $('body').append( videoTag );

        //Initialize player
        this.videoPlayer = videojs("screensaver_video", videoOptions, function() {
            // Player (this) is initialized and ready.
        });
	}

	function showFullscreenVideo(src) {

		console.log('showFullscreenVideo ',src);



	}

	initialize();

});


