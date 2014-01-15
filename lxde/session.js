$(function(){
	$('#session_content').click(function(ev){
		if (ev.target.id == "session_button_cancel") {
			$("#lxde_session").hide();
		}
	});
});