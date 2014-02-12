$(document).ready(function() {

	
//Main page

//auto centering for popups
CenterWrap();
function CenterWrap() {
    var boxImages = $('body');
    var boxImagesWidth = boxImages.width();
    var blockLeft = $('.reg_popup');
    	blockLeftWidth = blockLeft.width();
        blockLeft.css('margin-left', (boxImagesWidth-blockLeftWidth)/2 +'px');
}

$(window).resize(function(){
      CenterWrap();
});


$('#reg_popup_opener,.reg_popup_opener').on('click',function(e){
	$("body").animate({"scrollTop":0},1000);
	$('.container,.main-container').addClass('blur');
	$('#reg_popup').fadeIn(200);

	e.preventDefault();
});
$('#reg_popup .button').on('click',function(e){
	$("#reg_popup").fadeOut(200);
	$('#reg_popup_ty').fadeIn(200);
});

$('.reg_popup .close').on('click',function(){
	$(this).parents('.reg_popup ').fadeOut(200);
	$('.container,.main-container').removeClass('blur');
});

$('.popup-tabs .back').on('click',function(){
	$(this).parents('.popup-tabs').hide();
	$('.ident_type_list').show();
});


//Enter form
$('.userbar label').on('click', function(){
	$(this).parent().toggleClass('open');
});


// таблицы в полосатых купальниках
$("table.striped-even").each(function(){
	$(this).find('tr:even').addClass("odd");
});
$("table.striped-odd").each(function(){
	$(this).find('tr:odd').addClass("odd");
});

$('#credit_activity_report .link').on('click',function(e){
	$(this).toggleClass('active');
	$(this).parent().siblings('.hidden').toggleClass('show');
	e.preventDefault();
});

//contentHeight();

//tooltip
$('.general-stats-box').hover(function(){
	$('.general-stats-hint').fadeIn(150);
},function(){
	$('.general-stats-hint').fadeOut(150);
});

$('.general-stats-box figure,.probability_of_approval figure').on('click',function(){
	$(this).parent().find('figure').removeClass('active');
	$(this).addClass('active');
});

$('.tooltip').hover(function(){
	$(this).find('.hint').fadeIn(150);
},function(){
	$(this).find('.hint').fadeOut(150);
});

//get_reference
$('.get_reference').on('click', function(e){
	$('.credits_tabs').hide();
	$('.one_reference').show();

	e.preventDefault();
});

//for tabs select

$('.credits_tabs:not(:first)').fadeOut(300);

$('#credits .nav li').on('click', function(){
var dataTabs = $(this).attr('data-tabs');
$('#credits .nav li').removeClass('active');
$(this).addClass('active');
	$('.credits_tabs').each(function(){
		var contentDataTabs = $(this).attr('data-tabs');
		if(dataTabs == contentDataTabs){
			$('.credits_tabs').hide();
			$(this).show();
		} else;
	});
});


$('#credits .nav li').on('click', function(){
	var dataTab = $(this).data('tabs');
	$('#credits .nav li').removeClass('active');
	$(this).addClass('active');
	$('#credits .tab-shown').hide().addClass('tab-hidden');
	$("#"+dataTab).show().addClass('tab-shown');

});

$('.my_expenses li').on('click', function(){
var dataTabs = $(this).attr('data-my-expenses-tabs');
$('.my_expenses li').removeClass('active');
$(this).addClass('active');
	$('.my-expenses').each(function(){
		var contentDataTabs = $(this).attr('data-my-expenses-tabs');
		if(dataTabs == contentDataTabs){
			$('.my-expenses').addClass('hidden');
			$(this).removeClass('hidden');
		} else;
	});
});

$('#credit_cards > .credit-cards-tabs:not(:first)').hide(500);
$('#consumer-loans > .credit-cards-tabs:not(:first)').hide(500);
$('.one_potr_credit_card').hide(500);
$('#consumer-loans .one_potr_credit_card .credit-cards-tabs:not(:first)').hide(500);
$('#credit_cards .one_potr_credit_card .credit-cards-tabs:not(:first)').hide(500);

$('.credit_cards_tabs li').on('click', function(){

var dataTabs = $(this).attr('data-credit-cards-tabs');
$(this).parent().find('li').removeClass('active');
$(this).addClass('active');
	$(this).parents('.credit_cards_tabs').siblings('.credit-cards-tabs').each(function(){
		var contentDataTabs = $(this).attr('data-credit-cards-tabs');
		if(dataTabs == contentDataTabs){
			$(this).parent().find(' > .credit-cards-tabs').hide();
			$(this).show();
		} else;
	});

});

$('.consumer_credit li').on('click', function(){
var dataTabs = $(this).attr('data-my-rec-tabs');
$('.consumer_credit li').removeClass('active');
$(this).addClass('active');
	$('.my_rec_tabs').each(function(){
		var contentDataTabs = $(this).attr('data-my-rec-tabs');
		if(dataTabs == contentDataTabs){
			$('.my_rec_tabs').addClass('hidden');
			$(this).removeClass('hidden');
		} else;
	});
});

//consumer-loans one credit

$('.one_credit_link,.one_potr_credit_link').on('click', function(e){
	var dataTabs = $(this).attr('data-one-potr-credit-card');

	$(this).parents('.credit-cards-tabs').siblings('.one_potr_credit_card').each(function(){
		var contentDataTabs = $(this).attr('data-one-potr-credit-card');
		if(dataTabs == contentDataTabs){
			$(this).siblings('.one_potr_credit_card').hide();
			$(this).siblings('.internal_tabs,.credit-cards-tabs').hide();
			
			$(this).show();
		} else;
	});
	e.preventDefault();
});

//my_recomendations detalis
$('.my_rec_card_block .details').on('click',function(e){
var dataTabs = $(this).attr('data-tabs-details');
	$('.my_recomendations_detail').each(function(){
		var contentDataTabs = $(this).attr('data-tabs-details');
		if(dataTabs == contentDataTabs){
			$('.my_recomendations_detail').hide();
			$('.my_recomendations_detail').nextAll().hide()
			$(this).show();
		} else;
	});
	e.preventDefault();
});

//partners

$('.arrow_box').on('click',function(e){
var dataTabs = $(this).attr('data-partners-tabs');
$('.arrow_box').removeClass('active');
$(this).addClass('active');
	$('.partners-tab').each(function(){
		var contentDataTabs = $(this).attr('data-partners-tabs');
		if(dataTabs == contentDataTabs){
			$('.partners-tab').hide();
			$(this).slideDown(1600);
		} else;
	});
	e.preventDefault();
});


$('.leave_comment').on('click',function(e){
	$('.main_comment_block').show();
	e.preventDefault();
});

$('.ident_type a').on('click', function(e){
var dataTabs = $(this).parent().attr('data-popup-tabs');

$('.ident_type_list').hide();
	$('.popup-tabs').each(function(){
		var contentDataTabs = $(this).attr('data-popup-tabs');
		if(dataTabs == contentDataTabs){
			$('.popup-tabs').addClass('hidden');
			$(this).show();
		} else;
	});
	e.preventDefault();
});


//credit_term_block

function getPercentOnePage(){

	var barWidth = 0,
		figureWidth = 0,
		postfix = '%';

	    barWidth = parseInt($('.credit_term_block .bar').css('width'));
	    figureWidth = parseInt($('.credit_term_block .bar figure').css('width'));
		var percent = (100*figureWidth)/barWidth;
		var result = Math.round(percent);

		$('.credit_term_block .bar figure').siblings('label').text(result+postfix);
}

getPercentOnePage();

$('.interest_rate .interest_rate').each(function(inx){
	var barWidth = 0,
		figureWidth = 0,
		postfix = '%';

	    barWidth = parseInt($(this).css('width'));
	    figureWidth = parseInt($(this).find('figure').css('width'));


		var percent = (100*figureWidth)/barWidth;
		var result = Math.round(percent);

		$(this).siblings('span').text(result+postfix);
});



//brand switch
$('#general-reports-table td').on('click', function(){
	$(this).parents('#general-reports-table').find('td').removeClass('active');
	$(this).addClass('active');
});
$('.general-reports-table td').on('click', function(){
	$(this).parents('.general-reports-table').find('td').removeClass('active');
	$(this).addClass('active');
});
//сard-operations-table
$('#сard-operations-table figure').on('click', function(){
	$('#сard-operations-table figure').removeClass('active');
	$(this).addClass('active');
});

// RadioButton
$('.radioblock').find('.radio').each(function(){
	$(this).click(function(){
		// Заносим текст из нажатого дива в переменную
		var valueRadio = $(this).data("radio");
		// Находим любой активный переключатель и убираем активность
		$(this).parent().find('.radio').removeClass('active');
		// Нажатому диву добавляем активность
		$(this).addClass('active');
		// Заносим значение объявленной переменной в атрибут скрытого инпута
		$(this).parent().find('input').val(valueRadio);
	});
});

// Checkbox
// Отслеживаем событие клика по диву с классом check
$('.checkboxes').find('.check').click(function(){
	// Пишем условие: если вложенный в див чекбокс отмечен
	console.log('1');
	if( $(this).find('input').is(':checked') || $(this).hasClass('active')) {
		// то снимаем активность с дива
		$(this).removeClass('active');
		// и удаляем атрибут checked (делаем чекбокс не отмеченным)
		$(this).find('input').removeAttr('checked');
		console.log('2');
	// если же чекбокс не отмечен, то
	} else {
		// добавляем класс активности диву
		$(this).addClass('active');
		// добавляем атрибут checked чекбоксу
		$(this).find('input').attr('checked', true);
		console.log('3');
	}
});

$('.checkboxes label').on('click',function(){
	$(this).toggleClass('active');
	$(this).siblings('.check').toggle();
});

// Select
$('.slct').click(function(){
	/* Заносим выпадающий список в переменную */
	var dropBlock = $(this).parent().find('.drop');
		$('.select .drop').slideUp(100);
		$('.select').removeClass('active');
	/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(100);

		/* Выделяем ссылку открывающую select */
		$(this).addClass('active');
		$(this).parent().addClass('active');

		/* Работаем с событием клика по элементам выпадающего списка */
		$('.drop').find('li').click(function(){

			/* Заносим в переменную HTML код элемента
			списка по которому кликнули */
			var selectResult = $(this).html();

			/* Находим наш скрытый инпут и передаем в него
			значение из переменной selectResult */
			$(this).parent().parent().find('input').val(selectResult);

			/* Передаем значение переменной selectResult в ссылку которая
			открывает наш выпадающий список и удаляем активность */
			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			/* Скрываем выпадающий блок */
			dropBlock.slideUp(100);
		});

	/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
	} else {
		$(this).removeClass('active');
		$(this).parent().removeClass('active');
		dropBlock.slideUp(100);
	}

	/* Предотвращаем обычное поведение ссылки при клике */
	return false;
});
$('.select .drop li').on('click',function(){
	$(this).parents('.select').toggleClass('active');
});



//switch 
$(".switch").on("click",function(){
	$(this).toggleClass("on");
});


//определение высоты контента
function contentHeight(){
	$('#credits .nav').height($('#credits').height());
}


// DONUT CHART ACTION

$('body').on('mouseover','.card_chart_figure svg path', function(){
	var text = $(this).siblings('text').text();
	$('.card_chart_figure').prepend('<div class="chart_label"><label>Something</label>'+text+'</div>');
	$('.chart_label').hide().fadeIn(300);
	$(this).parent().siblings().find('path').css('fill-opacity','0.5');
	$(this).css({    
		'transform': 'scale(1.1)',
		'-webkit-transform': 'scale(1.1)',
		'-o-transform': 'scale(1.1)',
		'-moz-transform': 'scale(1.1)',
		'fill-opacity':'1'
	});

});

$('body').on('mouseout','.card_chart_figure svg path', function(){
	$('.card_chart_figure').find('.chart_label').remove();
	$(this).parent().siblings().find('path').css('fill-opacity','1');
	$(this).css({    
		'transform': 'scale(1)',
		'-webkit-transform': 'scale(1)',
		'-o-transform': 'scale(1)',
		'-moz-transform': 'scale(1)',
		'fill-opacity':'1'
	});
});

//donut scale effect
$(".credit_type li").hover(
      function () {

		var ua = navigator.userAgent.toLowerCase(); 
		if (ua.indexOf('safari')!=-1){ 

		} else  $(this).find('figure').addClass('scale1_4');
		      		

			var dataTabs = $(this).attr('data-donut');
			$('.chart_label').show();
        	$('.card_chart_figure svg path').each(function(i,item){
				$(this).attr('data-donut',i);
				var contentDataTabs = $(this).attr('data-donut');

				if(dataTabs == contentDataTabs){
					var text = $(this).siblings('text').text();
					$('.card_chart_figure').prepend('<div class="chart_label"><label>Something</label>'+text+'</div>');
					$(this).parent().siblings('.arc').find('path').css('fill-opacity','0.5');
					$(this).css({    
							'transform': 'scale(1.1)',
							'-webkit-transform': 'scale(1.1)',
							'-o-transform': 'scale(1.1)',
							'-moz-transform': 'scale(1.1)',
							'fill-opacity':'1'
						});

				} else; 

			});

      },
      function () {
      	var ua = navigator.userAgent.toLowerCase(); 
		if (ua.indexOf('safari')!=-1){ 

		} else  $(this).find('figure').removeClass('scale1_4');
			

       		var dataTabs = $(this).attr('data-donut');
		
        	$('.card_chart_figure svg path').each(function(i,item){
				$(this).attr('data-donut',i);
				var contentDataTabs = $(this).attr('data-donut');

				if(dataTabs == contentDataTabs){
					$('.chart_label').remove();

					$(this).css({    
							'transform': 'scale(1)',
							'-webkit-transform': 'scale(1)',
							'-o-transform': 'scale(1)',
							'-moz-transform': 'scale(1)'
						});
	
				} else; 

			});
      }
    );


$(".card_chart_table tr").hover(
      function () {
      		$(this).siblings('tr.data-donut').css('opacity','0.6');
			var dataTabs = $(this).attr('data-donut');
			$('.chart_label').show();

        	$(this).parents('.card_chart_table').siblings('.card_chart_figure').find('path').each(function(i,item){
				$(this).attr('data-donut',i);
				var contentDataTabs = $(this).attr('data-donut');

				if(dataTabs == contentDataTabs){
					var text = $(this).siblings('text').text();
					$('.card_chart_figure').prepend('<div class="chart_label"><label>Something</label>'+text+'</div>');
					$(this).parent().siblings().find('path').css('fill-opacity','0.5');
					$(this).css({    
							'transform': 'scale(1.1)',
							'-webkit-transform': 'scale(1.1)',
							'-o-transform': 'scale(1.1)',
							'-moz-transform': 'scale(1.1)',
							'fill-opacity':'1'
						});
				} else;

			});

      },
      function () {
      		$(this).siblings('tr').css('opacity','1');

       		var dataTabs = $(this).attr('data-donut');
		
        	$(this).parents('.card_chart_table').siblings('.card_chart_figure').find('path').each(function(i,item){
				$(this).attr('data-donut',i);
				var contentDataTabs = $(this).attr('data-donut');

				if(dataTabs == contentDataTabs){
					$('.chart_label').remove();
					$(this).css({    
							'transform': 'scale(1)',
							'-webkit-transform': 'scale(1)',
							'-o-transform': 'scale(1)',
							'-moz-transform': 'scale(1)'
						});
				} else;

			});
      }
    );


$(window).mousemove(function (pos) { 
	//$(".chart_label").css('left',(pos.pageX+20)+'px').css('top',(pos.pageY+20)+'px'); 
}); 



});