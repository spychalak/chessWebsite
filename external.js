$(document).ready(function () {
    $('.open-menu, .close-menu').click(function () {
        $('nav.main-menu li').toggleClass('show-when-compact');
    });
    
    $('nav.main-menu li').addClass('has-js');
});


