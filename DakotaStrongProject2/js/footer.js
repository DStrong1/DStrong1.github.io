$(document).ready(function() {
    setInterval(function() {
        $('body')[0].style.height = ($(window).height() - ($(window).height() * .1)).toLocaleString('en') + 'px';
    }, 100)
    $('#accordian').accordion({
        collapsible: true
    });
});