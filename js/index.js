/*side menu start*/
document.getElementById('side').addEventListener('click',function(){
    document.getElementById('sidebar').classList.toggle('active');
})
/*side menu end*/
/*search bar start*/
document.getElementById('search_bar').addEventListener('click',function(){
    document.getElementById('search').classList.toggle('active');
})
document.getElementById('search_bar').addEventListener('click',function(){
    document.getElementById('search_button').classList.toggle('active');
})
/*search bar end*/




$(document).ready(function(){

       
//   up scroll js start
$(window).on('scroll' ,function() {
    var scrollSize =  $(window).scrollTop()

 //   scroll top js start

    if(scrollSize > 500) {
     $('#up').slideDown();
    }else{
     $('#up').slideUp();
    }

 //    scroll top js end

  })
  

  $('#up').on('click',function() {
     $('html,body').animate({
         scrollTop:0,
     },2000)
  })


  //   up scroll js end

})

