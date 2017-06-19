    //  声明一个icons 对象.  用来放置点击先手的图标. 
    var icons = {
    	'computer-gray': 'http://i4.piimg.com/1949/1f3090a6a40009dd.png',
  		'computer-red': 'http://i4.piimg.com/1949/a8e1b0822c2f5e82.png',  //AI先手
  		'gamer-gray': 'http://i4.piimg.com/1949/587f6ffc09150c07.png',
  		'gamer-red': 'http://i4.piimg.com/1949/ca39995e509c8cb3.png'   //玩家先手
    };
    var step = 0;
    var result = "";
    
    //  矩阵, 井字棋布局   0 代表未点击,  1代表玩家, -1代表AI.
    var matrix = [
    	[0,0,0],
    	[0,0,0],
    	[0,0,0]
    ];

    // AI 下棋, 
    function best() {		//    用来确定下一步AI 如何下棋
    	//  先把下过棋子的和未下棋的 区分出来. 
    	var bestx, besty,  bestV = 0;
    	for(var x=0; x<3; x++){
    		for(var y=0; y<3; y++){           //遍历棋盘

    			if (matrix[x][y] == 0) {
    				matrix[x][y] = -1;
    				step += 1;
    				if (win(x,y)) {         //如果胜利,  就走这一步
    					step -= 1;             // -1是为了返回.
    					matrix[x][y] = 0;
    					return {'x':x, 'y':y, 'v': 1000}; 
    				}
    				else if (step>=9) {
    					step -= 1;
    					matrix[x][y] = 0;
    					return {'x':x, 'y':y, 'v': 0};
    				}
    				else {
    					var v = worst().v;
    					step -= 1;
    					matrix[x][y] = 0;
    					if (bestx == null || v>=bestV) {
    						bestx = x;
    						besty = y;
    						bestV = v;
    					}
    				}
    			}
    		}
    	}
    	return {'x':bestx, 'y':besty, 'v': bestV};
    }

    function worst() {			//     用来确定下一步AI 如何下棋
    	var bestx, besty,  bestV = 0;
    	for(var x=0; x<3; x++){
    		for(var y=0; y<3; y++){
    			if (matrix[x][y] == 0) {
    				matrix[x][y] = 1;
    				step += 1;
    				if (win(x,y)) {
    					step -= 1;
    					matrix[x][y] = 0;
    					return {'x':x, 'y':y, 'v': -1000};
    				}
    				else if (step>=9) {
    					step -= 1;
    					matrix[x][y] = 0;
    					return {'x':x, 'y':y, 'v': 0};
    				}
    				else {
    					var v = best().v;
    					step -= 1;
    					matrix[x][y] = 0;
    					if (bestx == null || v<=bestV) {
    						bestx = x;
    						besty = y;
    						bestV = v;
    					}
    				}
    			}
    		}
    	}
    	return {'x':bestx, 'y':besty, 'v': bestV};
    }

    function computerThink() {
        var b=best();
        var x= b.x;
        var y= b.y;
        var str = '', m, n;
        var i;
        matrix[x][y] = -1;
        step +=1;
        if (win(x,y)) {
            $('.result').html('You lose!');        // 胜利! 输出 result, 
            $('.result').addClass('lose');       //  给result 添加一个样式  -color

            gameOver();  // 游戏结束.  棋盘不可再落棋.
        }
        
        console.log("computer: x  " + x + ' , y  '+y);
        //i= parseInt(str, 2)+1;
        i = x*3 + y;

        console.log('i  ' + i);
        document.getElementsByTagName('button')[i].innerHTML= 'X';
        
    }

    function win(x,y){
		if(Math.abs(matrix[x][0]+matrix[x][1]+matrix[x][2])==3)   //  x方向  abs绝对值
			return true;
		
		if(Math.abs(matrix[0][y]+matrix[1][y]+matrix[2][y])==3)   //  y方向  
			return true;
		
		if(Math.abs(matrix[0][0]+matrix[1][1]+matrix[2][2])==3)   //  \方向
			return true;
		
		if(Math.abs(matrix[2][0]+matrix[1][1]+matrix[0][2])==3)   //  /方向
			return true;
		
		return false;
	}

    function gameOver() {       // 游戏结束时disable
    	$('.grid').attr('disabled',"true");   
    	step = 0;	
    }

    function clearAll() {       // 清除数据
    	$('.grid').removeAttr("disabled");
    	$('.grid').html("");
    	matrix = [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ];
    	step = 0;
    	$('.result').html('');
    	$('.result').removeClass('win');
    	$('.result').removeClass('lose');
    	$('.result').removeClass('draw');
        console.clear();
    }

    function chose() {

    }

