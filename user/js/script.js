
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


/* Just for the Navigation, it will be remove when backend will be done*/ 
$('.myaccount').on('click',function(){
	window.location = "index.html";
});

$('.myorder').on('click',function(){
	window.location = "order.html";
});
$('.myquery').on('click',function(){
	window.location = "queries.html";
});
$('.mykyc').on('click',function(){
	window.location = "kyc.html";
});

$('.btn-get-invoice').on('click',function(){
	window.location = "invoice.html";
});
