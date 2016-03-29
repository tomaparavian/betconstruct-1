var $=(jQuery);
function Slider(container, nav, imgs,navSecond){
    this.container=container;
    this.nav=nav;
    this.navSecond=navSecond;
    this.imgs=imgs;
    this.imgWidth=this.imgs[0].width;
    this.imgLen=this.imgs.length;
    this.current=0;
}
Slider.prototype.thransition=function(){
    this.container.animate({
        "margin-left":-(this.current*this.imgWidth)
    });
};
Slider.prototype.setCurrent=function(dir){
    var pos=this.current;
    pos+=~~(dir==="next")||-1;
    this.current=(pos<0)? this.imgLen-1: pos % this.imgLen;
};
Slider.prototype.setCurrentSecond=function(id){
    this.current=id;
};
var container=$(".slider").css("overflow","hidden").find('ul');
var imgs=$('.slider').find('img');
var nav=$("#slider-nav").show().find('button');
var navSecond;
//------------------------------------------------------------------------------
var slider=new Slider(container,nav,imgs,navSecond);
$("<div class='circles'></div>").appendTo("body");
var cWidth=slider.imgLen*15;
$(".circles").css("width",cWidth);
for(var i=0; i<slider.imgLen; i++){
    $("<span class='btn-circle' id='"+i+"'></span>").appendTo('.circles');
}
navSecond=$('.circles').find('span');
//------------------------------------------------------------------------------
var slider=new Slider(container,nav,imgs,navSecond);
slider.nav.on("click",function(){
    var dir= $(this).data('dir');
    slider.setCurrent(dir);
    slider.thransition();
});
slider.navSecond.on("click",function(){
    var id=$(this).attr('id');
    slider.setCurrentSecond(id);
    slider.thransition(); 
});
//------------------------------------------------------------------------------