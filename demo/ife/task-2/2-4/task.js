  window.onload = function () {
  	/**
  	 * aqiData，存储用户输入的空气指数数据
  	 * 示例格式：
  	 * aqiData = {
  	 *    "北京": 90,
  	 *    "上海": 40
  	 * };
  	 */
  	var aqiData = {};


  	/**
  	 * 从用户输入中获取数据，向aqiData中增加一条数据
  	 * 然后渲染aqi-list列表，增加新增的数据
  	 */
  	function addAqiData() {
  		const city = document.getElementById('aqi-city-input').value.trim();
  		const aqi = document.getElementById('aqi-value-input').value.trim();

      // //对城市输入值进行判断
      // if (!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
      //   alert("城市名必须为中英文字符！");
      //   return;
      // }

      // // 对空气指数输入值进行判断
      // if (!aqi.match(/^\d+$/)) {
      //   alert("空气质量指数必须为整数！");
      //   return;
      // }

  		aqiData[city] = aqi;
  	}

  	/**
  	 * 渲染aqi-table表格
  	 */
  	function renderAqiList() {
  		var str = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
  		for(var city in aqiData) {
  			str += '<tr><td>' + city + '</td><td>'+ aqiData[city] + '</td><td><button data-city='+city+'>删除</button></td></tr>';
  		}
  		console.log(city);
  		document.getElementById('aqi-table').innerHTML = city?str:'';
  	}

  	/**
  	 * 点击add-btn时的处理逻辑
  	 * 获取用户输入，更新数据，并进行页面呈现的更新
  	 */
  	function addBtnHandle(obj) {
  	  addAqiData();
  	  renderAqiList();
  	}

  	/**
  	 * 点击各个删除按钮的时候的处理逻辑
  	 * 获取哪个城市数据被删，删除数据，更新表格显示
  	 */
  	function delBtnHandle(city) {
  	  // do sth.
  	  delete aqiData[city]

  	  renderAqiList();
  	}

  	function init() {

  	  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  	  document.getElementById('add-btn').onclick = addBtnHandle;
  	  // document.getElementById('add-btn').addEventListener('click', addBtnHandle);

  	  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  	  // var del = document.getElementById('del').addEventListener('click', function (event) {
  	  // 	if (event.target.nodeName.toLowerCase() === "button") {
  	  // 		delBtnHandle.call(null, event.target.dataset.city);
  	  // 	}
  	  // });

  	  var del = document.getElementById("aqi-table");
  	  del.onclick = function (event) {
  	  	if (event.target.nodeName.toLowerCase() === "button") {
  	  		delBtnHandle.call(null, event.target.dataset.city);
  	  	}
  	  }



  	}

  	init();
  }
