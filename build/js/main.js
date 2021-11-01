"use strict";

if ($('.tabs .active').length > 0) {
  $('.tabs .bar').animate({
    left: $('.tabs .active').offset().left - $('.container').offset().left,
    width: $('.tabs .active').outerWidth()
  });
}

$('body').on('mouseenter', '.tabs a', function (e) {
  $('.tabs .bar').animate({
    left: $(e.currentTarget).offset().left - $('.container').offset().left,
    width: $(e.currentTarget).outerWidth()
  });
});
$('body').on('mouseleave', '.tabs', function (e) {
  if ($('.tabs .active').length > 0) {
    $('.tabs .bar').animate({
      left: $('.tabs .active').offset().left - $('.container').offset().left,
      width: $('.tabs .active').outerWidth()
    });
  } else {
    $('.tabs .bar').animate({
      left: 0,
      width: 0
    });
  }
});
$('body').on('click', '.tabs a', function (e) {
  $('.tabs a').removeClass('active');
  $(e.currentTarget).addClass('active');
  $('.tab').removeClass('active');
  $(".tab[data-tab=\"".concat($(e.currentTarget).attr('data-tab'), "\"]")).addClass('active');
  $('.tabs .bar').animate({
    left: $(e.currentTarget).offset().left - $('.container').offset().left,
    width: $(e.currentTarget).outerWidth()
  });
});
var productNav = new Swiper('.product__nav .swiper', {
  spaceBetween: 10,
  slidesPerView: 2.5,
  watchSlidesProgress: true,
  breakpoints: {
    375: {
      spaceBetween: 10,
      slidesPerView: 3.5
    },
    768: {
      direction: 'vertical',
      spaceBetween: 17,
      slidesPerView: 4
    }
  }
});
var productMain = new Swiper('.product__main', {
  spaceBetween: 10,
  thumbs: {
    swiper: productNav
  },
  navigation: {
    nextEl: '.product__nav .swiper-button-next',
    prevEl: '.product__nav .swiper-button-prev'
  }
});
var main = new Swiper('.main .swiper', {
  loop: true,
  speed: 500,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.main .swiper-button-next',
    prevEl: '.main .swiper-button-prev'
  },
  pagination: {
    el: ".main .swiper-pagination"
  }
});
var slider1 = new Swiper('.catalog .slider1 .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 25,
  navigation: {
    nextEl: '.slider1 .swiper-button-next',
    prevEl: '.slider1 .swiper-button-prev'
  },
  breakpoints: {
    375: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 3.3
    },
    1024: {
      slidesPerView: 4.3
    },
    1280: {
      slidesPerView: 5
    }
  }
});
var slider2 = new Swiper('.catalog .slider2 .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 25,
  navigation: {
    nextEl: '.slider2 .swiper-button-next',
    prevEl: '.slider2 .swiper-button-prev'
  },
  breakpoints: {
    375: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 3.3
    },
    1024: {
      slidesPerView: 4.3
    },
    1280: {
      slidesPerView: 5
    }
  }
});
var slider3 = new Swiper('.catalog .slider3 .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 25,
  navigation: {
    nextEl: '.slider3 .swiper-button-next',
    prevEl: '.slider3 .swiper-button-prev'
  },
  breakpoints: {
    375: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 3.3
    },
    1024: {
      slidesPerView: 4.3
    },
    1280: {
      slidesPerView: 5
    }
  }
});
var stock = new Swiper('.stock .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.stock .swiper-button-next',
    prevEl: '.stock .swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 1.3
    },
    1024: {
      slidesPerGroup: 2,
      slidesPerView: 2.1
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 80
    }
  }
});
var reviewsThree = new Swiper('.reviews.three .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.reviews.three .swiper-button-next',
    prevEl: '.reviews.three .swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 1.8
    },
    1024: {
      slidesPerView: 2.8
    },
    1280: {
      slidesPerView: 3
    }
  }
});
var reviewsTwo = new Swiper('.reviews.two .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.reviews.two .swiper-button-next',
    prevEl: '.reviews.two .swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 1.8,
      spaceBetween: 40
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 84
    }
  }
});
var platform = new Swiper('.platform .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.platform .swiper-button-next',
    prevEl: '.platform .swiper-button-prev'
  },
  breakpoints: {
    375: {
      slidesPerView: 1.3
    },
    768: {
      slidesPerView: 2.8
    },
    1024: {
      slidesPerView: 3.8
    },
    1280: {
      slidesPerView: 4
    }
  }
});
var brands = new Swiper('.brands .swiper', {
  loop: true,
  slidesPerView: 1.5,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.brands .swiper-button-next',
    prevEl: '.brands .swiper-button-prev'
  },
  breakpoints: {
    375: {
      slidesPerView: 2.1
    },
    768: {
      slidesPerView: 3.5
    },
    1024: {
      slidesPerView: 4.5
    },
    1280: {
      slidesPerView: 5
    }
  }
});
var journal = new Swiper('.journal .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.journal .swiper-button-next',
    prevEl: '.journal .swiper-button-prev'
  },
  breakpoints: {
    375: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 2.5
    },
    1280: {
      slidesPerView: 3
    }
  }
});
var certThree = new Swiper('.cert.three .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.cert.three .swiper-button-next',
    prevEl: '.cert.three .swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 1.8
    },
    1024: {
      slidesPerView: 2.8
    },
    1280: {
      slidesPerView: 3
    }
  }
});
var certFour = new Swiper('.cert.four .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.cert.four .swiper-button-next',
    prevEl: '.cert.four .swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2.3
    },
    1024: {
      slidesPerView: 3.3
    },
    1280: {
      slidesPerView: 4
    }
  }
});
var command = new Swiper('.command .swiper:not(.center)', {
  loop: true,
  slidesPerView: 'auto',
  freeMode: true,
  // speed: 3000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.command .swiper-button-next',
    prevEl: '.command .swiper-button-prev'
  }
});
var commandCenter = new Swiper('.command .swiper.center', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.command .swiper-button-next',
    prevEl: '.command .swiper-button-prev'
  }
});
var popular1 = new Swiper('.popular.block1 .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.popular.block1 .swiper-button-next',
    prevEl: '.popular.block1 .swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2
    },
    1024: {
      slidesPerView: 3.2
    },
    1280: {
      slidesPerView: 4
    }
  }
});
var popular2 = new Swiper('.popular.block2 .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.popular.block2 .swiper-button-next',
    prevEl: '.popular.block2 .swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2
    },
    1024: {
      slidesPerView: 3.2
    },
    1280: {
      slidesPerView: 4
    }
  }
});
var popular3 = new Swiper('.popular.block3 .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.popular.block3 .swiper-button-next',
    prevEl: '.popular.block3 .swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2
    },
    1024: {
      slidesPerView: 3.2
    },
    1280: {
      slidesPerView: 4
    }
  }
});
var youtube = new Swiper('.youtube .swiper', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.youtube .swiper-button-next',
    prevEl: '.youtube .swiper-button-prev'
  },
  breakpoints: {
    375: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 3.5
    },
    1280: {
      slidesPerView: 4
    }
  }
});

