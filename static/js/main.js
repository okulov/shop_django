$(document).ready(function(){
	$('.actf').click(function() {
		if($(this).attr('data-trigger') === 'true') {
			$('.actf[data-trigger="true"]').attr('data-trigger', "false");
			return true;
		}
		else {
			$('.actf[data-trigger="true"]').attr('data-trigger', "false");
			$('.dwn').css('display', 'none');
			$(this).parent().find('.dwn').fadeIn(300);
			$(this).attr('data-trigger', "true");
		}
		return false;
	});

	$('.clickf').click(function(){
		$(this).css('display', 'none');
		$('.bnt2').css('display', 'flex');
		return false;
	});

	$(window).scroll(function() {
		var height = $(window).scrollTop();
		if(height > 700){
			$('.wrapper-card').removeClass('hid');
		} else{
			$('.wrapper-card').addClass('hid');
		}
	});


	$('.srd').click(function(){
		$('.form').css('display', 'block');
		$('.right').addClass('ins');
	});

	$('.tabs a').click(function() {
		var data = $(this).attr('data-page');
		$('.inner-bodys.shows').removeClass('shows');
		$('.tabs a.active').removeClass('active');
		$(this).addClass('active');
		$('#' + data).addClass('shows').fadeIn(500);
		return false;
	});

	$('.tbs2 a').click(function(){
		var data = $(this).attr('data-pag');
		$('.body-tbs.fd').removeClass('fd');
		$('.tabs a.active').removeClass('active');
		$(this).addClass('active');
		$('#e' + data).addClass('fd').fadeIn(500);
		return false;
	});
	$('.cus').click(function(){
		var idpid = $(this).attr('id');
		var pide = 'e' + idpid;
		$('.cui').css('display', 'none');
		$('#' + pide).css('display', 'block');
	});

	$('.cus').click(function(){
		var idCus = $(this).attr('id');
		$('.cui').css('display', 'none');
		$('#e' + idCus).fadeIn(200);
	});

	$('.item-qu').click(function(){
		if(!$(this).hasClass('clk')) {
			$(this).addClass('clk');
			$(this).find('.pls').text('-');
			$(this).find('.tatqu').fadeIn(200);
		} else {
			$(this).removeClass('clk');
			$(this).find('.pls').text('+');
			$(this).find('.tatqu').fadeOut(200);
		}

	});

	$('.inner-tbsd a').click(function(){
		var idTbs = $(this).attr('data-tbsd');
		$('.inner-tbsd a.active').removeClass('active');
		$(this).addClass('active');
		$('.linestd2.active').removeClass('active');
		$('#' + idTbs).addClass('active');
		return false;
	});

	$('.drwed').hover(
		function(){
			
		},
		function(){
			$(this).fadeOut(100);
		});

	$('.ic2 a').click(function(){
		$(this).addClass('active');
		return false;
	});
	var countClick = 0;

	$('.fl a').click(function(){
		if(countClick == 0) {
			$(this).parent().find('.flit').fadeIn(300);
			countClick++;
			$(this).find('span').text('-');
			$('.fl a.active').removeClass('active');
			$(this).addClass('active');
		} else {
			$(this).parent().find('.flit').fadeOut(300);
			countClick--;
			$(this).find('span').text('+');
			$('.fl a.active').removeClass('active');
		}
		return false;
	});

	if ($("#polzunok").length){
 $("#polzunok").slider({
		animate: "slow",
		range: true,    
		values: [ 0, 100 ],
		slide : function(event, ui) {   
			var in1 = $('#1'); 
			var in2 = $('#2'); 
			in1.attr('value', 'от ' + ui.values[ 0 ]);
			in2.attr('value', 'от ' + ui.values[ 1 ]); 
		}
	});
	}

	$('.cls').click(function(e){
		$(this).parent().fadeOut(100);
		e.stopPropagation();
	});

	$('.ln').click(function(){
		$(this).find('.drwed').fadeIn(300);
	}); 

if ($("#polzunok2").length){
	$("#polzunok2").slider({
		animate: "slow",
		range: true,    
		values: [ 0, 100 ],
		slide : function(event, ui) {   
			var in1 = $('#3'); 
			var in2 = $('#4'); 
			in1.attr('value', 'от ' + ui.values[ 0 ]);
			in2.attr('value', 'от ' + ui.values[ 1 ]); 
		}
	});
}

if ($("#polzunok3").length){
	$("#polzunok3").slider({
		animate: "slow",
		range: true,    
		values: [ 0, 100 ],
		slide : function(event, ui) {   
			var in1 = $('#5'); 
			var in2 = $('#6'); 
			in1.attr('value', 'от ' + ui.values[ 0 ]);
			in2.attr('value', 'от ' + ui.values[ 1 ]); 
		}
	});
}

$('.trigh').click(function(){
	if($(this).parent().find('.fadetit').hasClass('clsd')){
		$('.addplusd').find('.fadetit').addClass('clsd');
		$('.addplusd').find('.trigh strong').text('+');
		$('.prewsd12 .circt').css('top', '-302px');
		$(this).parent().find('.fadetit').removeClass('clsd');
		$(this).parent().find('.trigh strong').text('-');
	} else {
		$(this).parent().find('.fadetit').addClass('clsd');
		$('.prewsd12 .circt').css('top', '-105px');
		$(this).parent().find('.trigh strong').text('+');
	}
});
});