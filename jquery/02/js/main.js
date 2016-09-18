//css()
/*
$(function () {
	$('#typo').css('color','#ebc000');
})

$(function(){ 
	$('.inner').css('opacity',0.5); 
}); 
*/

//실행시점 제어
/*
$(function(){
	
	$('#typo').on('mouseover',function(){
		$('#typo').css({
			color :'#E310E1',
			backgroundColor:'#ae5e9b'
		});
	})
	.on('mouseout',function(){
		$('#typo').css({
			color :'',
			backgroundColor:''
		});
	});
});
*/

//애니메이션 구현
/*
$(function(){
	
	$('#typo .inner').on('click',function(){
		$('#typo .inner').animate({
			opacity :0,
			fontSize:'0px'
		}, 1500
		);
	});
});
*/
$(function(){
	$('#typo .inner')
	.css('top', '-100px')
	.on('click',function(){
		$('#typo .inner').animate({
			top : '100px'
		}, 1500, 'linear',
		function(){
			$('#typo .inner').animate({top : '0px' }, 500);
		}
		);
	});
});