//      *****************           程序点击开始          **************************//
    $(document).ready(function() {

    	$('.grid').on('click', function(){ 
    		var gridId = $(this).attr('id');     // 获取点击的按钮的ID
            console.log('btn   ' + gridId);

    		var x = gridId.slice(0, 1);		 //  row  和  col 是matrix中,  点击按钮对应的索引. 
    		var y = gridId.slice(-1);
            console.log('player: x  ' + x+ ',  y  ' + y);
    		if (matrix[x][y] == 0) {  		//  如果点击的btn还没有落棋. 就往下执行.
    				matrix[x][y] = 1;			//  标记为 O  下棋

    				if (win(x, y)) {				//  判断这一步是否胜利. 
    					$('.result').html('You win!');		// 胜利! 输出 result, 
    					$('.result').addClass('win');		//  给result 添加一个样式  -color

    					gameOver();  // 游戏结束.  棋盘不可再落棋.
    					
    				}
    				$(this).html("O");    				//  没有胜利, 落棋  并继续.
                    step +=1;

                    computerThink();
                    console.table(matrix);

    			if (step >= 8)  {		//  如果等于9  也就是棋盘落满了, 所以就是平局
    				$('.result').html('We draw ~');
    				$('.result').addClass('draw');
    				gameOver();
    			}
                console.log('step   ' + step);
    		}    		
    	});

    	$(".gamer-icon").click(function(){			// 点击 玩家先手,  切换图片. 并初始化棋盘等等...
    		$(this).attr("src", icons["gamer-red"]);
    		$('.computer-icon').attr("src", icons["computer-gray"]);
    		clearAll();
    	});
    	$('.computer-icon').click(function() {			//// 点击 电脑先手,  切换图片. 并初始化棋盘等等...
    		$(this).attr("src", icons['computer-red']);
    		$('.gamer-icon').attr('src', icons['gamer-gray']);
    		clearAll();
            matrix = [
                [0,0,0],
                [0,-1,0],
                [0,0,0]
            ];
            document.getElementsByTagName('button')[4].innerHTML= 'X';
    	});
    });

	/*
	    	$('.grid').on('click', function(){ 
            var gridId = $(this).attr('id');     // 获取点击的按钮的ID
            console.log(gridId);

            var row = gridId.slice(0, 1);        //  row  和  col 是matrix中,  点击按钮对应的索引. 
            var col = gridId.slice(-1);

            if (matrix[row][col] == 0) {        //  如果点击的btn还没有落棋. 就往下执行.
                if (step%2 !== 1) {             //  切换 下棋  偶数为玩家. 包括0; 
                    matrix[row][col] = 1;           //  标记为 O  下棋
                    console.log(matrix[row][col]);

                    if (win(row, col)) {                //  判断这一步是否胜利. 
                        $('.result').html('O win!');        // 胜利! 输出 result, 
                        $('.result').addClass('win');       //  给result 添加一个样式  -color

                        gameOver();  // 游戏结束.  棋盘不可再落棋.
                        
                    }
                        
                    $(this).html("O");                  //  没有胜利, 落棋  并继续.
                }

                                            //  切换下棋.  后期改成  电脑AI
                else {
                    matrix[row][col] = -1;
                    if (win(row, col)) {
                        $('.result').html('X win!');
                        $('.result').addClass('lose');

                        gameOver();
                        
                    }
                    $(this).html("X");
                }

                step +=1;           // 落棋次数 
                if (step === 9)  {      //  如果等于9  也就是棋盘落满了, 所以就是平局
                    $('.result').html('We draw ~');
                    $('.result').addClass('draw');
                    gameOver();
                }
                console.log(step);
            }


            
        });
*/

