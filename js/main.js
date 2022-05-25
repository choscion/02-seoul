$(function () {

    $('.sc_visual .slide h3').click(function(e){
        e.preventDefault();
        $(this).parent('.slide').addClass('active').siblings().removeClass('active')


        if ($(this).parent('.slide').hasClass('slide01')) {
            //주요뉴스
            slide02.autoplay.stop()
            // 정지
            if($(this).parent('.slide').find('.pause').hasClass('active')){
                slide01.autoplay.start()
            }else{//정지한 상태
                slide01.autoplay.stop()
            }
        } else { //시민참여
            slide01.autoplay.stop()
            // 정지
            if($(this).parent('.slide').find('.pause').hasClass('active')){
                slide02.autoplay.start()
            }else{//정지한 상태
                slide02.autoplay.stop()
            }
        }
    })




    var slide01 = new Swiper(".slide01 .swiper", {
            pagination: {
                el: ".slide01 .fraction",
                type: "fraction",
            },
            navigation: {
                nextEl: ".slide01 .next",
                prevEl: ".slide01 .prev",
            },
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            }
        });

    var slide02 = new Swiper(".slide02 .swiper", {
            pagination: {
                el: ".slide02 .fraction",
                type: "fraction",
            },
            navigation: {
                nextEl: ".slide02 .next",
                prevEl: ".slide02 .prev",
            },
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            }
        });
        slide02.autoplay.stop()

        var slide03 = new Swiper(".slide03", {
            slidesPerView: 3,
            spaceBetween: 43,
            pagination: {
                el: ".slide03 .fraction",
                type: "fraction",
            },
            navigation: {
                nextEl: ".slide03 .next",
                prevEl: ".slide03 .prev",
            },
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            }
          });


        function controls(el,v){
            $(el).click(function(e){
                e.preventDefault();
                if ($(this).find('.pause').hasClass('active')) {
                    $(this).find('.btn').removeClass('active');
                    $(this).find('.play').addClass('active');
                    //
                    v.autoplay.stop()
                } else {
                    $(this).find('.btn').removeClass('active');
                    $(this).find('.pause').addClass('active');
                    //
                    v.autoplay.start()
                }
            })
        }
        controls('.slide01 .btns',slide01)
        controls('.slide02 .btns',slide02)
        controls('.slide03 .btns',slide03)


    $('.site_title').click(function (e) { //내가 뎁스1을 클릭했을때
        e.preventDefault();
        // $('.sub').stop().slideUp();
        // $(this).siblings('.sub').stop().slideDown();
        if ($(this).hasClass('on')) {
            $('.site_sub').stop().slideUp();
            $('.site_title').removeClass('on');
        } else {
            $('.site_sub').stop().slideUp();
            $(this).siblings('.site_sub').stop().slideDown();
            $('.site_title').removeClass('on');
            $(this).addClass('on');
        }
    })

    $('.site_sub li:first-child').keydown(function(e){
        keyCode = e.keyCode || e.which;
        
        if (keyCode == 9 && e.shiftKey) { //탭키
            
                $('.site_sub').stop().slideUp();
                $('.site_title').removeClass('on');
        }
    })
    
    $('.site_sub li:last-child').keydown(function(e){
        keyCode = e.keyCode || e.which;
        
        if (keyCode == 9 && !e.shiftKey) { //탭키
                $('.site_sub').stop().slideUp();
            $('.site_title').removeClass('on');
        }
    })

    




}) //지우지마
