$(document).ready(function() {
    /* scroll to top of page */
    $('.pop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $("form").submit(function(event){
      event.preventDefault();
      setTimeout(
       function() {
          /* clear elements on form submit */
           $(".thank-you").css("display", "block");
           $(".to-hide").css("display", "none");
       },
       500);
    });

});