var someHeight = function someHeight(selector, element) {
  for (var i = 0; i < $(selector).length; i++) {
    var $step = $(selector).eq(i);
    var stepHeight = 0;

    for (var j = 0; j < $step.find(element).length; j++) {
      if ($step.find(element).eq(j).height() > stepHeight) {
        stepHeight = $step.find(element).eq(j).height();
      }
    }

    $step.find(element).height(stepHeight);
  }
};

someHeight('.popular', '.item__title');
someHeight('.reviews', '.reviews__title');
someHeight('.reviews', '.reviews__text');
someHeight('.journal', '.journal__title');
var titleHeight = 0;
var items = [];
var o = 3;

if ($(window).width() < 1280) {
  o = 2;
}

if ($(window).width() >= 768) {
  for (var i = 1; i < $('.catalog .item').length + 1; i++) {
    var $step = $('.catalog .item').eq(i - 1);

    if (i !== 0 && i % o === 0) {
      if ($step.find('.item__title').height() > titleHeight) {
        titleHeight = $step.find('.item__title').height();
      }

      items.push(i - 1);

      for (var j = 0; j < items.length; j++) {
        $('.catalog .item').eq(items[j]).find('.item__title').height(titleHeight);
      }

      items = [];
      titleHeight = 0;
    } else {
      items.push(i - 1);

      if ($step.find('.item__title').height() > titleHeight) {
        titleHeight = $step.find('.item__title').height();
      }
    }
  }
}

