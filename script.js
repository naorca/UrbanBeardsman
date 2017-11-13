$(document).ready(function(){ 

$("body").paroller();

const burgerNav = $(".burger-nav")
const shopBox = $("#shop-box");
const collectionBox = $("#collection-box");
const shopBtn = $(".shop-button");
const collectionBtn = $(".collection-button");
const blogBtn = $(".blog-button");
const aboutBtn = $(".about-button");
const soonBox = $("#soon-box");



let currentPanel = null;
let currentBtn = null;

let panelMap = {
    "shop-button" : shopBox,
    "collection-button" : collectionBox,
    "blog-button" : soonBox,
    "about-button" : soonBox
};

burgerNav.click(function(e){
    let btn = e.target;
    shopClick($(panelMap[btn.className]), $(btn));
});



$(document).click(function(event) { 
    if(!$(event.target).closest(burgerNav).length) {
        if(currentPanel) {
            currentPanel.removeClass("shop");
            currentPanel.addClass("hidden");
            currentPanel.css("display", "none");
            currentBtn.removeClass("picked");
        }
    }        
});



$("#support-btn").click(function(){
    $("#support-box").addClass("support-open");
    $("#support-btn").slideUp();
    $("#support-box").slideDown();
  

});



$("#support-close").click(function(){
    $("#support-btn").slideDown();
    $("#support-box").slideUp();
    

});


$("#support-search").click(function(){
    $("#support-btn").slideDown();
    $("#support-box").slideUp();


});





function shopClick(mybox, mybutton) {

    if (currentPanel) {
        currentPanel.removeClass("shop");
        currentPanel.addClass("hidden");
        currentPanel.css("display", "none")
    }

    if (currentBtn) {
        currentBtn.removeClass("picked")
    }
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

   currentPanel = mybox;
   currentBtn = mybutton;
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
 });