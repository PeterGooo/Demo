//获取url中参数
var URL_ARGUMENTS = {};
if(location.search.length) {
	var args = location.search.slice(1).split('&');
	for(var i = 0; i < args.length; i++) {
		var arg = args[i].split('=');
		URL_ARGUMENTS[arg[0]] = arg[1];
	}
}
console.log(URL_ARGUMENTS);
function GET() {
	if(arguments.length) {
		if(arguments[0] in URL_ARGUMENTS) {
			return URL_ARGUMENTS[arguments[0]];
		} else {
			//throw '"' + arguments[0] + '"参数不存在！';
			return false;
		}
	} else {
		return URL_ARGUMENTS;
	}
}
if(GET('from')) {	
	for(var i in data) {
			if(GET('from') == i) {
				$('#PushGame').attr('href', data[i].downUrl);
				$('#PushGame img').attr('src', data[i].imgUrl);
				$('#PushGame div h4').text(data[i].name);
				$('#PushGame div .game-size').text(data[i].size);
				$('#swiperWrapper').html('');
				for(var j = 0; j < data[i].picList.length; j++) {
					$('#swiperWrapper').append('<a href="' + data[i].picList[j].downUrl + '" class="swiper-slide">' +
						'<img src="' + data[i].picList[j].imgSrc + '" />' +
						'</a>');
				}
			}
	}
}
function moreGames(ida) {
	console.log(dataGame[ida][0].isUse);
	if (dataGame[ida][0].isUse) {
		$('.'+ida).css('display','block');
		let str = "";
		let d = dataGame[ida];
		for(var i=1; i<d.length; i++){
			if (i%3===0) {
				str += `
				<li class='mar-r-0'>
					<a href='${d[i].src}'>
						<img src=' ${d[i].imgUrl} '>
						<h6>${d[i].name}</h6>
						<button>下载</button>
					</a>
				</li>
			`;
			}else{
				str += `
				<li>
					<a href='${d[i].src}'>
						<img src=' ${d[i].imgUrl} '>
						<h6>${d[i].name}</h6>
						<button>下载</button>
					</a>
				</li>
			`;
			}
		}
		$('#'+ida).html(str);
	}
	else{
		$('.'+ida).css('display','none');

	}
}
moreGames('mj');
moreGames('kp');
moreGames('xyx');

