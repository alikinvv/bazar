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

$('body').on('click', '.open-reviews', (e) => {
    $('.tab').removeClass('active');
    $('.tabs a').removeClass('active');
    $('.tabs a[data-tab="4"]').addClass('active');
    $('.tab[data-tab="4"]').addClass('active');
    $('.tabs .bar').animate({ left: $('.tabs a.active').offset().left - $('.container').offset().left, width: $('.tabs a.active').outerWidth() });
    $('html, body').stop().animate({ scrollTop: $('.info').offset().top - 200 }, 500, 'swing');
});

$('body').on('click', '.open-question', (e) => {
    $('.tab').removeClass('active');
    $('.tabs a').removeClass('active');
    $('.tabs a[data-tab="5"]').addClass('active');
    $('.tab[data-tab="5"]').addClass('active');
    $('.tabs .bar').animate({ left: $('.tabs a.active').offset().left - $('.container').offset().left, width: $('.tabs a.active').outerWidth() });
    $('html, body').stop().animate({ scrollTop: $('.faq__desc').offset().top - 300 }, 500, 'swing');
});

var productNav = new Swiper('.product__nav .swiper', {
    spaceBetween: 10,
    slidesPerView: 2.5,
    watchSlidesProgress: true,
    breakpoints: {
        375: {
            spaceBetween: 10,
            slidesPerView: 3.5,
        },

        768: {
            direction: 'vertical',
            spaceBetween: 17,
            slidesPerView: 4,
        },
    },
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
    pagination: {
        el: ".main .swiper-pagination",
    },
});

let slider1 = new Swiper('.catalog .slider1 .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 25,
    navigation: {
        nextEl: '.slider1 .swiper-button-next',
        prevEl: '.slider1 .swiper-button-prev',
    },
    breakpoints: {
        375: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 3.3,
        },
        1024: {
            slidesPerView: 4.3,
        },
        1280: {
            slidesPerView: 5,
        },
    },
});

let slider2 = new Swiper('.catalog .slider2 .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 25,
    navigation: {
        nextEl: '.slider2 .swiper-button-next',
        prevEl: '.slider2 .swiper-button-prev',
    },
    breakpoints: {
        375: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 3.3,
        },
        1024: {
            slidesPerView: 4.3,
        },
        1280: {
            slidesPerView: 5,
        },
    },
});

let slider3 = new Swiper('.catalog .slider3 .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 25,
    navigation: {
        nextEl: '.slider3 .swiper-button-next',
        prevEl: '.slider3 .swiper-button-prev',
    },
    breakpoints: {
        375: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 3.3,
        },
        1024: {
            slidesPerView: 4.3,
        },
        1280: {
            slidesPerView: 5,
        },
    },
});

let stock = new Swiper('.stock .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.stock .swiper-button-next',
        prevEl: '.stock .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1.3,
        },
        1024: {
            slidesPerGroup: 2,
            slidesPerView: 2.1,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
    },
});

let reviewsThree = new Swiper('.reviews.three .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.reviews.three .swiper-button-next',
        prevEl: '.reviews.three .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1.8,
        },
        1024: {
            slidesPerView: 2.8,
        },
        1280: {
            slidesPerView: 3,
        },
    },
});

let reviewsTwo = new Swiper('.reviews.two .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.reviews.two .swiper-button-next',
        prevEl: '.reviews.two .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1.8,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 84,
        },
    },
});

let platform = new Swiper('.platform .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.platform .swiper-button-next',
        prevEl: '.platform .swiper-button-prev',
    },
    breakpoints: {
        375: {
            slidesPerView: 1.3,
        },
        768: {
            slidesPerView: 2.8,
        },
        1024: {
            slidesPerView: 3.8,
        },

        1280: {
            slidesPerView: 4,
        },
    },
});

let brands = new Swiper('.brands .swiper', {
    loop: true,
    slidesPerView: 1.5,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.brands .swiper-button-next',
        prevEl: '.brands .swiper-button-prev',
    },
    breakpoints: {
        375: {
            slidesPerView: 2.1,
        },
        768: {
            slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 4.5,
        },
        1280: {
            slidesPerView: 5,
        },
    },
});

let journal = new Swiper('.journal .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.journal .swiper-button-next',
        prevEl: '.journal .swiper-button-prev',
    },
    breakpoints: {
        375: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.5,
        },
        1280: {
            slidesPerView: 3,
        },
    },
});

let certThree = new Swiper('.cert.three .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.cert.three .swiper-button-next',
        prevEl: '.cert.three .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1.8,
        },
        1024: {
            slidesPerView: 2.8,
        },
        1280: {
            slidesPerView: 3,
        },
    },
});

