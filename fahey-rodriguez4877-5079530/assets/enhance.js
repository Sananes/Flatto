/**
 * @see https://github.com/benwatts/enhance-gallery/
 */
 
(function($) {

  var cache = [];
  var settings = { 
        thumbListId : '#thumbs',
        activeWrapperId : '#active-wrapper',
        activeImageId : '#active-image',
        loadingLabel: 'Loading...'
      };
  var $thumbList, $activeWrapper, $loading;


  $.fn.enhanceGallery = function(options){

    if( options ){
      $.extend(settings, options);
    }
      $thumbList = $(settings.thumbListId);
    if( $thumbList.length > 0 ){
      $thumbList = $(settings.thumbListId);
      $activeWrapper = $(settings.activeWrapperId);
      $loading = $('<div id="active-image-loading">'+settings.loadingLabel+'</div>');
      $thumbListLink = $thumbList.find('a');
      preloadImage( $thumbList.find('a:first').attr('href')); // preload 1st image

      $thumbList.find('a').click( function(e){
        preloadImage( this.href );
        e.preventDefault();
      });
     /* $thumbList.find('a').click( function(e){
        preloadImage( this.href );
        e.preventDefault();
      }); */
    }

    return this;

  };


  function swap(image){
    var scale = $activeWrapper.width() / image.originalWidth,
        wrapperWidth  = $activeWrapper.width(),
        wrapperHeight = (image.originalWidth < wrapperWidth) ? image.originalHeight : ~~(image.originalHeight * scale);

    hideSpinner();

    // empty container, change container's width, append the <img>
    $activeWrapper.find('a').empty().height(wrapperHeight).append(image.tag);

  }


  function preloadImage(url){
    var image = getCachedImage(url);
    if( image === false ){
      var cacheImage = document.createElement('img');
      cacheImage.id = 'active-image';
      cacheImage.onload = function(){
        imageLoaded(cacheImage, url);
      };
      cacheImage.src = url;
      showSpinner();
    } else {
      swap(image);
    }
  }


  function imageLoaded(img, url){
    var image = { 
      tag: img, 
      url: url, 
      originalWidth: img.width, 
      originalHeight: img.height 
    };
    cache.push(image);
    swap(image);
  }


  function showSpinner(){
    $activeWrapper.append($loading);
    var fromLeft = $activeWrapper.width()/2 - $loading.width()/2;
    var fromTop = $activeWrapper.height()/2 - $loading.height()/2;
    $loading.css('top', fromTop+'px').css('left', fromLeft +'px');
  }

  function hideSpinner(){
    $loading.remove();
  }


  function getCachedImage(url){
    for(var i=0; i < cache.length; i++ ){
      if( cache[i].url === url ){
        console.log('FOUND THE CACHED IMAGE')
        return cache[i];
      }
    }
    return false;
  }


})(jQuery);