$('body').on('mouseenter', '.rating g', function (e) {
  $(e.currentTarget).closest('.rating').find('g').removeClass('active');

  for (var _i = 1; _i <= $(e.currentTarget).attr('data-star'); _i++) {
    $(e.currentTarget).closest('.rating').find("g[data-star=\"".concat(_i, "\"]")).addClass('active');
  }
});
$('body').on('click', '.rating g', function (e) {
  $(e.currentTarget).closest('.rating').attr('data-count', $(e.currentTarget).attr('data-star'));
  $(e.currentTarget).closest('.rating').find('g').removeClass('active');

  for (var _i2 = 1; _i2 <= $(e.currentTarget).attr('data-star'); _i2++) {
    $(e.currentTarget).closest('.rating').find("g[data-star=\"".concat(_i2, "\"]")).addClass('active');
  }
});
$('body').on('mouseleave', '.rating', function (e) {
  $(e.currentTarget).find('g').removeClass('active');

  for (var _i3 = 1; _i3 <= $(e.currentTarget).attr('data-count'); _i3++) {
    $(e.currentTarget).find("g[data-star=\"".concat(_i3, "\"]")).addClass('active');
  }
});
$('body').on('click', '.popular__controls a', function (e) {
  $(e.currentTarget).toggleClass('active');
});
$('body').on('click', '.counter__plus', function (e) {
  $(e.currentTarget).parent().find('.counter__num').text(parseInt($(e.currentTarget).parent().find('.counter__num').text()) + 1);
});
$('body').on('click', '.counter__minus', function (e) {
  if (parseInt($(e.currentTarget).parent().find('.counter__num').text()) > 1) {
    $(e.currentTarget).parent().find('.counter__num').text(parseInt($(e.currentTarget).parent().find('.counter__num').text()) - 1);
  }
});
$('body').on('click', '.item .add-cart', function (e) {
  $(e.currentTarget).hide();
  $(e.currentTarget).parent().find('.item__add').addClass('active');
  $('.add').addClass('active');
});
$('body').on('click', '.item__add.active .btn-green', function (e) {
  $(e.currentTarget).closest('.item').find('.item__add').removeClass('active');
  $(e.currentTarget).closest('.item').find('.add-cart').show();
  $('.add').removeClass('active');
});
$('body').on('click', '.add__close', function (e) {
  $('.add').removeClass('active');
}); //yandex map page

