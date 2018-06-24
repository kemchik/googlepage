'use strict'

$(document).ready(function(){

	$('body').click((e)=>{
		if($('#app').css('display') === 'none'){
			if(e.target.id === 'spis'){
				$('.spisok').css('display', 'block');
				$('.spisok+.spis_pointer').css('display', 'block');
				$('#app').css('display', 'block');
			}
		} else {
			if(e.target.id === 'app'){
				$('.spisok').css('display', 'none');
				$('.spisok+.spis_pointer').css('display', 'none');
				$('#app').css('display', 'none');
			}
		}
	})

	$('#more').click(()=>{
		$('.spisok').addClass('morespisok');
		$('.spisok').scrollTop(266);
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

	