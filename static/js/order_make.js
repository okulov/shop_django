var order_make={};
order_make.tekstep=1;

var noand=true;
if (navigator.userAgent.match(/Android/i)) noand=false;


$(document).ready(function(){
if ($('input[type="tel"]').length) {
	$('input[type="tel"]').toArray().forEach(function (item) {
		if (item.getAttribute('data-phone')) return;
		item.setAttribute('data-phone', 'cleave');
		var cleave = new Cleave(item,{
			prefix: '+7',
			numericOnly: true,
			blocks: [2, 3, 3, 2, 2],
			delimiters: [" (", ") ", " - ", " - "],
			noImmediatePrefix: noand,
		});
	});
}
	
$('.step_marker').bind("click",function(e){
	n=$(this).data('step');
	n=parseFloat(n);
	if (order_make.tekstep>n) set_order_step(n);
	e.preventDefault();
	return false;	
});
$('.make_step1_soc>a').bind("click",function(e){
	set_order_step(2);
	e.preventDefault();
	return false;		
});

$(".step1_next").bind("click",function(e){
	var st_email=$('.make_step1_left input[name=email]').val();
	st_email=$.trim(st_email);
	if (st_email==="") $('.make_step1_left input[name=email]').focus();
	else if (!isValidEmailAddress(st_email)) $('.make_step1_left input[name=email]').focus();
	else set_order_step(2);
	e.preventDefault();
	return false;
});


$(".step2_next").bind("click",function(e){
	var phone=$('.input_block_phone input').val();
	phone=$.trim(phone);	
	phone=phone.replace(/[^0-9]/g,'');
	if (phone.length!=11){
		$('.input_block_phone input').focus();
		e.preventDefault();
		return false;	
	}
	if ($('.input_block_adress input[name=adress]').is(':enabled')){
		var addr=$('.input_block_adress input[name=adress]').val();
		addr=$.trim(addr);
		if (addr.length<10){
			$('.input_block_adress input[name=adress]').focus();
			e.preventDefault();
			return false;
		}
	}
	set_order_step(3);
	e.preventDefault();
	return false;
});


$(".dost_select a").bind("click",function(e){
	if (!$(this).hasClass('active')){
		var dt_dos=$(this).data("dost");
		$(".dost_select a.active").removeClass('active');
		$(this).addClass('active');
		
		$('.dost_all_block>div.active input, .dost_all_block>div.active textarea, .dost_all_block>div.active select').prop('disabled', true);
		$('.dost_all_block>div.active').removeClass('active');
		$('.dost_all_block>div[data-dost='+dt_dos+']').addClass('active');
		$('.dost_all_block>div.active input, .dost_all_block>div.active textarea, .dost_all_block>div.active select').prop('disabled', false);
	}
	e.preventDefault();
	return false;
});

		$('.dost_all_block>div input, .dost_all_block>div textarea, .dost_all_block>div select').prop('disabled', true);
		$('.dost_all_block>div.active input, .dost_all_block>div.active textarea, .dost_all_block>div.active select').prop('disabled', false);	
	
	
});

function set_order_step(n){
n=parseFloat(n);
order_make.tekstep=n;
$('.step_marker.step_active').removeClass('step_active');
if (n>=1) $(".step_marker[data-step=1]").addClass('step_active');
if (n>=2) $(".step_marker[data-step=2]").addClass('step_active');
if (n>=3) $(".step_marker[data-step=2]").addClass('step_active');
$('.order_make_progressbar>div').css('width',(n-1)*40+"%");
$('.order_make_tab.active_tab').removeClass('active_tab');
$('.order_make_tab[data-step='+n+']').addClass('active_tab');

return;	
}

function test_order_form(){
	if (order_make.tekstep<3) return false;
	return true;
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
    }
	
function set_th_point(n){
	if (!$(".radio_galka input[value="+n+"]").is(':checked')){
		$(".radio_galka input:checkbox:checked").prop('checked', false);
		$(".radio_galka input[value="+n+"]").prop('checked', true);
		
	}
	 o_map.balloon.close();
	return false;
}
	
	