let certFour = new Swiper('.cert.four .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.cert.four .swiper-button-next',
        prevEl: '.cert.four .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2.3,
        },
        1024: {
            slidesPerView: 3.3,
        },
        1280: {
            slidesPerView: 4,
        },
    },
});

let command = new Swiper('.command .swiper:not(.center)', {
    loop: true,
    slidesPerView: 'auto',
    freeMode: true,
    // speed: 3000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.command .swiper-button-next',
        prevEl: '.command .swiper-button-prev',
    },
});

let commandCenter = new Swiper('.command .swiper.center', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.command .swiper-button-next',
        prevEl: '.command .swiper-button-prev',
    },
});

let popular1 = new Swiper('.popular.block1 .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.popular.block1 .swiper-button-next',
        prevEl: '.popular.block1 .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2.2,
        },
        1024: {
            slidesPerView: 3.2,
        },
        1280: {
            slidesPerView: 4,
        },
    },
});

let popular2 = new Swiper('.popular.block2 .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.popular.block2 .swiper-button-next',
        prevEl: '.popular.block2 .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2.2,
        },
        1024: {
            slidesPerView: 3.2,
        },
        1280: {
            slidesPerView: 4,
        },
    },
});

let popular3 = new Swiper('.popular.block3 .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.popular.block3 .swiper-button-next',
        prevEl: '.popular.block3 .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2.2,
        },
        1024: {
            slidesPerView: 3.2,
        },
        1280: {
            slidesPerView: 4,
        },
    },
});

let youtube = new Swiper('.youtube .swiper', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.youtube .swiper-button-next',
        prevEl: '.youtube .swiper-button-prev',
    },
    breakpoints: {
        375: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 3.5,
        },
        1280: {
            slidesPerView: 4,
        },
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

$('body').on('click', '.topbar .add-cart', (e) => {
    $('.product .add-cart').hide();
    $('.product .add-cart').parent().find('.item__add').addClass('active');
    $('.add').addClass('active');
});

$('body').on('click', '.topbar .item__add .btn-green', (e) => {
    $('.product .item__add .btn-green').closest('.product').find('.item__add').removeClass('active');
    $('.product .item__add .btn-green').closest('.product').find('.add-cart').show();
    $('.add').removeClass('active');
});

$('body').on('click', '.product .add-cart', (e) => {
    $(e.currentTarget).hide();
    $(e.currentTarget).parent().find('.item__add').addClass('active');
    $('.add').addClass('active');
});

$('body').on('click', '.product .item__add .btn-green', (e) => {
    $(e.currentTarget).closest('.product').find('.item__add').removeClass('active');
    $(e.currentTarget).closest('.product').find('.add-cart').show();
    $('.add').removeClass('active');
});

$('body').on('click', '.item__add.active .btn-green', (e) => {
    $(e.currentTarget).closest('.item').find('.item__add').removeClass('active');
    $(e.currentTarget).closest('.item').find('.add-cart').show();
    $('.add').removeClass('active');
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
    $(e.currentTarget).next().slideToggle(300);
});

$('body').on('click', '.item__controls a', (e) => {
    $(e.currentTarget).toggleClass('active');
});

if ($(window).width() >= 1280) {
    $('.scrolltop').css('left', $('.container').offset().left + $('.container').outerWidth() + 63);
}

let resize = () => {
    if ($(window).width() >= 1279) {
        $('.command__info').css('left', $('.container').offset().left);
    }

    let titleHeight = 0;
    let items = [];
    let o = $(window).width() < 1280 ? 2 : 3;

    if ($(window).width() >= 768) {
        
        for (let i = 1; i < $('.catalog .item').length + 1; i++) {
            let $step = $('.catalog .item').eq(i - 1);
    
            if (i !== 0 && i % o === 0) {
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
    }
}

resize();
$(window).on('resize', resize);

$('body').on('click', '.scrolltop', (e) => {
    $('html, body').stop().animate({ scrollTop: 0 }, 500, 'swing');
});

$('body').on('click', '.sidebar__toggle', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).next().slideToggle(300);
});

$('body').on('click', '.sidebar__more:not(.active)', (e) => {
    $(e.currentTarget).prev().slideToggle(300);
    $(e.currentTarget).toggleClass('active').text('Свернуть');
});

$('body').on('click', '.product__toggle:not(.active)', (e) => {
    $(e.currentTarget).prev().slideToggle(300);
    $(e.currentTarget).toggleClass('active').text('Свернуть');
});

