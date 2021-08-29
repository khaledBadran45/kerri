let darkLogo = $('#darkLogo'),
lightLogo = $('#lightLogo');
about = $('#about');


//navbar
$(window).scroll(function(){
  
  let scrollingTop = $(window).scrollTop()
  let aboutOffset = about.offset().top
   if(scrollingTop >= aboutOffset ){
   lightLogo.addClass('d-none')
   darkLogo.removeClass('d-none')
   $('nav').addClass('bg-white')
   $('a').css('color','#000')
   $('.down').css('opacity','1')
   $('nav-link').removeClass('py-5')
   $('nav').addClass('bShadow')
}else{
  darkLogo.addClass('d-none')
   lightLogo.removeClass('d-none')
   $('nav').removeClass('bg-white')
   $('a').css('color','#fff')
   $('.down').css('opacity','0')
   $('nav').removeClass('bShadow')

}
 })

//filtering
var $grid = $('.grid').isotope({

 });
// filter items on button click
$('#filter').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});




 $('.nav-link').click(function(){
  theHref= $(this).attr('href')
  let hrefOffset = $(theHref).offset().top
      $('body').animate({
          scrollTop:hrefOffset
      },1000)
})






let homeOffset = $('#home').offset().top;
$('.down').click(function(){

  $('body').animate({
    scrollTop:homeOffset
  },1000)
})

let aboutOffset = about.offset().top

$('.scroll-up').click(function(){
  $('body').animate({
    scrollTop:aboutOffset
  },1000)
})







  

$('.cog').click(function(){

 let boxWidth = $('.contain').innerWidth();

 let x = $('.box-option').css('left')
  
 if(x == '0px'){

$('.box-option').animate({
  left:`-${boxWidth}`
},1000) 

 }else{
  $('.box-option').animate({
    left:'0'
  },1000)
 }


})




$('.box-option li').click(function(){
 let bgColor = ($(this).css('backgroundColor'))

 $(' i , h4 , h1 , h2 , h3 ').css('color',bgColor)



})






$('.box-option img').click(function(){
  let bgImg= ($(this).attr('src'))
 



    // $('#home').css('background' , `url(${bgImg})`)
    $('#home').css({
      background : `url(${bgImg})`,
      transition: 'all 3s',
      backgroundSize:'cover'
    })
  
    // $(' i , h4 , h1 , h2 , h3 ').css('color',bgColor)
 
 
 
 })
 





