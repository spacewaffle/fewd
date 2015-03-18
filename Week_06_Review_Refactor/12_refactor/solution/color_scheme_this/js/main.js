function switchTheme() {
    var theme = $(this).attr('class');
    $('body').attr('class', theme);
	}
$(function(){
	$('#switcher li').click(switchTheme);
});