$('body').on('click', '.product__toggle.active', (e) => {
    $(e.currentTarget).prev().slideToggle(300);
    $(e.currentTarget).toggleClass('active').text('Все характеристики');
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

$('body').on('click', '.reviews__more:not(.active)', (e) => {
    $(e.currentTarget).next().slideToggle(300);
    $(e.currentTarget).toggleClass('active').text('Скрыть ответ');
});

$('body').on('click', '.reviews__more.active', (e) => {
    $(e.currentTarget).next().slideToggle(300);
    $(e.currentTarget).toggleClass('active').text('Показать ответ');
});

$('body').on('click', '.faq__toggle', (e) => {
    $(e.currentTarget).closest('.faq__item').find('.faq__form').slideToggle(300);
    $(e.currentTarget).toggleClass('active');
});

$('body').on('click', '.faq__show:not(.active)', (e) => {
    $(e.currentTarget).closest('.faq__item').find('.faq__dropdown').slideToggle(300);
    $(e.currentTarget).toggleClass('active').text('Скрыть ответы (2)');
});

$('body').on('click', '.faq__show.active', (e) => {
    $(e.currentTarget).closest('.faq__item').find('.faq__dropdown').slideToggle(300);
    $(e.currentTarget).toggleClass('active').text('Смотреть ответы (2)');
});

$('body').on('click', '.delivery__current', (e) => {
    $(e.currentTarget).parent().find('.delivery__dropdown').toggleClass('active');
    $(e.currentTarget).toggleClass('active');
});

$('body').on('click', '.set-promocode', (e) => {
    $(e.currentTarget).parent().find('div').addClass('active');
    $(e.currentTarget).hide();
});

$('body').on('click', '.company__item', (e) => {
    if ($(e.currentTarget).find('input').is(':checked')) {
        $('.company__item').removeClass('active');
        $(e.currentTarget).addClass('active');
    } else {
        $(e.currentTarget).removeClass('active');
    }
});

$('body').on('click', '.org', (e) => {
    if ($(e.currentTarget).is(':checked')) {
        $('.order__group.hide, .form-group.hide').addClass('active');
    } else {
        $('.order__group.hide, .form-group.hide').removeClass('active');
    }
});

$('body').on('click', '.order__login', (e) => {
    $('.login').slideToggle(300);
});

if ($('.order__sidebar').length > 0 && $(window).width() >= 1024) {
    let sticky = new Sticky('.order__sidebar', {
        marginTop: 0,
    });
}

if (!$('.order__sidebar').length > 0) {
    let header = new Sticky('.header', {
        marginTop: 0,
        stickyClass: 'fixed',
    });
    let topbar = new Sticky('.topbar', {
        marginTop: 80,
        stickyClass: 'fixed',
    });
} else if ($(window).width() < 1024) {
    let header = new Sticky('.header', {
        marginTop: 0,
        stickyClass: 'fixed',
    });
}

let lastScrollTop = 0;

$(window).scroll(function(event){
    let st = $(this).scrollTop();

    if (st > lastScrollTop){
        if ($('.topbar').length > 0 && st > $('.product').offset().top + $('.product').height()) {
            $('.topbar').addClass('active');
        }
    } else {
       if ($('.topbar').length > 0 && st < $('.product').offset().top + $('.product').height()) {
            $('.topbar').removeClass('active');
        }
    }
    lastScrollTop = st;
 });

// show modal
$('body').on('click', '[data-modal]:not(.modal)', (e) => {
    if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
    $('.modal.active').removeClass('active');
    $(`.modal[data-modal="${$(e.currentTarget).attr('data-modal')}"]`).addClass('active');

    if ($(e.currentTarget).attr('data-modal') === 'thanks') {
        setTimeout(() => {
            $('.modal.active').find('svg').addClass('animate');
        }, 100);
    }
});

// close modal events
let closeModal = () => {
    $('.backdrop').removeClass('active');
    $('.modal').removeClass('active');
    $('.modal').find('svg').removeClass('animate');
};

$('body').on('click', '.modal__close, .modal .close', closeModal);

$('body').on('click', '.backdrop', (e) => {
    if ($(e.target)[0].className === 'backdrop active') closeModal();
});

// close modal on press ESC
$(document).keyup((e) => {
    if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});

$('body').on('submit', 'form', (e) => {
    e.preventDefault();
});

// Custom scroll
document.querySelectorAll('.custom-scroll').forEach((el) => {
    new SimpleBar(el);
});

let masks = document.querySelectorAll('.phone-mask');

masks.forEach((el) => {
    IMask(el, { mask: '+{7} (000) 000 00 00' });
});

if ($(window).width() >= 1280) {
    $('body').on('mouseenter', '.top__more', (e) => {
        $(e.currentTarget).addClass('active');
        $('.top__dropdown').addClass('active');
    });

    $('body').on('mouseleave', '.top', (e) => {
        $('.top__more').removeClass('active');
        $('.top__dropdown').removeClass('active');
    });
}

if ($(window).width() < 1280) {
    $('body').on('click', '.top__more', (e) => {
        $(e.currentTarget).toggleClass('active');
        $('.top__dropdown').toggleClass('active');
    });
}

$('body').on('click', '.top__mobile', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).find('.top__menu-dropdown').toggleClass('active');
});