if ($('#yandex').length > 0) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('yandex', {
      center: [55.751574, 37.573856],
      zoom: 9,
      controls: ['fullscreenControl']
    }, {
      searchControlProvider: 'yandex#search'
    }),
        myPlacemark = new ymaps.Placemark([55.777321, 37.536976], {
      balloonContentBody: "\n                        <div class=\"map__info\">\n                            <div class=\"map__item\">\n                                <img src=\"img/icons/phone.svg\" alt=\"\">\n                                <div class=\"map__text bold\">\n                                    <a href=\"tel:+74952151778\">+7 (495) 215-17-78</a>\n                                    <a href=\"tel:88005550874\">8 (800) 555-08-74</a>\n                                </div>\n                            </div>\n                            <div class=\"map__item\">\n                                <img src=\"img/icons/marker.svg\" alt=\"\">\n                                <div class=\"map__text\">\n                                    \u041C\u043E\u0441\u043A\u0432\u0430, \u0420\u044F\u0437\u0430\u043D\u0441\u043A\u0438\u0439 \u043F\u0440-\u0442, <br>\n                                    2 \u043A\u043E\u0440\u043F\u0443\u0441, 3, \u0422\u041A \xAB\u0413\u043E\u0440\u043E\u0434\xBB\n                                </div>\n                            </div>\n                            <div class=\"map__item\">\n                                <img src=\"img/icons/mail.svg\" alt=\"\">\n                                <div class=\"map__text\">\n                                    <a href=\"mailto:info@stroybazar.ru\">info@stroybazar.ru</a>\n                                </div>\n                            </div>\n                            <div class=\"map__item\">\n                                <img src=\"img/icons/time.svg\" alt=\"\">\n                                <div class=\"map__text\">\n                                    \u043F\u043D-\u0432\u0441 10:00 \u2013 20:00\n                                </div>\n                            </div>\n                            <div class=\"map__item\">\n                                <div class=\"map__dot\"></div>\n                                <div class=\"map__text\">\n                                    \u043C. \u041D\u0438\u0436\u0435\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F\n                                </div>\n                            </div>\n\n                            <a href=\"javascript:void(0)\" class=\"map__more\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n                        </div>\n                    "
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/point.svg',
      iconImageSize: [40, 44],
      iconImageOffset: [-20, -22] // hideIconOnBalloonOpen: false,

    }),
        myPlacemark2 = new ymaps.Placemark([55.684758, 37.738521], {
      balloonContentBody: "\n                        <div class=\"map__info\">\n                            <div class=\"map__item\">\n                                <img src=\"img/icons/phone.svg\" alt=\"\">\n                                <div class=\"map__text bold\">\n                                    <a href=\"tel:+74952151778\">+7 (495) 215-17-78</a>\n                                    <a href=\"tel:88005550874\">8 (800) 555-08-74</a>\n                                </div>\n                            </div>\n                            <div class=\"map__item\">\n                                <img src=\"img/icons/marker.svg\" alt=\"\">\n                                <div class=\"map__text\">\n                                    \u041C\u043E\u0441\u043A\u0432\u0430, \u0420\u044F\u0437\u0430\u043D\u0441\u043A\u0438\u0439 \u043F\u0440-\u0442, <br>\n                                    2 \u043A\u043E\u0440\u043F\u0443\u0441, 3, \u0422\u041A \xAB\u0413\u043E\u0440\u043E\u0434\xBB\n                                </div>\n                            </div>\n                            <div class=\"map__item\">\n                                <img src=\"img/icons/mail.svg\" alt=\"\">\n                                <div class=\"map__text\">\n                                    <a href=\"mailto:info@stroybazar.ru\">info@stroybazar.ru</a>\n                                </div>\n                            </div>\n                            <div class=\"map__item\">\n                                <img src=\"img/icons/time.svg\" alt=\"\">\n                                <div class=\"map__text\">\n                                    \u043F\u043D-\u0432\u0441 10:00 \u2013 20:00\n                                </div>\n                            </div>\n                            <div class=\"map__item\">\n                                <div class=\"map__dot\"></div>\n                                <div class=\"map__text\">\n                                    \u043C. \u041D\u0438\u0436\u0435\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F\n                                </div>\n                            </div>\n\n                            <a href=\"javascript:void(0)\" class=\"map__more\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n                        </div>\n                    "
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/point.svg',
      iconImageSize: [40, 44],
      iconImageOffset: [-20, -22] // hideIconOnBalloonOpen: false,

    });
    myMap.events.add('click', function (e) {
      return e.get('target').balloon.close();
    });
    myMap.geoObjects.add(myPlacemark).add(myPlacemark2);
  });
}

$('body').on('click', '.question', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).next().slideToggle(300);
});
$('body').on('click', '.item__controls a', function (e) {
  $(e.currentTarget).toggleClass('active');
});

if ($(window).width() >= 1280) {
  $('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 63);
}

if ($(window).width() >= 1279) {
  $('.command__info').css('left', $('.container').offset().left);
}

$('body').on('click', '.scrolltop', function (e) {
  $('html, body').stop().animate({
    scrollTop: 0
  }, 500, 'swing');
});
$('body').on('click', '.sidebar__toggle', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).next().slideToggle(300);
});
$('body').on('click', '.sidebar__more:not(.active)', function (e) {
  $(e.currentTarget).prev().slideToggle(300);
  $(e.currentTarget).toggleClass('active').text('Свернуть');
});
$('body').on('click', '.product__toggle', function (e) {
  $(e.currentTarget).prev().slideToggle(300);
  $(e.currentTarget).remove();
});
$('body').on('click', '.sidebar__more.active', function (e) {
  $(e.currentTarget).prev().slideToggle(300);
  $(e.currentTarget).toggleClass('active').text('Показать еще 6');
});
$('body').on('click', '.tags__item', function (e) {
  $(e.currentTarget).toggleClass('active');
});
$('body').on('click', '.sort__item', function (e) {
  $(e.currentTarget).toggleClass('active');
});

if ($('#price-slider').length > 0) {
  var priceSlider = document.getElementById('price-slider');
  var input0 = document.getElementById('from');
  var input1 = document.getElementById('to');
  var inputs = [input0, input1];
  noUiSlider.create(priceSlider, {
    start: [1000, 500000],
    connect: true,
    range: {
      min: 0,
      max: 700000
    },
    format: wNumb({
      thousand: ' ',
      decimals: 0
    })
  });
  priceSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });
}

