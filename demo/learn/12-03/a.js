  window.onload = function(){
  	function getAll(){
  		var objs = document.all;
  		console.table(document.all[div]);
  		var num = 0;
  		for (var i = 0; i < objs.length; i++) {
  			var obj = objs[i].tagName;
  			if (obj=="body" || obj=="BODY") {
  				num = i+1;
  				break;
  			}
  		}
  		var b_objs = new Array();
  		for (var j = num; j < objs.length; j++) {
  			b_objs.push(objs[j]);
  		}
  	// console.log(num);
  		return b_objs;
  	}
  	var arr = getAll();
  	// console.table(arr);
  }