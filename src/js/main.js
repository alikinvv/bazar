if ($('.menu .active').length > 0) {
    $('.menu .bar').animate({ left: $('.menu .active').offset().left - $('.container').offset().left, width: $('.menu .active').outerWidth() });
}

$('body').on('mouseenter', '.menu a', (e) => {
    $('.menu .bar').animate({ left: $(e.currentTarget).offset().left - $('.container').offset().left, width: $(e.currentTarget).outerWidth() });
});

$('body').on('mouseleave', '.menu', (e) => {
    if ($('.menu .active').length > 0) {
        $('.menu .bar').animate({ left: $('.menu .active').offset().left - $('.container').offset().left, width: $('.menu .active').outerWidth() });
    } else {
        $('.menu .bar').animate({ left: 0, width: 0 });
    }
});

if ($('.tabs .active').length > 0) {
    $('.tabs .bar').animate({ left: $('.tabs .active').offset().left - $('.container').offset().left, width: $('.tabs .active').outerWidth() });
}

$('body').on('mouseenter', '.tabs a', (e) => {
    $('.tabs .bar').animate({ left: $(e.currentTarget).offset().left - $('.container').offset().left, width: $(e.currentTarget).outerWidth() });
});

$('body').on('mouseleave', '.tabs', (e) => {
    if ($('.tabs .active').length > 0) {
        $('.tabs .bar').animate({ left: $('.tabs .active').offset().left - $('.container').offset().left, width: $('.tabs .active').outerWidth() });
    } else {
        $('.tabs .bar').animate({ left: 0, width: 0 });
    }
});

