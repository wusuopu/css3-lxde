//
$(function($){
  
function Clock(obj){
  
  this.obj = obj;
}
Clock.prototype.setNow = function(){
  var now = new Date();
  this.obj.innerHTML = now.getUTCHours()+":"+now.getUTCMinutes();
  this.obj.title = now.getFullYear()+"年"+(now.getUTCMonth()+1)+"月"+now.getUTCDate()+"日"
};
function setClock(){
  var clock = new Clock($("#clock")[0]);
  clock.setNow();
  setInterval(function(){
  	clock.setNow();
  }, 30000);
};
setClock();

});