$(window).load(function(){
	$('.load').fadeOut(400);
});
$(document).ready(function() {
	function main_tabs () {
		$(".tabs_item>a").on('click', function(e){
			e.preventDefault();
			$(".tabs_item>a").removeClass('active');
			$(this).addClass('active');
			var active = $(this).attr('href');
			$(".first_column-main>.first_column-content").each(function(){
				var data = $(this).data('tab');
				if (data === active){
					$(this).addClass('tabs-active');
				} else {
					$(this).removeClass('tabs-active');
				};
			})
		})
	};
	main_tabs();
	$(".custom-scroll").niceScroll({
		cursorcolor: "#828995",
		cursorborder: "1px solid rgba(79, 88, 106, 0.29)",
		cursorborderradius: "0",
		cursorwidth: "6px",
		railoffset: "left: 56px"
	});
	function view_control() {
		$(".sport_list").find('.country_list').hide();
		$(".country_list").find('.liga_list').hide();
		$(".liga_list").find('.table_wrap').hide();
		$(".sport_list>li>.sport").on('click', function(e){
			e.preventDefault();
			$(this).next().slideToggle(400);
			$(this).toggleClass('open');
		});
		$(".country_list>li>.country").on('click', function(e){
			e.preventDefault();
			$(this).next().slideToggle(400);
			$(this).toggleClass('open');
		});
		$(".liga_list>li>.liga").on('click', function(e){
			e.preventDefault();
			$(this).next().slideToggle(400);
			$(this).toggleClass('open');
		});
		$('.view').on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('greed');
			$('.first_column-content>.tables').toggleClass('control_list-view');
			$('.first_column-content>.lists').toggleClass('control_list-view');
		});
		$(".rate_list>.rate_item>.rate_item-opt").hide();
		$(".rate_item-name").on('click', function(e){
			e.preventDefault();
			$(this).next().slideToggle(400);
			$(this).find(".arrow-i").toggleClass('rotated');
		});	
		$(".third_column-top>.control>.btn-control").on('click', function(e){
			e.preventDefault();
			if($(".coupon_settings").is(':visible')){
				$(".coupon_settings").slideUp(400);
			}else{
				$(".coupon_settings").slideDown(400);
			};
		});
		$(".user_item").on('click', function(e){
			e.preventDefault();
			$(".user_control").fadeToggle(400);
		});
		$(".tables tbody").find('tr').on('click', function(e){
			e.preventDefault();
			$(".tables tbody").find('td').removeClass('active-cell');
			$(this).find('td').toggleClass('active-cell');
		});
		$(".lists_dropdown-table tbody").find('tr').on('click', function(e){
			e.preventDefault();
			$(".lists_dropdown-table tbody").find('td').removeClass('active-cell');
			$(this).find('td').toggleClass('active-cell');
		});
		$(".rate_item-opt-cell").on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('active-cell');
		});
	};
	view_control();
	function set_span_sistem () {
		var text_f = $(".radio-sistem-w .css-radio:checked").attr('value');
		$(".for-sistem").removeClass('sistem-checked');
		$("."+text_f).addClass('sistem-checked');
	};
	set_span_sistem();
	$(".radio-sistem-s").on('click', function(e){
		e.preventDefault();
		$(".radio-sistem-down").slideToggle(400);
	});
	$(".radio-sistem-w .css-radio").on('click', function(e){
		set_span_sistem();
	})

	function set_sistem(){
		$(".sistems-choose-item").on("click",function(e){
			e.preventDefault();
			$(".sistems-choose-w").slideToggle(400);
		});
		$(".sistem-item").on("click",function(e){
			$(".sistem-item").removeClass('sistem-active');
			$(this).addClass('sistem-active');
			var choosen = $(this).data('sistem');
			$(".sistems-choose-s").removeClass('sistem-choosen');
			$(".column_top-h").removeClass('sistem-choosen');
			$(".third_column-main").removeClass('sistem-choosen');
			$(".radio-sistem").removeClass('sistem-choosen');
			$("."+choosen).addClass('sistem-choosen');
		});
	};
	set_sistem();
})