$('body').on('click', '.tabs a', (e) => {
    $('.tabs a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.tab').removeClass('active');
    $(`.tab[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
    $('.tabs .bar').animate({ left: $(e.currentTarget).offset().left - $('.container').offset().left, width: $(e.currentTarget).outerWidth() });
});

var productNav = new Swiper('.product__nav .swiper', {
    spaceBetween: 17,
    slidesPerView: 4,
    direction: 'vertical',
    watchSlidesProgress: true,
});
var productMain = new Swiper('.product__main', {
    spaceBetween: 10,
    thumbs: {
        swiper: productNav,
    },
    navigation: {
        nextEl: '.product__nav .swiper-button-next',
        prevEl: '.product__nav .swiper-button-prev',
    },
});

let main = new Swiper('.main .swiper', {
    loop: true,
    speed: 500,
    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.main .swiper-button-next',
        prevEl: '.main .swiper-button-prev',
    },
});

let slider1 = new Swiper('.catalog .slider1 .swiper', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 25,
    navigation: {
        nextEl: '.slider1 .swiper-button-next',
        prevEl: '.slider1 .swiper-button-prev',
    },
});

let slider2 = new Swiper('.catalog .slider2 .swiper', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 25,
    navigation: {
        nextEl: '.slider2 .swiper-button-next',
        prevEl: '.slider2 .swiper-button-prev',
    },
});

let slider3 = new Swiper('.catalog .slider3 .swiper', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 25,
    navigation: {
        nextEl: '.slider3 .swiper-button-next',
        prevEl: '.slider3 .swiper-button-prev',
    },
});

let stock = new Swiper('.stock .swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 80,
    slidesPerGroup: 2,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.stock .swiper-button-next',
        prevEl: '.stock .swiper-button-prev',
    },
});

let reviewsThree = new Swiper('.reviews.three .swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.reviews.three .swiper-button-next',
        prevEl: '.reviews.three .swiper-button-prev',
    },
});

let reviewsTwo = new Swiper('.reviews.two .swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 84,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.reviews.two .swiper-button-next',
        prevEl: '.reviews.two .swiper-button-prev',
    },
});

let platform = new Swiper('.platform .swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.platform .swiper-button-next',
        prevEl: '.platform .swiper-button-prev',
    },
});

let brands = new Swiper('.brands .swiper', {
    loop: true,
    slidesPerView: 5,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.brands .swiper-button-next',
        prevEl: '.brands .swiper-button-prev',
    },
});

let journal = new Swiper('.journal .swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.journal .swiper-button-next',
        prevEl: '.journal .swiper-button-prev',
    },
});

let certThree = new Swiper('.cert.three .swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.cert.three .swiper-button-next',
        prevEl: '.cert.three .swiper-button-prev',
    },
});

let certFout = new Swiper('.cert.four .swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.cert.four .swiper-button-next',
        prevEl: '.cert.four .swiper-button-prev',
    },
});

let command = new Swiper('.command .swiper', {
    loop: true,
    slidesPerView: 'auto',
    freeMode: true,
    speed: 3000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.command .swiper-button-next',
        prevEl: '.command .swiper-button-prev',
    },
});

let popular1 = new Swiper('.popular.block1 .swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.popular.block1 .swiper-button-next',
        prevEl: '.popular.block1 .swiper-button-prev',
    },
});

let popular2 = new Swiper('.popular.block2 .swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.popular.block2 .swiper-button-next',
        prevEl: '.popular.block2 .swiper-button-prev',
    },
});

let popular3 = new Swiper('.popular.block3 .swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.popular.block3 .swiper-button-next',
        prevEl: '.popular.block3 .swiper-button-prev',
    },
});

let youtube = new Swiper('.youtube .swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.youtube .swiper-button-next',
        prevEl: '.youtube .swiper-button-prev',
    },
});

let someHeight = (selector, element) => {
    for (let i = 0; i < $(selector).length; i++) {
        let $step = $(selector).eq(i);
        let stepHeight = 0;

        for (let j = 0; j < $step.find(element).length; j++) {
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

let titleHeight = 0;
let items = [];

for (let i = 1; i < $('.catalog .item').length + 1; i++) {
    let $step = $('.catalog .item').eq(i - 1);

    if (i !== 0 && i % 3 === 0) {
        if ($step.find('.item__title').height() > titleHeight) {
            titleHeight = $step.find('.item__title').height();
        }

        items.push(i - 1);

        for (let j = 0; j < items.length; j++) {
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

$('body').on('mouseenter', '.rating g', (e) => {
    $(e.currentTarget).closest('.rating').find('g').removeClass('active');

    for (let i = 1; i <= $(e.currentTarget).attr('data-star'); i++) {
        $(e.currentTarget).closest('.rating').find(`g[data-star="${i}"]`).addClass('active');
    }
});

$('body').on('click', '.rating g', (e) => {
    $(e.currentTarget).closest('.rating').attr('data-count', $(e.currentTarget).attr('data-star'));
    $(e.currentTarget).closest('.rating').find('g').removeClass('active');

    for (let i = 1; i <= $(e.currentTarget).attr('data-star'); i++) {
        $(e.currentTarget).closest('.rating').find(`g[data-star="${i}"]`).addClass('active');
    }
});

$('body').on('mouseleave', '.rating', (e) => {
    $(e.currentTarget).find('g').removeClass('active');
    for (let i = 1; i <= $(e.currentTarget).attr('data-count'); i++) {
        $(e.currentTarget).find(`g[data-star="${i}"]`).addClass('active');
    }
});

$('body').on('click', '.popular__controls a', (e) => {
    $(e.currentTarget).toggleClass('active');
});

$('body').on('click', '.counter__plus', (e) => {
    $(e.currentTarget)
        .parent()
        .find('.counter__num')
        .text(parseInt($(e.currentTarget).parent().find('.counter__num').text()) + 1);
});

$('body').on('click', '.counter__minus', (e) => {
    if (parseInt($(e.currentTarget).parent().find('.counter__num').text()) > 1) {
        $(e.currentTarget)
            .parent()
            .find('.counter__num')
            .text(parseInt($(e.currentTarget).parent().find('.counter__num').text()) - 1);
    }
});

$('body').on('click', '.item .add-cart', (e) => {
    $(e.currentTarget).hide();
    $(e.currentTarget).parent().find('.item__add').addClass('active');
    $('.add').addClass('active');
});

$('body').on('click', '.add__close', (e) => {
    $('.add').removeClass('active');
});

//yandex map page
if ($('#yandex').length > 0) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map(
                'yandex',
                {
                    center: [55.751574, 37.573856],
                    zoom: 9,
                    controls: ['fullscreenControl'],
                },
                {
                    searchControlProvider: 'yandex#search',
                }
            ),
            myPlacemark = new ymaps.Placemark(
                [55.777321, 37.536976],
                {
                    balloonContentBody: `
                        <div class="map__info">
                            <div class="map__item">
                                <img src="img/icons/phone.svg" alt="">
                                <div class="map__text bold">
                                    <a href="tel:+74952151778">+7 (495) 215-17-78</a>
                                    <a href="tel:88005550874">8 (800) 555-08-74</a>
                                </div>
                            </div>
                            <div class="map__item">
                                <img src="img/icons/marker.svg" alt="">
                                <div class="map__text">
                                    Москва, Рязанский пр-т, <br>
                                    2 корпус, 3, ТК «Город»
                                </div>
                            </div>
                            <div class="map__item">
                                <img src="img/icons/mail.svg" alt="">
                                <div class="map__text">
                                    <a href="mailto:info@stroybazar.ru">info@stroybazar.ru</a>
                                </div>
                            </div>
                            <div class="map__item">
                                <img src="img/icons/time.svg" alt="">
                                <div class="map__text">
                                    пн-вс 10:00 – 20:00
                                </div>
                            </div>
                            <div class="map__item">
                                <div class="map__dot"></div>
                                <div class="map__text">
                                    м. Нижегородская
                                </div>
                            </div>

                            <a href="javascript:void(0)" class="map__more">Подробнее</a>
                        </div>
                    `,
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/icons/point.svg',
                    iconImageSize: [40, 44],
                    iconImageOffset: [-20, -22],
                    // hideIconOnBalloonOpen: false,
                }
            ),
            myPlacemark2 = new ymaps.Placemark(
                [55.684758, 37.738521],
                {
                    balloonContentBody: `
                        <div class="map__info">
                            <div class="map__item">
                                <img src="img/icons/phone.svg" alt="">
                                <div class="map__text bold">
                                    <a href="tel:+74952151778">+7 (495) 215-17-78</a>
                                    <a href="tel:88005550874">8 (800) 555-08-74</a>
                                </div>
                            </div>
                            <div class="map__item">
                                <img src="img/icons/marker.svg" alt="">
                                <div class="map__text">
                                    Москва, Рязанский пр-т, <br>
                                    2 корпус, 3, ТК «Город»
                                </div>
                            </div>
                            <div class="map__item">
                                <img src="img/icons/mail.svg" alt="">
                                <div class="map__text">
                                    <a href="mailto:info@stroybazar.ru">info@stroybazar.ru</a>
                                </div>
                            </div>
                            <div class="map__item">
                                <img src="img/icons/time.svg" alt="">
                                <div class="map__text">
                                    пн-вс 10:00 – 20:00
                                </div>
                            </div>
                            <div class="map__item">
                                <div class="map__dot"></div>
                                <div class="map__text">
                                    м. Нижегородская
                                </div>
                            </div>

                            <a href="javascript:void(0)" class="map__more">Подробнее</a>
                        </div>
                    `,
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/icons/point.svg',
                    iconImageSize: [40, 44],
                    iconImageOffset: [-20, -22],
                    // hideIconOnBalloonOpen: false,
                }
            );

        myMap.events.add('click', (e) => e.get('target').balloon.close());
        myMap.geoObjects.add(myPlacemark).add(myPlacemark2);
    });
}

$('body').on('click', '.question', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).next().slideToggle();
});

$('body').on('click', '.item__controls a', (e) => {
    $(e.currentTarget).toggleClass('active');
});

$('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 63);

$('body').on('click', '.scrolltop', (e) => {
    $('html, body').stop().animate({ scrollTop: 0 }, 500, 'swing');
});

$('body').on('click', '.sidebar__toggle', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).next().slideToggle();
});

$('body').on('click', '.sidebar__more:not(.active)', (e) => {
    $(e.currentTarget).prev().slideToggle(300);
    $(e.currentTarget).toggleClass('active').text('Свернуть');
});

$('body').on('click', '.product__toggle', (e) => {
    $(e.currentTarget).prev().slideToggle(300);
    $(e.currentTarget).remove();
});

$('body').on('click', '.sidebar__more.active', (e) => {
    $(e.currentTarget).prev().slideToggle(300);
    $(e.currentTarget).toggleClass('active').text('Показать еще 6');
});

$('body').on('click', '.tags__item', (e) => {
    $(e.currentTarget).toggleClass('active');
});

$('body').on('click', '.sort__item', (e) => {
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
            max: 700000,
        },
        format: wNumb({
            thousand: ' ',
            decimals: 0,
        }),
    });

    priceSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
    });
}
