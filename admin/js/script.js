/* Navigation Logic */
$(document).ready(function(){
	if($(window).width() < 768){
		$('.sidebar-column').hide();
	}
	
});
$('.sidebar-action').click(function(){
	var childElement = $(this).children();
	if(childElement.hasClass('open-sidebar')){
		$('.sidebar-column').show();
		$('.sidebar-action').html('<i class="far fa-times-circle close-sidebar sidebar-action-icon"></i>');
	}else if(childElement.hasClass('close-sidebar')){
		$('.sidebar-column').hide();
		$('.sidebar-action').html('<i class="fas fa-ellipsis-v open-sidebar sidebar-action-icon"></i>');
	}
});


$('.btn-add-art').on('click',()=>{
	$('#add-art-modal').modal('show');
});
$('.btn-add-artists').on('click',()=>{
	$('#add-artists-modal').modal('show');
});
/* Just for the Navigation, it will be remove when backend will be done*/ 
$('.dashboard').on('click',function(){
	window.location = "index.html";
});
$('.customers').on('click',function(){
	window.location = "customers.html";
});
$('.users').on('click',function(){
	window.location = "users.html";
});
$('.billing').on('click',function(){
	window.location = "billing.html";
});
$('.arts').on('click',function(){
	window.location = "arts.html";
});
$('.artists').on('click',function(){
	window.location = "artists.html";
});
$('.queries').on('click',function(){
	window.location = "queries.html";
});
$('.shipping').on('click',function(){
	window.location = "shipping.html";
});
$('.reports').on('click',function(){
	window.location = "reports.html";
});