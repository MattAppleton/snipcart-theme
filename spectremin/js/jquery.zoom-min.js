/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
!function(d){var e={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",// other options: grab, click, toggle
touch:!0,// enables a touch fallback
onZoomIn:!1,onZoomOut:!1,magnify:1};
// Core Zoom Logic, independent of event listeners.
d.zoom=function(o,t,e,n){var i,u,c,a,r,m,l,s=d(o),f=s.css("position"),h=d(t);
// The parent element needs positioning so that the zoomed element can be correctly positioned within.
return o.style.position=/(absolute|fixed)/.test(f)?f:"relative",o.style.overflow="hidden",e.style.width=e.style.height="",d(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*n,height:e.height*n,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(o),{init:function(){u=s.outerWidth(),i=s.outerHeight(),c=t===o?(a=u,i):(a=h.outerWidth(),h.outerHeight()),r=(e.width-u)/a,m=(e.height-i)/c,l=h.offset()},move:function(o){var t=o.pageX-l.left,n=o.pageY-l.top;n=Math.max(Math.min(n,c),0),t=Math.max(Math.min(t,a),0),e.style.left=t*-r+"px",e.style.top=n*-m+"px"}}},d.fn.zoom=function(n){return this.each(function(){var i=d.extend({},e,n||{}),
//target will display the zoomed image
u=i.target&&d(i.target)[0]||this,
//source will provide zoom location info (thumbnail)
o=this,c=d(o),a=document.createElement("img"),r=d(a),m="mousemove.zoom",l=!1,s=!1;
// If a url wasn't specified, look for an image element.
if(!i.url){var t=o.querySelector("img");if(t&&(i.url=t.getAttribute("data-src")||t.currentSrc||t.src),!i.url)return}c.one("zoom.destroy",function(o,t){c.off(".zoom"),u.style.position=o,u.style.overflow=t,a.onload=null,r.remove()}.bind(this,u.style.position,u.style.overflow)),a.onload=function(){function t(o){e.init(),e.move(o),
// Skip the fade-in for IE8 and lower since it chokes on fading-in
// and changing position based on mousemovement at the same time.
r.stop().fadeTo(d.support.opacity?i.duration:0,1,!!d.isFunction(i.onZoomIn)&&i.onZoomIn.call(a))}function n(){r.stop().fadeTo(i.duration,0,!!d.isFunction(i.onZoomOut)&&i.onZoomOut.call(a))}
// Mouse events
var e=d.zoom(u,o,a,i.magnify);"grab"===i.on?c.on("mousedown.zoom",function(o){1===o.which&&(d(document).one("mouseup.zoom",function(){n(),d(document).off(m,e.move)}),t(o),d(document).on(m,e.move),o.preventDefault())}):"click"===i.on?c.on("click.zoom",function(o){return l?
// bubble the event up to the document to trigger the unbind.
void 0:(l=!0,t(o),d(document).on(m,e.move),d(document).one("click.zoom",function(){n(),l=!1,d(document).off(m,e.move)}),!1)}):"toggle"===i.on?c.on("click.zoom",function(o){l?n():t(o),l=!l}):"mouseover"===i.on&&(e.init(),// Preemptively call init because IE7 will fire the mousemove handler before the hover handler.
c.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(m,e.move)),
// Touch fallback
i.touch&&c.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),e.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,n())}),d.isFunction(i.callback)&&i.callback.call(a)},a.setAttribute("role","presentation"),a.alt="",a.src=i.url})},d.fn.zoom.defaults=e}(window.jQuery);