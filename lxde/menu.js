// menu.js
$(function($){
  var menu_list = [
    {
      "name": "办公",
      "icon": "lxde/actions_16/applications-office.png",
      "sub": []
    },
    {
        "name": "编程",
        "icon": "lxde/actions_16/applications-development.png",
        "sub": []
    },
    {
        "name": "附件",
        "icon": "lxde/actions_16/applications-utilities.png",
        "sub": []
    },
    {
        "name": "互联网",
        "icon": "lxde/actions_16/internet-web-browser.png",
        "sub": []
    },
    {
        "name": "图像",
        "icon": "lxde/actions_16/applications-graphics.png",
        "sub": []
    },
    {
        "name": "系统工具",
        "icon": "lxde/actions_16/applications-system.png",
        "sub": []
    },
    {
        "name": "影音",
        "icon": "lxde/actions_16/applications-multimedia.png",
        "sub": []
    },
    {

    },
    {
        "name": "首选项",
        "icon": "lxde/actions_16/preferences-system.png",
        "sub": []
    },
    {

    },
    {
        "name": "运行",
    },
    {

    },
    {
        "name": "注销",
        "icon": "lxde/actions_16/application-exit.png",
    }
  ];
  var menu = $("#menu_area");
  for (var i in menu_list) {
    if (typeof(menu_list[i].name) == "undefined") {
        menu.append('<div class="menu_separate"></div>')
    } else {
        var obj = '<div class="menu_item">';
        if (typeof(menu_list[i].icon) != "undefined") {
            obj += '<img src="' + menu_list[i].icon + '" alt="" />';
        } else {
            obj += '<span class="menu_item_img"></span>';
        }
        obj += '<span class="menu_item_name">' + menu_list[i].name + '</span>';
        if (typeof(menu_list[i].sub) != "undefined") {
            obj += '<span class="menu_item_sub">&gt;</span>'
        }
        obj += '</div>';
        menu.append(obj);
    }
  }
  // window['menu'] = menu;
  $('#menu_canvas').click(function(ev) {
    console.log(ev.target);
    if (ev.target.tagName == "DIV" && ev.target.id == "menu_canvas") {
        $('#menu_canvas').hide();
    }
  });
});