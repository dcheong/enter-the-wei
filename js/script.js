$(document).ready(function() {
    $('#head').hover(function() {
        console.log('hover in');
        $('#bottom').animate({top: '210px'}, 150);
        $('#enter').slideDown(150);
    },
    function() {
        console.log('hover out');
        $('#bottom').animate({top: '190px'}, 150);
        $('#enter').slideUp(150);
    })
});