$('body').on('click', '.reviews__more:not(.active)', function (e) {
  $(e.currentTarget).next().slideToggle(300);
  $(e.currentTarget).toggleClass('active').text('Скрыть ответ');
});
$('body').on('click', '.reviews__more.active', function (e) {
  $(e.currentTarget).next().slideToggle(300);
  $(e.currentTarget).toggleClass('active').text('Показать ответ');
});
$('body').on('click', '.faq__toggle', function (e) {
  $(e.currentTarget).closest('.faq__item').find('.faq__form').slideToggle(300);
  $(e.currentTarget).toggleClass('active');
});
$('body').on('click', '.faq__show:not(.active)', function (e) {
  $(e.currentTarget).closest('.faq__item').find('.faq__dropdown').slideToggle(300);
  $(e.currentTarget).toggleClass('active').text('Скрыть ответы (2)');
});
$('body').on('click', '.faq__show.active', function (e) {
  $(e.currentTarget).closest('.faq__item').find('.faq__dropdown').slideToggle(300);
  $(e.currentTarget).toggleClass('active').text('Смотреть ответы (2)');
});
$('body').on('click', '.delivery__current', function (e) {
  $(e.currentTarget).parent().find('.delivery__dropdown').toggleClass('active');
  $(e.currentTarget).toggleClass('active');
});
$('body').on('click', '.company__item', function (e) {
  console.log($(e.currentTarget).find('input').is('checked'));

  if ($(e.currentTarget).find('input').is(':checked')) {
    $('.company__item').removeClass('active');
    $(e.currentTarget).addClass('active');
  } else {
    $(e.currentTarget).removeClass('active');
  }
});

if ($('.order__sidebar').length > 0 && $(window).width() >= 1024) {
  var sticky = new Sticky('.order__sidebar', {
    marginTop: 0
  });
}

if (!$('.order__sidebar').length > 0) {
  var header = new Sticky('.header', {
    marginTop: 0,
    stickyClass: 'fixed'
  });
} else if ($(window).width() < 1024) {
  var _header = new Sticky('.header', {
    marginTop: 0,
    stickyClass: 'fixed'
  });
} // show modal


$('body').on('click', '[data-modal]:not(.modal)', function (e) {
  if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
  $('.modal.active').removeClass('active');
  $(".modal[data-modal=\"".concat($(e.currentTarget).attr('data-modal'), "\"]")).addClass('active');

  if ($(e.currentTarget).attr('data-modal') === 'thanks') {
    setTimeout(function () {
      $('.modal.active').find('svg').addClass('animate');
    }, 100);
  }
}); // close modal events

var closeModal = function closeModal() {
  $('.backdrop').removeClass('active');
  $('.modal').removeClass('active');
  $('.modal').find('svg').removeClass('animate');
};

$('body').on('click', '.modal__close, .modal .close', closeModal);
$('body').on('click', '.backdrop', function (e) {
  if ($(e.target)[0].className === 'backdrop active') closeModal();
}); // close modal on press ESC

$(document).keyup(function (e) {
  if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});
$('body').on('submit', 'form', function (e) {
  e.preventDefault();
}); // Custom scroll

document.querySelectorAll('.custom-scroll').forEach(function (el) {
  new SimpleBar(el);
});
var masks = document.querySelectorAll('.phone-mask');
masks.forEach(function (el) {
  IMask(el, {
    mask: '+{7} (000) 000 00 00'
  });
});

if ($(window).width() >= 1280) {
  $('body').on('mouseenter', '.top__more', function (e) {
    $(e.currentTarget).addClass('active');
    $('.top__dropdown').addClass('active');
  });
  $('body').on('mouseleave', '.top', function (e) {
    $('.top__more').removeClass('active');
    $('.top__dropdown').removeClass('active');
  });
}

if ($(window).width() < 1280) {
  $('body').on('click', '.top__more', function (e) {
    $(e.currentTarget).toggleClass('active');
    $('.top__dropdown').toggleClass('active');
  });
}

