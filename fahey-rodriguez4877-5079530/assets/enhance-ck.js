(function(e){function o(t){var r=i.width()/t.originalWidth,s=i.width(),o=t.originalWidth<s?t.originalHeight:~~(t.originalHeight*r);l();i.empty().height(o).append(t.tag);t.originalWidth>s&&e(n.activeImageId).width(s).height(o).hover(function(){e(this).addClass("zoomed").width(t.originalWidth).height(t.originalHeight);i.mousemove(function(r){var u=~~((r.pageX-i.offset().left)/s*100),a=~~((r.pageY-i.offset().top)/o*100),f=(t.originalWidth-s)*u/100,l=(t.originalHeight-o)*a/100;e(n.activeImageId).css("left",-f+"px").css("top",-l+"px")})},function(){e(this).removeClass("zoomed").width(s).height(o);i.unbind("mousemove")})}function u(e){var t=c(e);if(!t){var n=document.createElement("img");n.id="active-image";n.onload=function(){a(n,e)};n.src=e;f()}else o(t)}function a(e,n){var r={tag:e,url:n,originalWidth:e.width,originalHeight:e.height};t.push(r);o(r)}function f(){i.append(s);var e=i.width()/2-s.width()/2,t=i.height()/2-s.height()/2;s.css("top",t+"px").css("left",e+"px")}function l(){s.remove()}function c(e){for(var n=0;n<t.length;n++)if(t[n].url===e)return t[n];return!1}var t=[],n={thumbListId:"#thumbs",activeWrapperId:"#active-wrapper",activeImageId:"#active-image",loadingLabel:"Loading..."},r,i,s;e.fn.enhanceGallery=function(t){t&&e.extend(n,t);r=e(n.thumbListId);i=e(n.activeWrapperId);s=e('<div id="active-image-loading">'+n.loadingLabel+"</div>");u(r.find("a:first").attr("href"));r.find("a").click(function(e){u(this.href);e.preventDefault()});return this}})(jQuery);