var counter = $('.selected').length;
var water = 57200
var grain = 2340
var land = 1560
var co2 = 1040
var animal = 26




function selectDay(){
    $(this).toggleClass('selected')
        if ($(this).hasClass('selected')) {
        $(this).children().css('visibility','hidden');

        }

        else {
            $(this).children().css('visibility','visible')
        }
	  

	counter = $('.selected').length;
	$('#counter').text(counter);
	calculateWater();
	calculateGrain();
	calculateLand();
	calculateCo2();
	calculateAnimal();

    if (counter>1) {
        $('#day').text('days');
    }
    else {
        $('#day').text('day');
    }
	}




function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


function calculateWater(){
	waterResult = water*counter;


 	$('#waterSpan').countTo({
            from: 0,
            to: waterResult,
            speed: 2500,
            refreshInterval: 40,
            onComplete: function(value) {
                console.debug(this);
            }
        });

    waterResult= numberWithCommas(waterResult);

    console.log(waterResult)
	
	}



function calculateGrain(){

	grainResult = grain*counter;
    $('#grainSpan').countTo({
            from: 0,
            to: grainResult,
            speed: 2500,
            refreshInterval: 40,
            onComplete: function(value) {
                console.debug(this);
            }
        });

	}


function calculateLand(){
	landResult = land*counter;
	$('#landSpan').countTo({
            from: 0,
            to: landResult,
            speed: 2500,
            refreshInterval: 40,
            onComplete: function(value) {
                console.debug(this);
            }
        });
	}

function calculateCo2(){
	co2Result = co2*counter;
	$('#co2Span').countTo({
            from: 0,
            to: co2Result,
            speed: 2500,
            refreshInterval: 40,
            onComplete: function(value) {
                console.debug(this);
            }
        });
	}

function calculateAnimal(){
	animalResult = animal*counter;
	$('#animalSpan').countTo({
            from: 0,
            to: animalResult,
            speed: 2500,
            refreshInterval: 40,
            onComplete: function(value) {
                console.debug(this);
            }
        });
	
	}



$(document).ready(function(){
	$('.weekDay').on('click',selectDay);
	
	 (function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);



});
	


