$(document).ready(function ($) {

  var scrollMenuIds = [];
  $(".scroll-menu li a").each(function() {
    scrollMenuIds.push($(this).data('target'));    
  });
  /***************canvas banner****************/
  if ($('#bannercanvas').length > 0) {

    let width, height;
    let pixels = [];
    let coloredPixels = [];
    let colors = ['#EA4E46', 'rgba(255, 255, 255, 0.1)', 'rgba(234, 78, 70, 0.2)', 'rgba(255, 255, 255, 0.1)'];
    let currentPixel = 0;
    let pixelSquare = 45;
    if (window.matchMedia('screen and (max-width: 1000px)').matches) {
      pixelSquare = 36;
    } else if (window.matchMedia('screen and (max-width: 480px)').matches) {
      pixelSquare = 20;
    }

    const mousePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const canvas = document.getElementById('bannercanvas');
    const ctx = canvas.getContext('2d');

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);

      for (var i = 0, l = pixels.length; i < l; i++) {
        pixels[i][4] = 0;
      }

      for (var i = 0, l = coloredPixels.length; i < l; i++) {
        var pix = Math.floor(coloredPixels[i].y / pixelSquare) * (Math.floor(width / pixelSquare) + 1) + Math.floor(coloredPixels[i].x / pixelSquare);
        if (pixels[pix]) {
          pixels[pix][4] = coloredPixels[i].color;
          pixels[pix][5] = coloredPixels[i].alpha;
        }

        if (coloredPixels[i].alpha > 0) coloredPixels[i].alpha -= 0.008;
        if (coloredPixels[i].alpha < 0) coloredPixels[i].alpha = 0;
        coloredPixels[i].x += coloredPixels[i].vx;
        coloredPixels[i].y += coloredPixels[i].vy;
      }

      for (var i = 0, l = pixels.length; i < l; i++) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#040240';
        ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
        ctx.globalAlpha = pixels[i][5];
        ctx.fillStyle = pixels[i][4];
        ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
      }
    };

    const resize = () => {
      pixelSquare = 45;
      if (window.matchMedia('screen and (max-width: 1000px)').matches) {
        pixelSquare = 36;
      } else if (window.matchMedia('screen and (max-width: 480px)').matches) {
        pixelSquare = 20;
      }
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      pixels = [];
      for (var y = 0; y < height / pixelSquare; y++) {
        for (var x = 0; x < width / pixelSquare; x++) {
          pixels.push([x * pixelSquare, y * pixelSquare, pixelSquare, pixelSquare, '#040240', 1]);
        }
      }
    };

    const draw = () => {
      launchPixel();
      launchPixel();
      drawGrid();
      requestAnimationFrame(draw);
    };

    const initColoredPixels = () => {
      for (var i = 0; i < 300; i++) {
        coloredPixels.push({
          x: width / 2,
          y: height / 2,
          alpha: 0,
          color: colors[i % 5],
          vx: -1 + Math.random() * 2,
          vy: -1 + Math.random() * 2
        });

      }
    };

    const launchPixel = () => {
      coloredPixels[currentPixel].x = mousePosition.x;
      coloredPixels[currentPixel].y = mousePosition.y;
      coloredPixels[currentPixel].alpha = 1;

      currentPixel++;
      if (currentPixel > 299) currentPixel = 0;
    };

    resize();
    initColoredPixels();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', function (e) {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    });

    const touchMove = e => {
      //e.preventDefault();
      mousePosition.x = e.touches[0].pageX;
      mousePosition.y = e.touches[0].pageY;
    };

    document.addEventListener('touchstart', touchMove);
    document.addEventListener('touchmove', touchMove);
  }

  /***************sticky contact****************/
  // cache the element
  if ($('.contactline').length > 0) {
    var $navBar = $('.contactline');
    // find original navigation bar position
    var navPos = $navBar.offset().top;
    // on scroll
    $(window).scroll(function () {
      // get scroll position from top of the page
      var scrollPos = $(this).scrollTop();

      // check if scroll position is >= the nav position
      if (scrollPos >= navPos) {
        $navBar.addClass('fixed');
      } else {
        $navBar.removeClass('fixed');
      }
    });
  }

  /***************accordiantab****************/
  $('.collapse').on('shown.bs.collapse', function (e) {
    offSetHeight = 65;
    if (window.matchMedia('screen and (max-width: 767px)').matches) {
      offSetHeight = 40;
    }
    var $card = $(this).closest('.card');
    $(this).parent().addClass('active');
    $('html,body').animate({
      scrollTop: $card.offset().top - offSetHeight
    }, 500);
  });

  $('.collapse').on('hidden.bs.collapse', function (e) {
    $(this).parent().removeClass('active');
  });

  /***************testimonial_slider****************/
  var swiper = new Swiper(".testimonialslider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2.1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1.8,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3.4,
        spaceBetween: 15,
        observer: true,
        observeParents: true
      },
    },
  });

  $('.scroll-menu li a').on('click', function () {
    $('.scroll-menu li.active').removeClass('active');
    let menuItem = $(this).data('menu-item');
    if (menuItem) {
      $('.scroll-menu li a[data-menu-item="' + menuItem + '"]').parent('li').addClass('active');
    }
  });

  // Select scroll links with hashes
  $(".home .scroll-menu li a[href^='#'], .home .contactline_left a[href^='#']")
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        var isAccordion = false;
        if ($(this).hasClass('accordion-scroll'))
          isAccordion = true;
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          showTarget(target, isAccordion);
        }
      }
    });

  $('.innerpage .section-scroll').on('click', function (e) {
    e.preventDefault();
    localStorage.setItem('sectionScroll', $(this).data('target'));
    window.location.href = up2date_general.siteUrl;
  });

  $('.innerpage .accordion-scroll').on('click', function (e) {
    e.preventDefault();
    localStorage.setItem('accordionScroll', $(this).data('target'));
    window.location.href = up2date_general.siteUrl;
  });

  var sectionScroll = localStorage.getItem('sectionScroll');
  localStorage.removeItem('sectionScroll');

  var accordionScroll = localStorage.getItem('accordionScroll');
  localStorage.removeItem('accordionScroll');

  if (sectionScroll) {
    showTarget($(sectionScroll));
    if ( $('#'+sectionScroll).length > 0 ) {
      $('.scroll-menu li a[href="' + sectionScroll + '"]').parent('li').addClass('active');
    }
  } else if (accordionScroll) {
    showTarget($(accordionScroll), true);
    if ( $(accordionScroll).length > 0 ) {
      $('.scroll-menu li a[href="' + accordionScroll + '"]').parent('li').addClass('active');
    }
  }

  $('#service-accordion .card-header a').on('click',function (e) {
    let accWrapper = $(this).parent().attr('id');
    $('.scroll-menu li.active').removeClass('active');
    if( !($(this).parent().parent().hasClass('active')) ){
      if ($.inArray("#"+accWrapper, scrollMenuIds) !== -1) {
        $('.scroll-menu li a[data-target="#' + accWrapper + '"]').parent().addClass('active');
      }
    }
  });

  if ($('#your-message').length > 0) {
    $('#your-message').autoResize();
  }
});

function showTarget(target, isAccordion) {
  if (typeof isAccordion == 'undefined' || isAccordion == null) {
    isAccordion = false;
  }
  if (target) {
    offSetHeight = 65;
    if (window.matchMedia('screen and (max-width: 767px)').matches) {
      offSetHeight = 40;
    }
    if (!($('.contactline').hasClass('fixed'))) {
      offSetHeight = offSetHeight + $('.contactline').height();
    }
    var $target = $(target);
    $('html, body').animate({
      scrollTop: $target.offset().top - offSetHeight
    }, 1800, function () {
      // Callback after animation
      // Must change focus!
      $target.focus();
      if ($target.is(":focus")) { // Checking if the target was focused
        return false;
      } else {
        $target.attr('tabindex', '-1');
        $target.focus();
      }
    }).promise().then(function () {
      if (isAccordion) {
        $(target).next().collapse('show');
      }
    });
  }
  return false;
}

$.fn.autoResize = function(){
  let r = e => {
    e.style.height = '';
    e.style.height = e.scrollHeight + 'px'
  };
  return this.each((i,e) => {
    e.style.overflow = 'hidden';
    r(e);
    $(e).bind('input', e => {
      r(e.target);
    })
  })
};