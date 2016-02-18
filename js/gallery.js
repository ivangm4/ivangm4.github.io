$(document).ready(function(){
	$(".image").mouseenter(function() {
		$(".galleryTitle", this).stop().animate({ top:'0px' }, 300);
	});
	$(".image").mouseleave(function() {
		$(".galleryTitle", this).stop().animate({ top:'240px' }, 300);
	});

	$(".image").click(function() {
		$(".galleryTitle", this).animate({ top:'240px' }, 0);
		var image = $("img", this).attr("src");
		var title = $("img", this).attr("title");

		$(".container").append('<div class="window"></div>');
		$(".container").append('<div class="description"><div class="bigTitle">' + title + '</div><img class="bigImage" src="'+ image +'"/></div>');
		$(".container").append('<img class="closeWindow" src="img/close.png"/>');
		$(".container").append('<img class="expandWindow" src="img/expand.png"/>');

		$(".expandWindow").click(function() {
	    	$(".expandWindow").remove();
			$(".description").animate({
				position : "absolute",
				top : 0,
				left: 0,
	    		width: "100%",
	    		height: "100%"
	    	}, 200, function() {
	    		$(".bigImage").animate({
	    			position : "absolute",
					top : 0,
					left: 0,
	    			width: "100%",
	    			height: "100%"
	    		});
		    	$(".bigTitle").animate({
	    			position : "absolute",
					top : "90%",
					left: 0,
	    			width: "100%",
	    			height: "10%",
	    			opacity : 0.4,
	    			"font-size" : "24px",
	    			"line-height" : "80px"
	    		});
	    		$(".closeWindow").animate({
	    			position : "absolute",
	    			"z-index" : 10,
	    			height : "60px",
	    			width : "60px",
					top : "1%",
					left: "95%",
					opacity : 0.4
	    		});
	    	});
		});

		$(".closeWindow").click(function() {
			$(".window").remove();
			$(".closeWindow").remove();
			$(".expandWindow").remove();
			$(".description").remove();
			$(".bigTitle").remove();
			$(".bigImage").remove();
		});
	});
});