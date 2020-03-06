/* Just for the Navigation, it will be remove when backend will be done*/ 
$('.artwork-item-container').on('click',function(){
	window.location = "art-customization.html";
});

$('.btn-accept-sub').on('click',function(){
	window.location = "order-process-cart.html";
});
$('.btn-accept-confirm').on('click',function(){
	window.location = "order-process-checkout.html";
});
$('.btn-accept-check-out').on('click',function(){
	window.location = "order-process-kyc-document.html";
});
$('.btn-upload-kyc-document').on('click',function(){
	window.location = "order-process-cart-payment.html";
});
$('.btn-process-pay').on('click',function(){
	window.location = "index.html";
});

$('.btn-login').on('click',function(){
	window.location = "user/index.html";
});


/* Open Modal*/

$("#add-filter-search").on("click",function(){
	$("#add-filter-search-modal").modal("show");
});
$("#add-sort-search").on("click",function(){
	$("#add-sort-search-modal").modal("show");
});


// accordion js
var $accordionTrigger = $('.single_acco_title a');
$accordionTrigger.on('click', function () {
 $accordionTrigger.not(this).removeClass('active').find('.fas').not($(this).find('.fas')).removeClass('fa-sort-up').addClass('fa-sort-down');
 $(this).toggleClass('active').find('.fas').toggleClass('fa-sort-up fa-sort-down');
});