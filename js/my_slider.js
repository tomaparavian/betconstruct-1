var $=(jQuery);
function Slider(container, nav, imgs, span, imgs_w_t){
    this.container=container;
    this.span=span;
    this.nav=nav;
    this.imgs=imgs;
    this.imgWidth=imgs_w_t;
    this.imgLen=this.container.find('img').length;
    this.current=0;
    this.container.css('width',this.imgWidth*this.imgs.length);
}
Slider.prototype.setWidth=function(){
    this.container.css('width',this.imgWidth*this.imgs.length);
};
Slider.prototype.setCurrent=function(dir){
    var pos=this.current;
    pos+=~~(dir==="next")||-1;
    this.current=(pos<0)? this.imgLen-1: pos % this.imgLen;
};
Slider.prototype.thransition=function(){
    this.container.css({
        "margin-left":-(this.current*this.imgWidth)
    });
};
Slider.prototype.setSpan=function(){
    this.span.find(".foto_current").text(this.current+1);
    this.span.find(".foto_len").text(this.imgLen);
};
//------------------------------------------------------------------------------
function set_slider(container, imgs, nav, span, wrap_i, imgs_w){
    container.find('.photo-default').parent().remove();
    imgs=$(wrap_i+"img");
    var len = $(wrap_i+"img").length;
    if(len<1){
        container.append('<li class="foto_wrap"><img class="photo-default" src="img/foto.jpg" alt=""></li>');
        span.hide();
        nav.addClass('foto_btn-dis');
    } else {
        container.find('.photo-default').parent().remove();
        span.show();
        nav.removeClass('foto_btn-dis');
    };
    imgs=container.find('img');
    imgs_w=parseInt(container.find('.foto_wrap').css('width'));
    var slider=new Slider(container, nav, imgs, span, imgs_w);
    slider.setSpan();
    slider.setWidth();

    slider.nav.on('click',function(e){
        e.preventDefault();
        var dir= $(this).data('slide');
        slider.setWidth();
        slider.setCurrent(dir);
        slider.setSpan();
        slider.thransition();
    });

}
var container=$(".clients_tab-f .foto_slides-wrap").css("overflow","hidden").find('.foto_slides');
var imgs=$('.clients_tab-f .foto_slides-wrap').find('li');
var imgs_w=parseInt($('.clients_tab-f .foto_slides-wrap .foto_wrap').css('width'));
var nav=$(".clients_tab-f .foto_btn");
var span=$(".clients_tab-f .foto_len-wrap");
var btn_renew=$(".clients_tab-f .search-btn");
var wrap_i = ".clients_tab-f ";
set_slider(container, imgs, nav, span, wrap_i, imgs_w);

btn_renew.on('click',function(e){
    e.preventDefault();
    container.css('margin-left', 0);
    var imgs_w=parseInt(imgs.css('width'));
    imgs=$('.clients_tab-f .foto_slides-wrap').find('li');
    set_slider(container, imgs, nav, span, wrap_i, imgs_w);
});
//------------------------------------------------------------------------------
var container_t=$(".clients_tab-s .foto_slides-wrap").css("overflow","hidden").find('.foto_slides');
var imgs_t=$('.clients_tab-s .foto_slides-wrap').find('li');
var imgs_w_t=parseInt($('.clients_tab-s .foto_slides-wrap .foto_wrap').css('width'));
var nav_t=$(".clients_tab-s .foto_btn");
var span_t=$(".clients_tab-s .foto_len-wrap");
var btn_renew_t=$(".clients_tab-s .foto-controls-see");
var wrap_i_t = ".clients_tab-s ";
set_slider(container_t, imgs_t, nav_t, span_t, wrap_i_t, imgs_w_t);
btn_renew_t.on('click',function(e){
    e.preventDefault();
    container_t.css('margin-left', 0);
    imgs_t=$('.clients_tab-s .foto_slides-wrap').find('li');
    set_slider(container_t, imgs_t, nav_t, span_t, wrap_i_t, imgs_w_t);
});
