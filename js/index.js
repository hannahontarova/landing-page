$(function(){

    const header = $('#header')
    const introH = $('#intro').innerHeight()
    let scrollOffset = $(window).scrollTop()

    // fixed header
    checkScroll(scrollOffset)

    $(window).on('scroll', function(){
        scrollOffset = $(this).scrollTop()
        checkScroll(scrollOffset)
    })
    function checkScroll(scrollOffset){
        if(scrollOffset >= introH){
            header.addClass('fixed')
        } else {
            header.removeClass('fixed')
        }
    }
    // smoth scroll
    $('[data-scroll]').on('click', function(event){
        event.preventDefault()
        const blockId = $(this).data('scroll')
        let blockOffset = $(blockId).offset().top
        
        $('html, body').animate({
            scrollTop: blockOffset
        })
    })
    // menu nav toggle
    $('#navToggle').on('click', function(event){
        event.preventDefault()
        $(this).toggleClass('active')
        $('#nav').toggleClass('active')
    })
    // collapse
    $('[data-collapse]').on('click', function(event){
        event.preventDefault()
        var $this = $(this),
            blockId = $this.data('collapse')

        $this.toggleClass('active')
    })

    // slider
    $('[data-slider]').slick({
        infinity:true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })
})