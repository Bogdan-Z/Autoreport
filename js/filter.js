$(document).ready(function() {

/******************Statistics*******************/
//rating_line
$(".filter").ionRangeSlider({
            min: 300,
            max: 850,
            type: 'single',
            step: 1,
            prefix: "",
			hideMinMax: true,               // спрятать поля Min и Max
			hideFromTo: false, 
            prettify: true,
            hasGrid: false
});

$(".credit_limit_filter,.autocredit_limit_filter").ionRangeSlider({
            min: 0,
            max: 1500000,
            type: 'double',
            step: 1,
            prefix: "",
			hideMinMax: true,               // спрятать поля Min и Max
			hideFromTo: true, 
            prettify: true,
            hasGrid: false

});

$(".interest_rate_filter").ionRangeSlider({
            min: 0,
            max: 100,
            type: 'double',
            step: 1,
            postfix: "%",
			hideMinMax: true,               // спрятать поля Min и Max
			hideFromTo: true, 
            prettify: true,
            hasGrid: false
});

$(".cost_of_service_filter").ionRangeSlider({
            min: 0,
            max: 5000,
            type: 'double',
            step: 1,
            prefix: "",
			hideMinMax: true,               // спрятать поля Min и Max
			hideFromTo: true, 
            prettify: true,
            hasGrid: false
});

$(".review_time").ionRangeSlider({
            min: 0,
            max: 14,
            type: 'double',
            step: 1,
            prefix: "",
                  hideMinMax: true,               // спрятать поля Min и Max
                  hideFromTo: true, 
            prettify: true,
            hasGrid: false
});

$(".credit_term").ionRangeSlider({
            min: 1,
            max: 360,
            type: 'double',
            step: 1,
            postfix: "мес",
                  hideMinMax: true,               // спрятать поля Min и Max
                  hideFromTo: true, 
            prettify: true,
            hasGrid: false
});

//Conditions for cards sliders

$('.search_options').on('keyup', '.creditLimitFilter.left', function(event) {
      var val = $(this).val();
      if(val>0 && val<1500000){
            $(this).siblings('figure').find('input').ionRangeSlider("update", {
            from: val
            });
      }
});

$('.search_options').on('keyup', '.creditLimitFilter.right', function(event) {
      var val = $(this).val();
      if(val>0 && val<1500000){
            $(this).siblings('figure').find('input').ionRangeSlider("update", {
            to: val
            });
      }
});


$('.search_options').on('keyup', '.interestRateFilter.left', function(event) {
      var val = $(this).val();
       if(val>0 && val<100){
            $(this).siblings('figure').find('input').ionRangeSlider("update", {
            from: val
            });
      }
});

$('.search_options').on('keyup', '.interestRateFilter.right', function(event) {
      var val = $(this).val();
       if(val>0 && val<100){
            $(this).siblings('figure').find('input').ionRangeSlider("update", {
            to: val
            });
      }
});


$('.search_options').on('keyup', '.costOfServiceFilter.left', function(event) {
      var val = $(this).val();
      if(val>0 && val<5000){
            $(this).siblings('figure').find('input').ionRangeSlider("update", {
            from: val
            });
      }
});

$('.search_options').on('keyup', '.costOfServiceFilter.right', function(event) {
      var val = $(this).val();
      if(val>0 && val<5000){
            $(this).siblings('figure').find('input').ionRangeSlider("update", {
            to: val
            });
      }
});


$('.search_options').on('keyup', '.reviewTime.left', function(event) {
      var val = $(this).val();
      if(val>=1 && val<=14){
            $(this).siblings('figure').find('input').ionRangeSlider("update", {
            from: val
            });
      }
});

$('.search_options').on('keyup', '.reviewTime.right', function(event) {
      var val = $(this).val();
      if(val>=1 && val<=14){
            $(this).siblings('figure').find('input').ionRangeSlider("update", {
            to: val
            });
      }
});


function removeWhitespaces(str) 
{
      var res = str.replace(/\s/g, "");
      return res;
}

$('.irs-slider.last').on('click',function(){
      var max = $(this).parents('figure').find('.end').text();
      var maxValue = removeWhitespaces(max);
      var value = parseFloat($(this).css('left'));

      var realValue = parseInt(value*maxValue/332);
      var realValuePx = realValue +'px';
      $(this).parents('figure').siblings('.left').val(realValue);
});

$('.irs-slider.to').on('click',function(){
      var max = $(this).parents('figure').find('.end').text();
      var maxValue = removeWhitespaces(max);
      var value = parseFloat($(this).css('left'));

      var realValue = parseInt(value*maxValue/332);
      var realValuePx = realValue +'px';
      $(this).parents('figure').siblings('.right').val(realValue);
});

$('.search_options .left').on('focus', function(){
      $(this).val('');
});

$('.search_options .right').on('focus', function(){
      $(this).val('');
});


});