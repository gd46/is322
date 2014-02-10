/* Normalized hide address bar for iOS & Android (c) Scott Jehl, scottjehl.com
 * MIT License */
(function(a){var b=a.document;if(!location.hash&&a.addEventListener){window.scrollTo(0,1);var c=1,d=function(){return a.pageYOffset||b.compatMode==="CSS1Compat"&&b.documentElement.scrollTop||b.body.scrollTop||0},e=setInterval(function(){if(b.body){clearInterval(e);c=d();a.scrollTo(0,c===1?0:1)}},15);a.addEventListener("load",function(){setTimeout(function(){if(d()<20){a.scrollTo(0,c===1?0:1)}},0)})}})(this);

/*! A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound
 * by @wilto.MIT License.*/
(function(m){var l=m.document;if(!l.querySelector){return}var n=l.querySelector("meta[name=viewport]"),a=n&&n.getAttribute("content"),k=a+",maximum-scale=1",d=a+",maximum-scale=10",g=true,j,i,h,c;if(!n){return}function f(){n.setAttribute("content",d);g=true}function b(){n.setAttribute("content",k);g=false}function e(o){c=o.accelerationIncludingGravity;j=Math.abs(c.x);i=Math.abs(c.y);h=Math.abs(c.z);if(!m.orientation&&(j>7||((h>6&&i<8||h<8&&i>6)&&j>5))){if(g){b()}}else{if(!g){f()}}}m.addEventListener("orientationchange",f,false);m.addEventListener("devicemotion",e,false)})(this); 
(funcion(window){
	var sw = document.body.clientWidth,
	sh = document.body.clientHeight,
	breakpoint = 650,
	speed = 800,
	mobile = true;

	$(document_.ready(function(){
		checkMobile();
		setNav();
		setImg();
	});
// Update dimensions on resize
$(window).resize(function()
	{ 
		sw = document.documentElement.clientWidth;
		sh = document.documentElement.clientHeight;
		checkMobile();
	});
		        
	//Check if Mobile
function checkMobile() 
	{
		 mobile = (sw > breakpoint) ? false : true;
		
		// If Not Mobile
		if (!mobile) 
			{
				//Show full navigation and search
			    $('[role="tabpanel"],#nav,#search').show(); 
			} else 
				{ 
					//Hide 
					if(!$('#nav-anchors a').hasClass('active')) 
						{
				        	$('#nav,#search').hide(); 
				        	//Hide full navigation and search
					    }
				}
	}

function buildGallery() 
{
	container.html('<div id="img-list"><ul /></div>');
	imgList = $('#img-list');
	nav.find('a:first').addClass('active');
		        
	//For Each Navigation Link
	nav.find('a').each(function() 
	{
		var $this = $(this);
		var href = $this.attr('href');
				          
		//Prepare list item with image source in data attribute
		arr += '<li data-imgsrc="'+href+'"></li>';
	});
						      
		//Append to #img-list
		imgList.find('ul').append(arr);
							        
		//Nav Thumbnail Click
		nav.on('click', 'a', function(e) 
		{
			var pos = $(this).parent().index();
			e.preventDefault();
			loadImg(pos);
			if(swipeEnabled) 
				{
					mySwipe.slide(index, 300);
				}
					updateNav(pos);
		});
}

Modernizr.load({
		  test: Modernizr.touch && Modernizr.csstransitions,
		    yep: 'js/swipe.js',
		      complete: function() {
		          if (Modernizr.touch && Modernizr.csstransitions) {
			        swipeEnabled = true;
				      buildSwipe();
				          }
					    }
					    });

					    //Build Swipe Carousel
					    function buildSwipe() {
					      //Initialize Swipe.js
					        w.mySwipe = new Swipe(document.getElementById('img-list'), {
						    callback: function(event, index, elem) {
						          updateNav(index);
							        loadImg(index + 1);
								    } 
								      });
								      }
								      
//Check if Mobile
		function checkMobile() {
		  if(sw > breakpoint) {
		      mobile = false; //Not Mobile
		        } else {
			    mobile = true; //Mobile
			      }
			        
				  if (!mobile) { //If Not Mobile
				      loadAux(); //Load auxiliary content
				        }
					}

					//Set up Auxiliary content
					function loadAux() {
					  var $aux = $('.aux');
					    $aux.each(function(index) {
					        var $this = $(this);
						    var auxLink = $this.find('a');
						        var auxFragment = auxLink.attr('href');
							    var auxContent = $this.find('[role=tabpanel]');
							        if (auxContent.size()===0 && $this.hasClass('loaded')===false) {
								      loadContent(auxFragment,$this);
								          }
									    });
									    }

									    function loadContent(src,container) { // Load Tab Content
									      container.addClass('loaded');
									        $('<div role="tabpanel" />').load(src +' #content > div',function() {
										    $(this).appendTo(container);
										      });
										      }
$('.aux header a').click(function() {
	var $this = $(this),
		thisHref = $this.attr('href'),
		tabParent = $(this).parents('section'),
		tabPanel = tabParent.find('[role=tabpanel]');
	if(mobile) 
		{
			if(tabPanel.size()===0)
				{
					loadContent(thisHref,tabParent);
					$this.addClass('open');
				}
			else
				{
					tabPanel.toggle();
					$this.toggleClass('open');
				}
		}
		return false;
	});