$('body').on('click', '.dropdown__link', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).next().slideToggle(300);
});
$('body').on('click', '.dropdown__menu a', function (e) {
  if ($(window).width() >= 1023) {
    $('.dropdown__menu a').removeClass('active');
    $(e.currentTarget).toggleClass('active');
    $('.dropdown__page').removeClass('active');
    $(".dropdown__page[data-page=\"".concat($(e.currentTarget).attr('data-page'), "\"]")).addClass('active');
  } else {
    $('.dropdown__page').removeClass('active');
    $('.dropdown__menu').hide();
    $('.dropdown__page').removeClass('active');
    $('.dropdown__back').addClass('active');
    $(".dropdown__page[data-page=\"".concat($(e.currentTarget).attr('data-page'), "\"]")).addClass('active');
  }
});
$('body').on('click', '.dropdown__back', function (e) {
  $('.dropdown__page').removeClass('active');
  $('.dropdown__menu').show();
  $('.dropdown__page').removeClass('active');
  $('.dropdown__back').removeClass('active');
});
$('body').on('click', '.header__catalog:not(.active)', function (e) {
  $(e.currentTarget).toggleClass('active').html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-close"></use></svg> Каталог');
  $('.header .dropdown').toggleClass('active');
});
$('body').on('click', '.header__catalog.active', function (e) {
  $(e.currentTarget).toggleClass('active').html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-menu"></use></svg> Каталог');
  $('.header .dropdown').toggleClass('active');
});
$('body').on('click', '.dropdown__close', function (e) {
  $('.header__catalog').removeClass('active').html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-menu"></use></svg> Каталог');
  $('.header .dropdown').removeClass('active');
});

if ($(window).width() >= 1280) {
  $('body').on('mouseenter', '.top__menu > *', function (e) {
    $('.top__menu-dropdown').removeClass('active');
    $(e.currentTarget).find('.top__menu-dropdown').addClass('active');
  });
  $('body').on('mouseleave', '.top', function (e) {
    $('.top__menu-dropdown').removeClass('active');
  });
}

if ($(window).width() < 1280) {
  $('body').on('click', '.top__menu > *', function (e) {
    $(e.currentTarget).find('.top__menu-dropdown').toggleClass('active');
  });
}

$('body').on('mouseenter', '.menu .container > *', function (e) {
  $('.menu .dropdown').removeClass('active');
  $(e.currentTarget).find('.dropdown').addClass('active');
});
$('body').on('mouseleave', '.menu', function (e) {
  $('.menu .dropdown').removeClass('active');
});

if ($('.menu .container > .active').length > 0) {
  $('.menu .bar').animate({
    left: $('.menu .container > .active').offset().left - $('.container').offset().left,
    width: $('.menu .container > .active').outerWidth()
  });
}

$('body').on('mouseenter', '.menu .container > *', function (e) {
  $('.menu .bar').animate({
    left: $(e.currentTarget).offset().left - $('.container').offset().left,
    width: $(e.currentTarget).outerWidth()
  });
});
$('body').on('mouseleave', '.menu', function (e) {
  if ($('.menu .container > .active').length > 0) {
    $('.menu .bar').animate({
      left: $('.menu .container > .active').offset().left - $('.container').offset().left,
      width: $('.menu .container > .active').outerWidth()
    });
  } else {
    $('.menu .bar').animate({
      left: 0,
      width: 0
    });
  }
});

if ($(window).width() >= 1170) {
  $('.main .container.full').css('padding-left', $('.header .container').offset().left);
}

$('body').on('click', '.hamburger', function (e) {
  $(e.currentTarget).toggleClass('active');
  $('.top__menu').toggleClass('active');
  $('html, body').toggleClass('overflow');
});

if ($(window).width() < 1024) {
  $('.dropdown__page').removeClass('active');
}

$('body').on('click', '.filter:not(.active)', function (e) {
  $('.filter').addClass('active').text('Скрыть фильтры');
  $('.sidebar').addClass('show');
});
$('body').on('click', '.filter.active', function (e) {
  $('.filter').removeClass('active').text('Показать фильтры');
  $('.sidebar').removeClass('show');
});
$('body').on('click', '.sidebar__reset, .sidebar__close', function (e) {
  $('.filter').removeClass('active').text('Показать фильтры');
  $('.sidebar').removeClass('show');
});
$('body').on('blur', 'input, textarea', function (e) {
  if ($(e.currentTarget).val() !== '') {
    $(e.currentTarget).addClass('fill');
  } else {
    $(e.currentTarget).removeClass('fill');
  }
});
$(document).click(function (event) {
  if (!$(event.target).closest('.dropdown').length && !$(event.target).closest('.header__catalog').length) {
    $('.header__catalog').toggleClass('active').html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-menu"></use></svg> Каталог');
    $('.dropdown').removeClass('active');
  }
});