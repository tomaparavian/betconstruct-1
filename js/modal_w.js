$(document).ready(function(){
	function modal_w_control () {
		$(".control-list-item-btn").on('click', function(e){
			e.preventDefault();
			if($(this).next().hasClass('modal-sort-active'))
			{
				$(this).next().removeClass('modal-sort-active').hide();
			} else{
				$(".control_fade").removeClass('modal-sort-active').hide();
				$(this).next().addClass('modal-sort-active').fadeIn(400);
			}
		});
		function set_span_text () {
			var value = $(".item-type .css-radio:checked").attr('value');
			$(".item-type .css-radio + label.css-label").css('background-position', '0 0');
			$(".item-type .css-radio:checked + label.css-label").css('background-position', '0 -16px');
			$(".item-type-btn").find('.item-type-btn-v').each(function(){
				($(this).hasClass(value)) ? $(this).addClass('item-type-active'): $(this).removeClass('item-type-active');
			});
		}
		set_span_text();
		$(".item-type .css-radio").on('click', function(e){
			e.preventDefault();
			set_span_text();
		});
		$('#celendar-1').jdPicker({ 
     	date_format:"dd.mm.YYYY",
     	month_names: ["Январь","Февраль","Март","Апрель","Май","Июнь",
			"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
			short_day_names: ["В","П","В","С","Ч", "П", "С"],
		});
		$('#celendar-2').jdPicker({ 
     	date_format:"dd.mm.YYYY",
     	month_names: ["Январь","Февраль","Март","Апрель","Май","Июнь",
			"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
			short_day_names: ["В","П","В","С","Ч", "П", "С"],
		});
		$('#celendar-3').jdPicker({ 
     	date_format:"dd.mm.YYYY",
     	month_names: ["Январь","Февраль","Март","Апрель","Май","Июнь",
			"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
			short_day_names: ["В","П","В","С","Ч", "П", "С"],
		});
		$('#celendar-4').jdPicker({ 
     	date_format:"dd.mm.YYYY",
     	month_names: ["Январь","Февраль","Март","Апрель","Май","Июнь",
			"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
			short_day_names: ["В","П","В","С","Ч", "П", "С"],
		});
		$('#celendar-5').jdPicker({ 
     	date_format:"dd.mm.YYYY",
     	month_names: ["Январь","Февраль","Март","Апрель","Май","Июнь",
			"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
			short_day_names: ["В","П","В","С","Ч", "П", "С"],
		});
		$('#timepicker-1').timepicker();
		$('#timepicker-2').timepicker();
		$('#timepicker-3').timepicker();
		$('#timepicker-4').timepicker();
		function set_clock_value(wrap){
			var that = {
				wrap : wrap
			};
			that.wrap.children('.minutes-btn').on('click', function(e){
				e.preventDefault();
				var time = that.wrap.children(".timepicker").attr('value');
				var minutes = time[3]+time[4];
				var hours = parseInt(time[0]+time[1]);
				var sec = time[6]+time[7];
				if ($(this).data('dir')==='next'){
						(hours+1 >= 24) ? hours=0 : hours++ ;
					} else{
						(hours-1 <= 0) ? hours=24 : hours-- ;
					}
				if(hours<10){
					hours = '0'+hours;
				}
				time = hours+':'+minutes+':'+sec;
				that.wrap.children(".timepicker").attr('value',time).val(time);
			});
		}
		set_clock_value($('.time-wrap-1'));
		set_clock_value($('.time-wrap-2'));
		set_clock_value($('.time-wrap-3'));
		set_clock_value($('.time-wrap-4'));
		function set_head_value(){
			$(".time-1").text($(".timepicker-1").attr('value'));
			$('.time-wrap').on('click',function(e){
				e.preventDefault();
				$(".time-1").text($(".timepicker-1").attr('value'));
			});
			$(".date-1").text($(".selected").attr('date'));
			$('.celendar-wrap').on('click',function(e){
				e.preventDefault();
				$(".date-1").text($("#celendar-1").attr('value'));
			});

			$(".time-2").text($(".timepicker-2").attr('value'));
			$('.time-wrap').on('click',function(e){
				e.preventDefault();
				$(".time-2").text($(".timepicker-2").attr('value'));
			});
			$(".date-2").text($(".selected").attr('date'));
			$('.celendar-wrap').on('click',function(e){
				e.preventDefault();
				$(".date-2").text($("#celendar-2").attr('value'));
			});

			$(".time-3").text($(".timepicker-3").attr('value'));
			$('.time-wrap').on('click',function(e){
				e.preventDefault();
				$(".time-3").text($(".timepicker-3").attr('value'));
			});
			$(".date-3").text($(".selected").attr('date'));
			$('.celendar-wrap').on('click',function(e){
				e.preventDefault();
				$(".date-3").text($("#celendar-3").attr('value'));
			});

			$(".time-4").text($(".timepicker-4").attr('value'));
			$('.time-wrap').on('click',function(e){
				e.preventDefault();
				$(".time-4").text($(".timepicker-4").attr('value'));
			});
			$(".date-4").text($(".selected").attr('date'));
			$('.celendar-wrap').on('click',function(e){
				e.preventDefault();
				$(".date-4").text($("#celendar-4").attr('value'));
			});
			$('.celendar-wrap-birthday').on('click',function(e){
				e.preventDefault();
				$("#celendar-birthday").attr("value", $("#celendar-5").attr('value'))
			});
		}
		set_head_value();

		$('.coupons').on('click', function(e){
			e.preventDefault();
			if($('.modal_window-coupons1').hasClass('modall-active')){
				$('.modal_window-coupons1').removeClass('modall-active').parent(".modal_windows").hide();
			}else{
				$('.mw-view ').removeClass('modall-active').parent(".modal_windows").hide();
				$('.modal_window-coupons1').addClass('modall-active').parent(".modal_windows").fadeIn(400);
			}
		});
		$('.modal_window-coupons1 .btn-close').on('click',function(e){
			e.preventDefault();
			$('.modal_window-coupons1').removeClass('modall-active').parent(".modal_windows").hide();
		});
		$('.calculations ').on('click', function(e){
			e.preventDefault();
			if($('.modal_windows-calc').hasClass('modall-active')){
				$('.modal_windows-calc').removeClass('modall-active').parent(".modal_windows").hide();
			}else{
				$('.mw-view ').removeClass('modall-active').parent(".modal_windows").hide();
				$('.modal_windows-calc').addClass('modall-active').parent(".modal_windows").fadeIn(400);
			}
		});
		$(".modal_windows-calc .btn-close").on('click', function(e){
			e.preventDefault();
			$('.modal_windows-calc ').removeClass('modall-active').parent(".modal_windows").hide();
		});
		$('.deferred').on('click', function(e){
			e.preventDefault();
			if($('.resc').hasClass('modall-active')){
				$('.resc').removeClass('modall-active').parent(".modal_windows").hide();
			}else{
				$('.mw-view ').removeClass('modall-active').parent(".modal_windows").hide();
				$('.resc').addClass('modall-active').parent(".modal_windows").fadeIn(400);
			}
		});
		$('.resc .btn-close').on('click',function(e){
			e.preventDefault();
			$('.resc').removeClass('modall-active').parent(".modal_windows").hide();
		});
		$('.clients').on('click', function(e){
			e.preventDefault();
			if($('.modal_windows-clients').hasClass('modall-active')){
				$('.modal_windows-clients').removeClass('modall-active').parent(".modal_windows").hide();
			}else{
				$('.mw-view ').removeClass('modall-active').parent(".modal_windows").hide();
				$('.modal_windows-clients').addClass('modall-active').parent(".modal_windows").fadeIn(400);
			}
		});
		$(".modal_windows-clients .btn-close").on('click', function(e){
			e.preventDefault();
			$('.modal_windows-clients ').removeClass('modall-active').parent(".modal_windows").hide();
		});
	}
	modal_w_control();
	function detals_table(){
		$(".table-cont>.table-row").on('click',function(e){
			e.preventDefault();
				$('.table-cell').removeClass('active-cell');
				$(this).find('.table-cell').addClass('active-cell');
				if($(this).find('.table-row-hidden').hasClass('table-row-hidden-active'))
				{
					$(this).find('.table-cell>.arrow').removeClass('rot-arrow');
					$(this).find('.table-row-hidden').removeClass('table-row-hidden-active').slideUp(400);
				} else{
					$('.table-cell>.arrow').removeClass('rot-arrow');
					$(this).find('.table-cell>.arrow').addClass('rot-arrow');
					$(".table-row-hidden").removeClass('table-row-hidden-active').slideUp(400);
					$(this).find('.table-row-hidden').addClass('table-row-hidden-active').slideDown(400);
				}
		});
	}
	detals_table();

	$(".table-control").on('click',function(e){
		e.preventDefault();

		if($(".table-control-wrap").hasClass('table-control-wrap-a')){
			$(".table-control-wrap").removeClass('table-control-wrap-a').slideUp(400);
		} else{
			$(".table-control-wrap").addClass('table-control-wrap-a').slideDown(400);
		}
	});
	$(document).mouseup(function (e) {
		e.preventDefault();
		var container = $(".empty-cell-c");
		if (container.has(e.target).length === 0){
			container.find(".table-control-wrap").removeClass('table-control-wrap-a').fadeOut(400);
		}
		if ($(".control_fade").has(e.target).length === 0){
			$(".control_fade").fadeOut(400);
		}
		if ($(".coupon_settings").has(e.target).length === 0){
			$(".coupon_settings").fadeOut(400);
		}
		if ($(".sistems-choose").has(e.target).length === 0){
			$(".sistems-choose-w").fadeOut(400);
		}
		if ($(".radio-sistem").has(e.target).length === 0){
			$(".radio-sistem-down").fadeOut(400);
		}
		if ($(".user").has(e.target).length === 0){
			$(".user_control").fadeOut(400);
		}
		if ($(".wrap-birthday").has(e.target).length === 0){
			$(".celendar-wrap-birthday").fadeOut(400);
		}
	});
		function set_w_t(wrap){
			$(".modal_window-content .table-row",wrap).css('width', $(".modal_window-content").css('width'));
			var w = 0;
			var proc=0;
			var row_w = 0;
			var len = 0;
			var first_cell=0;
			row_w = parseFloat($(".modal_window-content .table-row",wrap).width());
			function set_w_value(){
				$(".table-head .table-row",wrap).children(".table-cell-a").each(function(){
					if($(this).hasClass('empty-cell')){
						first_cell=parseFloat($(this).css('min-width'));
					}else{
						proc=proc+parseFloat($(this).css('min-width'));
						len++;
					}
				});
				row_w = parseFloat($(".modal_window-content .table-row",wrap).css('width'));
			}
			set_w_value();
			var cut;
			if(first_cell>10){
				first_cell=first_cell*100/row_w;
				proc=proc*100/row_w;
				cut = (100-first_cell-proc)/len;
				var wtf=0;
				$(".modal_window-content .table-row",wrap).css('width', row_w)
				var i = 0;
				$(".modal_window-content .table-row",wrap).find(".table-cell-a").each(function(){
					var a;
					if($(this).hasClass('empty-cell')){
						$(this).css('width', first_cell+"%");
					}else{
						a= parseFloat($(this).css('min-width'))*100/row_w;
						$(this).css('width', a+cut-0.005+"%");
						wtf+=a+cut;
					}
				});
			} else{
				cut = (100-first_cell-proc)/len;
				$(".modal_window-content .table-row",wrap).css('width', row_w);
				var i = 0;
				$(".modal_window-content .table-row",wrap).find(".table-cell-a").each(function(){
					var a;
					if($(this).hasClass('empty-cell')){
						$(this).css('width', first_cell+"%");
					}else{
						a= parseFloat($(this).css('min-width'));
						$(this).css('width', a+cut+"%");
					}
				});

			}
		}
	var cont1 = $(".modal_window-coupons1 .modal_window-content>.table-head>.table-row>.empty-cell>.table-control-wrap");
	var cont2 = $(".resc .modal_window-content>.table-head>.table-row>.empty-cell>.table-control-wrap");

	var active;
	function set_active(cont, par){
		var len = 0;
		$(".css-checkbox", cont).each(function(){
			if($(this).prop("checked")){
				len++;
			}
		});
		$(".css-checkbox", cont).each(function(){
			active = $(this).data('class');
			if($(this).prop("checked")){
				if(len<2){
					$(this).attr('disabled', 'disabled');
				}else{ 
					$(this).removeAttr('disabled');
					$(par+active).addClass('table-cell-a');
				}
				
			} else {
				$(par+active).removeClass('table-cell-a');
			}
		});
	}

	$(".css-checkbox", cont1).click(function(e){
		set_active(cont1,".modal_window-coupons1 .");
		set_w_t($('.modal_window-coupons1'));
	});
	$(window).resize(function(){
		if($(".resc").hasClass('modall-active')){
			set_w_t($('.resc'));
		}
		if($(".modal_window-coupons1").hasClass('modall-active')){
			set_w_t($('.modal_window-coupons1'));
		}
	});
	$(".css-checkbox", cont2).click(function(e){
		set_active(cont2,".resc .");
		set_w_t($('.resc'));
	});





	$('.modal_windows-control-tabs').on('click', function(e){
		e.preventDefault();
		$(".modal_windows-control-tabs").removeClass('m_w-control-tabs-a');
		$(this).addClass('m_w-control-tabs-a');
		$('.calc_tab').removeClass('active_calc_tab');
		var act = $(this).data('tab');
		$("."+act).addClass('active_calc_tab');
	});
	$('.info_tabs-btn').on('click', function(e){
		e.preventDefault();
		$(".info_tabs-btn").removeClass('active-inf');
		$(this).addClass('active-inf');
		$('.info_tab').removeClass('active-inf');
		var act = $(this).data('tab');
		$("."+act).addClass('active-inf');
	});
	$('tbody>tr',".calc_tab").on('click', function(e){
		e.preventDefault();
		$('tbody>tr>td',".calc_tab").removeClass('active-cell');
		$(this).find('td').addClass('active-cell');
	});

	$('.clients_tabs-i').on('click', function(e){
		e.preventDefault();
		$(".clients_tabs-i").removeClass('clients_tabs-i-a');
		$(this).addClass('clients_tabs-i-a');
		$('.clients_tab').removeClass('clients_tab-a');
		var act = $(this).data('tab');
		$("."+act).addClass('clients_tab-a');
	});
	$('.clients_tab-foto-b .foto-controls').on('click', function(e){
		e.preventDefault();
		$(".clients_tab-foto-b .foto-controls").removeClass('foto-controls-a');
		$(this).addClass('foto-controls-a');
		$('.clients_tab-foto-wrap .clients_tab_wrap').removeClass('clients_tab_wrap-a');
		var act = $(this).data('tab');
		$(".clients_tab-foto-wrap ."+act).addClass('clients_tab_wrap-a');
	});

	$("#celendar-birthday").on('click', function(){
		$(".celendar-wrap-birthday").fadeIn(400);
	});

	// Удалить при случае, preview-наличия активных классов для кнопок
	$(".modal_windows-clients .search-btn").on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('search-btn-a');
	});
	$(".modal_windows-clients .btn-save").on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('btn-save-a');
	});
});