// problems...
// element must be formatted like this:
// 		<div>
// 		text
// 		</div>
// requires a tab character '	' or it breaks weird
(function( $ ){

  $.fn.callout = function( options ) {  
	
	// Create some defaults (extend with provided options)
    var settings = $.extend( {
		'bgColor' 		: '#eef4f9',
		'borderColor'   : '#c5d9e8',
		'textColor'		: 'black',
		'font'			: 'tahoma'
    }, options);
	
	return this.each(function() {

		var $this = $(this);
		var value = $this.val();

		//$this.html($.trim($this.text() + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"));
		
		// add classes & append arrow elements
		$this.addClass("jqueryCallout").append('<b class="jqueryCallout_arrowBorder"></b><b class="jqueryCallout_arrow"></b>');
		
		// fix width
		var width = $this.width();
			if (width > 90) {
				$this.css("width",(width-40) + "px");
			} else {
				$this.css("width", "46px");
			}
		
		// apply options
		$($this).css({
		   'background-color' : settings.bgColor,
		   'border-color' : settings.borderColor,
		   'color' : settings.textColor,
		   'font-family' : settings.font,
		   'font-size' : '10pt',	// any bigger & it freaks out
		});
	
		$this.children(".jqueryCallout_arrow").css("border-top-color", settings.bgColor);
		$this.children(".jqueryCallout_arrowBorder").css("border-top-color", settings.borderColor);

    });

  };
})( jQuery );