$(document).ready(() => {

    $(document).on('click', '.sectmenu__item a', function() {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 500);
    })

    // burger
    $('.burger').click(function() {
        $('.adaptmenu').addClass('adaptmenu_active');
        $('body').css('overflow', 'hidden');
    });

    $('.close').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });

    $('.adaptmenu nav').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });


   
    
    // popap

    $('.show_popap').click(function() {
        $('.modalDialogcustom').addClass('modalDialogcustom_active');
        $('body').css('overflow', 'hidden')
    });

    $('.contentpopap__cancel').click(function() {
        $('.modalDialogcustom').removeClass('modalDialogcustom_active');
        $('body').css('overflow', 'visible')
    });

    $('.shadow_popap').click(function() {
        $('.modalDialogcustom').removeClass('modalDialogcustom_active');
        $('body').css('overflow', 'visible')
    });


});

                                                                        



                                                                           

                                        

