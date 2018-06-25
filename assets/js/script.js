'use strict'

$(document).ready(function(){

	$('body').click((e)=>{
		if($('#app').css('display') === 'none'){
			if(e.target.id === 'spis'){
				$('.spisok').css('display', 'block');
				$('.spisok+.spis_pointer').css('display', 'block');
				$('#app').css('display', 'block');
				$('.spisok').scrollTop(0);
				$('.spisok').removeClass('morespisok');
			}
		} else {
			if(e.target.id === 'app'){
				$('.spisok').css('display', 'none');
				$('.spisok+.spis_pointer').css('display', 'none');
				$('#app').css('display', 'none');
			}
		}
	})

	$('#li_earth').bind('mouseover', ()=>{
		$('#li_earth>span:nth-child(2)').text('Планета Земля');
	});

	$('#li_earth').bind('mouseout', ()=>{
		$('#li_earth>span:nth-child(2)').text('Планета Зе..');
	});

	$('#more').click(()=>{
		$('.spisok').addClass('morespisok');

		let scroll = 0;
		let timerId = setInterval(function() {
			scroll += 5
		  $('.spisok').scrollTop(scroll);
		  if(scroll >= 265){
			 clearInterval(timerId);
		  }
		}, 3);		
		
	})

	$('.spisok').bind('wheel', ()=>{
		$('.spisok').addClass('morespisok');
	})

	$('.spisok').bind('scroll', ()=>{
		
		if($('.spisok').scrollTop() === 0){
			$('.spisok').removeClass('morespisok');
		}
		}
	)

})

	