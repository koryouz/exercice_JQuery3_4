$(document).ready(function(){
  $('#sizeButton').click(function(){
    $('.square').animate({width:'+=20px'});
    var img = $('.square').width();
    if(img >= 200){
      $('.square').animate({width:'20px'});
    }
  });
  $('#colorGreenButton').click(function(){
    $('.square').css('background', 'green');
  });
  $('#colorInitialButton').click(function(){
    $('.square').css('background', 'red');
  });
  $('#dissapearButton').click(function(){
    $('.square').hide();
  });
  $('#appearButton').click(function(){
    $('.square').show();
  });
});
