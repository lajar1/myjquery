(function ($){
  $.fn.myFun = function(){ 
    console.log(this[0] +'调用了自定义插件myFun的myFun()方法');
  };
  $.fn.bgColor = function(color){
    this.css('backgroundColor',color);
    return this; //返jQurey对象本身，以便链式编程
  };
  $.addNumber = function(a,b){ return a + b;};//这是静态方法
}(jQuery));