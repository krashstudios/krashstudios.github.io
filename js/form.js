//Used to move form feilds name from in feild to above feild.
$(document).ready(function(){
  $('.form-element').focus(function(){
    $(this).siblings('label').addClass('focus');
  });
  $('.form-element').focusout(function(){
    if ($(this).val() === ''){
      $(this).siblings('label').removeClass('focus');
   }
  });
});