$('body').on('click', '.dropdown__link', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).next().slideToggle(300);
});

$('body').on('click', '.dropdown__menu a', (e) => {
    if ($(window).width() >= 1023) {
        $('.dropdown__menu a').removeClass('active');
        $(e.currentTarget).toggleClass('active');
        $('.dropdown__page').removeClass('active');
        $(`.dropdown__page[data-page="${$(e.currentTarget).attr('data-page')}"]`).addClass('active');
    } else {
        $('.dropdown__page').removeClass('active');
        $('.dropdown__menu').hide();
        $('.dropdown__page').removeClass('active');
        $('.dropdown__back').addClass('active');
        $(`.dropdown__page[data-page="${$(e.currentTarget).attr('data-page')}"]`).addClass('active');
    }
});

$('body').on('click', '.dropdown__back', (e) => {
    $('.dropdown__page').removeClass('active');
    $('.dropdown__menu').show();
    $('.dropdown__page').removeClass('active');
    $('.dropdown__back').removeClass('active');
});

$('body').on('click', '.header__catalog:not(.active)', (e) => {
    $(e.currentTarget).toggleClass('active').html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-close"></use></svg> Каталог');
    $('.header .dropdown').toggleClass('active');
});

$('body').on('click', '.header__catalog.active', (e) => {
    $(e.currentTarget).toggleClass('active').html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-menu"></use></svg> Каталог');
    $('.header .dropdown').toggleClass('active');
});

$('body').on('click', '.dropdown__close', (e) => {
    $('.header__catalog').removeClass('active').html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-menu"></use></svg> Каталог');
    $('.header .dropdown').removeClass('active');
});

if ($(window).width() >= 1280) {
    $('body').on('mouseenter', '.top__menu > *', (e) => {
        $('.top__menu-dropdown').removeClass('active');
        $(e.currentTarget).find('.top__menu-dropdown').addClass('active');
    });

    $('body').on('mouseleave', '.top', (e) => {
        $('.top__menu-dropdown').removeClass('active');
    });
}

if ($(window).width() < 1280) {
    $('body').on('click', '.top__menu > *', (e) => {
        $(e.currentTarget).find('.top__menu-dropdown').toggleClass('active');
    });
}

$('body').on('mouseenter', '.menu .container > *', (e) => {
    $('.menu .dropdown').removeClass('active');
    $(e.currentTarget).find('.dropdown').addClass('active');
});

$('body').on('mouseleave', '.menu', (e) => {
    $('.menu .dropdown').removeClass('active');
});

if ($('.menu .container > .active').length > 0) {
    $('.menu .bar').animate({
        left: $('.menu .container > .active').offset().left - $('.container').offset().left,
        width: $('.menu .container > .active').outerWidth(),
    });
}

$('body').on('mouseenter', '.menu .container > *', (e) => {
    $('.menu .bar').animate({ left: $(e.currentTarget).offset().left - $('.container').offset().left, width: $(e.currentTarget).outerWidth() });
});

$('body').on('mouseleave', '.menu', (e) => {
    if ($('.menu .container > .active').length > 0) {
        $('.menu .bar').animate({
            left: $('.menu .container > .active').offset().left - $('.container').offset().left,
            width: $('.menu .container > .active').outerWidth(),
        });
    } else {
        $('.menu .bar').animate({ left: 0, width: 0 });
    }
});

if ($(window).width() >= 1170) {
    $('.main .container.full').css('padding-left', $('.header .container').offset().left);
}

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.top__menu').toggleClass('active');
    $('html, body').toggleClass('overflow');
});

if ($(window).width() < 1024) {
    $('.dropdown__page').removeClass('active');
}

$('body').on('click', '.filter:not(.active)', (e) => {
    $('.filter').addClass('active').text('Скрыть фильтры');
    $('.sidebar').addClass('show');
});

$('body').on('click', '.filter.active', (e) => {
    $('.filter').removeClass('active').text('Показать фильтры');
    $('.sidebar').removeClass('show');
});

$('body').on('click', '.sidebar__reset, .sidebar__close', (e) => {
    $('.filter').removeClass('active').text('Показать фильтры');
    $('.sidebar').removeClass('show');
});

$('body').on('blur', 'input, textarea', (e) => {
    if ($(e.currentTarget).val() !== '') {
        $(e.currentTarget).addClass('fill')
    } else {
        $(e.currentTarget).removeClass('fill')
    }
});

$(document).click((event) => {
    if (!$(event.target).closest('.dropdown').length && !$(event.target).closest('.header__catalog').length) {
        $('.header__catalog').toggleClass('active').html('<svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-menu"></use></svg> Каталог');
      $('.dropdown').removeClass('active');
    }        
});