$(document).ready(function(event){
    $('.initiallyShown1').click(function(){
        $('.initiallyHiden1').toggle();
        $('.initiallyShown1').toggle();
    });
    $('.initiallyHiden1').click(function(){
        $('.initiallyShown1').toggle();
        $('.initiallyHiden1').toggle();
    });
    $('.initiallyShown2').click(function(){
        $('.initiallyHiden2').toggle();
        $('.initiallyShown2').toggle();
    });
    $('.initiallyHiden2').click(function(){
        $('.initiallyShown2').toggle();
        $('.initiallyHiden2').toggle();
    });
    $('.initiallyShown3').click(function(){
        $('.initiallyHiden3').toggle();
        $('.initiallyShown3').toggle();
    });
    $('.initiallyHiden3').click(function(){
        $('.initiallyShown3').toggle();
        $('.initiallyHiden3').toggle();
    });
    $('.inittialltHiddenMain1').hover(function(){
        $('.initiallyHidden1').toggle();
    });
    $('.inittialltHiddenMain2').hover(function(){
        $('.initiallyHidden2').toggle();
    });
    $('.inittialltHiddenMain3').hover(function(){
        $('.initiallyHidden3').toggle();
    });
    $('.inittialltHiddenMain4').hover(function(){
        $('.initiallyHidden4').toggle();
    });
 event.preventDefault();
});

