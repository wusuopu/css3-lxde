//
$(function($){
  
function Clock(obj){
  
  this.obj = obj;
}
Clock.prototype.setNow = function(){
  var now = new Date();
  var hour = now.getUTCHours();
  var minute = now.getUTCMinutes();
  if (hour.toString().length < 2) {
  	hour = "0"+hour;
  }
  if (minute.toString().length < 2) {
  	minute = "0"+minute;
  }
  this.obj.innerHTML = hour+":"+minute;
  this.obj.title = now.getFullYear()+"年"+(now.getUTCMonth()+1)+"月"+now.getUTCDate()+"日"
};

function WorkSpace(w1, w2, t1, t2, text){
  this.current_workspace = document.getElementById(w1);
  this.workspace1 = document.getElementById(w1);
  this.workspace2 = document.getElementById(w2);
  this.tooltips1 = document.getElementById(t1);
  this.tooltips2 = document.getElementById(t2);
  this.text = document.getElementById(text);
}
WorkSpace.prototype.change = function(w) {
  if (this.current_workspace.id == w) {
    return ;
  }
  if (!!this.interval) {
    clearInterval(this.interval);
  }
  this.interval = setInterval(this.hide_tooltip, 1000);
  document.getElementById("workspace_tooltips").style.visibility = "visible";
  this.current_workspace = document.getElementById(w);
  this.current_workspace.style.backgroundColor = "#4E76A8";
  this.text.innerHTML = this.current_workspace.title;
  if (this.workspace1.id != w) {
    this.workspace1.style.backgroundColor = "#A9A5A2";
    this.tooltips1.style.backgroundColor = "#FFFFFF";
    this.tooltips2.style.backgroundColor = "#4A4A4A";
  } else {
    this.workspace2.style.backgroundColor = "#A9A5A2";
    this.tooltips2.style.backgroundColor = "#FFFFFF";
    this.tooltips1.style.backgroundColor = "#4A4A4A";
  }
}
WorkSpace.prototype.hide_tooltip = function(){
  clearInterval(this.interval);
  document.getElementById("workspace_tooltips").style.visibility = "hidden";
}

// 设置时钟
function setClock(){
  var clock = new Clock($("#clock")[0]);
  clock.setNow();
  setInterval(function(){
  	clock.setNow();

  }, 60000);
};
setClock();

// 切换工作区
var workspace = new WorkSpace("workspace1", "workspace2",
                                  "wk_tooltips1", "wk_tooltips2", "wk_tooltips_text");
$('#status_bar').click(function(ev) {
  console.log(ev.target);
  if (ev.target.id == "start_menu") {
    $('#menu_canvas').show();
  } else if (ev.target.className == "workspace") {
    workspace.change(ev.target.id);
  } else if (ev.target.id == "volume_control_tray") {
    console.log("Volume Control");
  } else if (ev.target.id == "exit_tray") {
    console.log("Exit");
  }
});

});