  window.onload=function(){
  	const secHand = document.querySelector('.second-hand');    // 通过querySelector选择元素 第一个匹配到的
  	const minHand = document.querySelector('.min-hand');
  	const hourHand = document.querySelector('.hour-hand');

  	function setDate(){			//时钟的时针转动函数
  		const now = new Date();  

  		const seconds = now.getSeconds();   // 获取now对象的现在的秒数.
    	const secDeg = ((seconds / 60) * 360) + 90;  //  计算在表盘中, 转动的角度  deg
    	secHand.style.transform = `rotate(${secDeg}deg)`;  //  给secHand设置transform=rotate(**deg)样式
      // 其中 ${} 插入值需要` ` 包裹着

    	const mins = now.getMinutes();
    	const minDeg = ((mins/60) * 360) + 90;
    	minHand.style.transform = `rotate(${minDeg}deg)`;

    	const hours = now.getHours();
    	const hourDeg = ((hours/12) * 360) + 90;
    	hourHand.style.transform = `rotate(${hourDeg}deg)`;
  	}
  	setInterval(setDate, 1000);   //定时函数, 一秒钟调用一次setDate函数.
  	setDate();  // 这次调用是为了打开网页时, 脚本已经读取了本地时间, 并正确的显示. 若没有, 则页面在一秒钟后才会显示正确.
  }