$(document).ready(function() {
    /* scroll to top of page */
    $('.pop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
