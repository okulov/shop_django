$(document).ready(function() {
	$("header .card>a").bind("click", function(e){
		$('header .card').toggleClass('isopen');	
	    e.preventDefault();
        return false;	
	});
	$(".cart_fav").bind("click", function(e){
		$(this).toggleClass('active');
		e.preventDefault();
        return false;	
	});
	
	$(".one_cart_tovar_cou a").bind("click", function(e){
		parcou=$(this).parent().find('span');
		indx=$(this).data('inc')*1;
		teccou=parcou.data('count')*1;
		newcou=teccou+indx;
		if (newcou<1) newcou=1;
		if (newcou>99) newcou=99;
		parcou.data('count',newcou).attr('data-count',newcou).html(newcou);
		e.preventDefault();
        return false;	
	});
	
	$(".cart_del").bind("click", function(e){
		$(this).parents('.one_cart_tovar').slideUp(200,function(){
			$(this).remove();
		});
		e.preventDefault();
        return false;	
	});

$('body').append("<div id='popselect_window'><div class='sel_pop_close'></div><div class='popselcont'></div></div>");
	
	$('.sel_pop_close').bind("click", function(e){
		close_popup_select();
		e.preventDefault();
        return false;	
	});
	
	$('#popselect_window').hover(
		function(){
			
		},
		function(){
			close_popup_select();
		});
	
	$('.card_sel_selected').bind("click", function(e){
		if ($(this).parent().hasClass('isopen')) close_popup_select();
		else open_popup_select($(this));
		e.preventDefault();
        return false;
	});
	
	$(".popup_card_body").mCustomScrollbar({
		scrollButtons:{
			enable:true
		}
	});
	$('.popup_card_dop').bind("click", function(e){
		$('.popup_card_dop_window').toggleClass('isopen');
		e.preventDefault();
        return false;
	});
	
	if ($('#popup_card_dop_slider').length){
		$('#popup_card_dop_slider').owlCarousel({
							items: 2,
							loop:false,
							margin:15,
							nav:true,
							autoplay:false,
							dots : false,
							navText:new Array("",""),
						});
	}
	
});

function open_popup_select(th){
	if ($('#popselect_window').hasClass('isopen')) close_popup_select();
	selcon=th.parent().find('.popup_select');
	selcon.appendTo("#popselect_window .popselcont");
	sel_obj={};
	sel_obj.w=th.outerWidth();
	sel_obj.h=th.outerHeight();
	sel_obj.o=th.offset();
	$('#popselect_window').css('left',sel_obj.o.left-10);
	$('#popselect_window').css('top',sel_obj.o.top+sel_obj.h-2);
	$('#popselect_window').css('width',sel_obj.w+16);
	$('#popselect_window').addClass('isopen');
	th.parent().addClass('isopen');
	$('#popselect_window .sel_lines').bind("click", function(e){
		if (!$(this).hasClass('active')) {
			$('#popselect_window .sel_lines.active').removeClass('active');
			$(this).addClass('active');
			$('.card_sel_1.isopen .card_sel_selected').html($(this).html());
		}
		close_popup_select();
		e.preventDefault();
        return false;
	});	
}
function close_popup_select(){
	selcon=$('#popselect_window .popup_select');
	selcon.appendTo(".card_sel_1.isopen");
	$('#popselect_window').removeClass('isopen');
	$('.card_sel_1.isopen').removeClass('isopen');
}