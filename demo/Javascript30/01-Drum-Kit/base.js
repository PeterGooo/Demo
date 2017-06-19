  window.onload=function(){
  	 function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // 插入值 ${} 必须要用到 `` 这是es6 的特性
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;  //表示播放时会跳到设置的位置.   单位是秒
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));   //keys是一个NodeList集合, 可以使用forEach
  console.table(keys);
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));   //该事件在css完成过渡后触发. 
  window.addEventListener('keydown', playSound);
  }

  /*
  'use strict';

window.onload = function () {
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    var key = document.querySelector('div[data-key="' + e.keyCode + '"]');
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0; //表示播放时会跳到设置的位置.   单位是秒
    audio.play();
  }

  var keys = Array.from(document.querySelectorAll('.key'));
  console.table(keys);
  keys.forEach(function (key) {
    return key.addEventListener('transitionend', removeTransition);
  });
  window.addEventListener('keydown', playSound);
};
  */