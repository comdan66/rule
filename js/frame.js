/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {
  var now = document.URL.replace (/^.*[\\\/]/, '');
  var mainMenu = [
    {name: '空格', file: 'space.html'},
    {name: '字串', file: 'string.html'},
    {name: '括號', file: 'symbol.html'},
    {name: '縮排', file: 'tab.html'},
    {name: '命名', file: 'naming.html'},
    {name: '註解', file: 'comment.html'},
    {name: '關鍵字', file: 'keyword.html'}
  ];

  $('body').prepend ($('<div />').attr ('id', 'header').append ($('<div />').append (mainMenu.map (function (t) {
    return $('<a />').addClass (now == t.file ? 'active' : null).attr ('href', t.file).append (t.name);
  }))));

});