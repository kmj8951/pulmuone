$(function () {
    // 헤더 드롭다운
    $('.header .nav-item').mouseover(function () {
        if ($(this).find('.sub-list').length) {
            $('.header .sub-list').removeClass('on')
            $(this).find('.sub-list').addClass('on')
        } else {
            $('.header .sub-list').removeClass('on')
        }
    })

    $('.header .gnb').mouseleave(function () {
        $('.header .sub-list').removeClass('on')
    })


    // 검색창 열고 닫기
    $('.link-search').click(function () {
        $('body').addClass('search-bg');
        $('.search-area').addClass('on');
    })
    $('.search-close').click(function () {
        $('body').removeClass('search-bg');
        $('.search-area').removeClass('on');
    })



    // 메인 비주얼 영역
    var mainSlide = new Swiper(".main-slide", {
        effect: 'fade',
        autoplay: {
            delay: 3500,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

    // 퀵 버튼 영역
    $('.fix-top .btn-top').click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
    // 사이드메뉴 열기 닫기  
    $('.btn-menu').click(function () {
        $('.side-gnb').addClass('on')
        $('.header .dimmed').addClass('on')
    })

    $('.close').click(function () {
        $('.side-gnb').removeClass('on')
        $('.header .dimmed').removeClass('on')
    })


    // 사이드메뉴 li 토글버튼
    $('.side-item svg').click(function (e) {
        e.preventDefault();

        $(this).toggleClass('on')
        $(this).siblings().slideToggle();
    })

    // 사이드메뉴 안에 sub-list 열고 닫기
    $('.side-item .flex').click(function (e) {
        e.preventDefault(); //링크이벤트막기

        if ($(this).hasClass('on')) { //만약에 내가 클릭한 'nav'가 on이 있습니가?
            //예 있습니다 (두번째클릭)

            $(this).removeClass('on').siblings('.sub-list').slideUp()

        } else { //아니요 없습니다. (첫클릭)

            //모두닫히고
            $('.nav').removeClass('on').siblings('.sub-list').slideUp()


            //나만열려요
            $(this).addClass('on').siblings('.sub-list').slideDown()

        }
    })


}) //지우지마세요
