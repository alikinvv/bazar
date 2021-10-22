"use strict";

$('body').on('mouseenter', '.menu a', function (e) {
  $('.menu .bar').animate({
    left: $(e.currentTarget).offset().left - $('.container').offset().left,
    width: $(e.currentTarget).outerWidth()
  });
});
$('body').on('mouseleave', '.menu', function (e) {
  $('.menu .bar').animate({
    left: 0,
    width: 0
  });
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
  }
});
var slider1 = new Swiper('.catalog .slider1 .swiper', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 25,
  navigation: {
    nextEl: '.slider1 .swiper-button-next',
    prevEl: '.slider1 .swiper-button-prev'
  }
});
var slider2 = new Swiper('.catalog .slider2 .swiper', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 25,
  navigation: {
    nextEl: '.slider2 .swiper-button-next',
    prevEl: '.slider2 .swiper-button-prev'
  }
});
var slider3 = new Swiper('.catalog .slider3 .swiper', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 25,
  navigation: {
    nextEl: '.slider3 .swiper-button-next',
    prevEl: '.slider3 .swiper-button-prev'
  }
});
var stock = new Swiper('.stock .swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 80,
  slidesPerGroup: 2,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.stock .swiper-button-next',
    prevEl: '.stock .swiper-button-prev'
  }
});
var reviewsThree = new Swiper('.reviews.three .swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.reviews.three .swiper-button-next',
    prevEl: '.reviews.three .swiper-button-prev'
  }
});
var reviewsTwo = new Swiper('.reviews.two .swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 84,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.reviews.two .swiper-button-next',
    prevEl: '.reviews.two .swiper-button-prev'
  }
});
var platform = new Swiper('.platform .swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.platform .swiper-button-next',
    prevEl: '.platform .swiper-button-prev'
  }
});
var brands = new Swiper('.brands .swiper', {
  loop: true,
  slidesPerView: 5,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.brands .swiper-button-next',
    prevEl: '.brands .swiper-button-prev'
  }
});
var journal = new Swiper('.journal .swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.journal .swiper-button-next',
    prevEl: '.journal .swiper-button-prev'
  }
});
var certThree = new Swiper('.cert.three .swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.cert.three .swiper-button-next',
    prevEl: '.cert.three .swiper-button-prev'
  }
});
var certFout = new Swiper('.cert.four .swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.cert.four .swiper-button-next',
    prevEl: '.cert.four .swiper-button-prev'
  }
});
var command = new Swiper('.command .swiper', {
  loop: true,
  slidesPerView: 'auto',
  freeMode: true,
  speed: 3000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.command .swiper-button-next',
    prevEl: '.command .swiper-button-prev'
  }
});
var popular1 = new Swiper('.popular.block1 .swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.popular.block1 .swiper-button-next',
    prevEl: '.popular.block1 .swiper-button-prev'
  }
});
var popular2 = new Swiper('.popular.block2 .swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.popular.block2 .swiper-button-next',
    prevEl: '.popular.block2 .swiper-button-prev'
  }
});
var popular3 = new Swiper('.popular.block3 .swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.popular.block3 .swiper-button-next',
    prevEl: '.popular.block3 .swiper-button-prev'
  }
});
var youtube = new Swiper('.youtube .swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.youtube .swiper-button-next',
    prevEl: '.youtube .swiper-button-prev'
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
var titleArr = [];

for (var i = 0; i < $('.catalog .item').length; i++) {
  var $step = $('.catalog .item').eq(i);

  if (titleHeight % 3 === 0) {
    console.log('1');
  } else {
    console.log('2'); // titleArr.push($step);
    // if ($step.find('.item__title').height() > titleHeight) {
    //     titleHeight = $step.find('.item__title').height()
    // }
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
  $(e.currentTarget).next().slideToggle();
});
$('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 63);
$('body').on('click', '.scrolltop', function (e) {
  $('html, body').stop().animate({
    scrollTop: 0
  }, 500, 'swing');
});
$('body').on('click', '.sidebar__toggle', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).next().slideToggle();
});
$('body').on('click', '.sidebar__more', function (e) {
  $(e.currentTarget).next().slideToggle();
  $(e.currentTarget).remove();
});
$('body').on('click', '.tags__item', function (e) {
  $(e.currentTarget).toggleClass('active');
});
$('body').on('click', '.sort__item', function (e) {
  $(e.currentTarget).toggleClass('active');
});