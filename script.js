document.addEventListener("DOMContentLoaded", () => console.log("DOM fully loaded and parsed"));

$("body").paroller();


$(".shop-button").click(function() {
    const mybox = $("#shop-box");
    const otherbox = $("#collection-box");
    const mybutton = $(".shop-button")
    const otherbutton = $(".collection-button")
    shopClick(mybox, otherbox, mybutton, otherbutton);
    
 }

);

$(".collection-button").click(function() {
    const mybox = $("#collection-box");
    const otherbox = $("#shop-box");
    const mybutton = $(".collection-button")
    const otherbutton = $(".shop-button")
    shopClick(mybox, otherbox, mybutton, otherbutton);
}

);



$("#support-btn").click(function(){
    $("#support-box").addClass("support-open");
    $("#support-btn").slideUp();
    $("#support-box").slideDown();
  

})



$("#support-close").click(function(){
    $("#support-btn").slideDown();
    $("#support-box").slideUp();
    

});


$("#support-search").click(function(){
    $("#support-btn").slideDown();
    $("#support-box").slideUp();


});





function shopClick(mybox, otherbox, mybutton, otherbutton) {
    otherbox.removeClass("shop");
    otherbox.addClass("hidden");
    otherbox.css("display", "none")
    otherbutton.removeClass("picked")
  

    if (mybox.hasClass("hidden")) {

    mybox.removeClass("hidden")
    mybox.css("display", "flex")
    mybox.hide()
    mybox.addClass("shop");
    mybox.fadeIn("slow");
    mybutton.addClass("picked")
   
    } else { 
        
       mybox.addClass("hidden")
       mybox.removeClass("shop")
       mybox.css("display", "none")
       mybutton.removeClass("picked")
}
};



$(function () {
    $("#search-menu").on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="text"]').focus();
        $("#search").css({'z-index':'10'});
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});


$(".burger-btn").click(function(){
    $(".burger-nav").toggleClass("open");

});
