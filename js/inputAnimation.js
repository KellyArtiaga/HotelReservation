$('input').focus(function(){
    $(this).parents('.form-group').addClass('focus');
});
$('select').focus(function(){
    $(this).parents('.form-group').addClass('focus');
});

($('input')||$('select')).blur(function(){
var inputValue = $(this).val();
if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focus');  
} else {
    $(this).addClass('filled');
    $(this).removeClass('focus');
}
});
