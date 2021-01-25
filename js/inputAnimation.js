$('input').focus(function(){
    $(this).parents('.form-group').addClass('focus');
});

$('input').blur(function(){
var inputValue = $(this).val();
if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focus');  
} else {
    $(this).addClass('filled');
}
})  