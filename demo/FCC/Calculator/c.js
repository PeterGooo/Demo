
  	var ans = "";
	var clear = false;
	var calc = "";
	$(document).ready(function() {
  		$("button").click(function() {
  			//获取点击按钮的值, 
    	var text = $(this).attr("value");

    		if(parseInt(text, 10) == text || text === "." || text === "/" || text === "*" 
    			|| text === "-" || text === "+" || text === "%") {

      			if(clear === false) {
        			calc += text;
        			//  把点击的按钮的值输出到text上
        			$(".textbox").val(calc);
      			} else {
        			calc = text;    //   重新
        			$(".textbox").val(calc);
        			clear = false;
      			}
    		} else if(text === "AC") {
     			calc = "";
      			$(".textbox").val("");
    		} else if(text === "CE") {		//删除
      			calc = calc.slice(0, -1);	//slice最后一个字符
      			$(".textbox").val(calc);
    		} else if(text === "=") {
    			//   关键的eval   计算字符串.
      			ans = eval(calc);
      			$(".textbox").val(ans);
      			clear = true;
    		}
  		});
	});
  