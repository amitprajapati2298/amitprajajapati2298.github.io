// var DivtoAnimation = {
//     "hero-content":"animated bounceInLeft",
//     "hero-illustration-container":"animated bounceInRight",
//     "select":"animated bounceInUp",
//     "pay":"animated bounceInDown",
//     "deliver":"animated bounceInUp",
// };

// Object.keys(DivtoAnimation).forEach((classname,index)=>{
//     $('.'+classname).addClass(DivtoAnimation[classname]);
// });

    var win = jQuery(window);
	var slideUpMods = jQuery('.animate');
	console.log(slideUpMods);
	function IsElementVisible (element, partial)
	{
		var jQueryt           = jQuery(element),
			jQueryw       = jQuery(window),
			viewTop       = jQueryw.scrollTop(),
			viewBottom    = viewTop + jQueryw.height(),
			_top          = jQueryt.offset().top,
			_bottom       = _top + jQueryt.height(),
			compareTop    = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
    
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	}
	
	function runAnimations()
	{
		var isMobile = window.innerWidth < 768;		
		
		slideUpMods = jQuery('.animate');
		
  		slideUpMods.each(function(i, el) 
		{
			var el = jQuery(el);
			
			if (isMobile)
			{
				el.css('opacity', '1.0');
			}
			else
			{						
				if (IsElementVisible(el, false))
				{
					var classNames = el.attr("class").split(' ');
					
					for (var i = 0; i < classNames.length ; i++)
					{
						var clName = classNames[i];
						if (clName.startsWith('--'))
						{
							el.removeClass(clName);
							el.removeClass('animate');
							clName = clName.replace('--', '');
							el.addClass('animated'); 
							el.addClass(clName); 
						}
					};
				} 
			}
		})
	}
	
	runAnimations();

    win.scroll(function(event) 
	{  
		runAnimations();
  	});