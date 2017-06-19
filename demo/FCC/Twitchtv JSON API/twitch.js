    $(document).ready(function(){

    	var usersArr = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

//  顶部右侧  menu   动画  由鼠标的移入移出决定. 
    	$('#online').mouseover(function() {
    $('#status-online').fadeIn();
  });

  $('#online').mouseout(function() {
    $('#status-online').css('display', 'none');
  });

  $('#offline').mouseover(function() {
    $('#status-offline').fadeIn();
  });

  $('#offline').mouseout(function() {
    $('#status-offline').css('display', 'none');
  });
  
  
  var avatar = "";
  var url = "";
  var userName = "";
  var status = "";
  var game = "";
  var brief = "";
  var description = "";
  var html = "";
  
  usersArr.forEach(function(channel) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + channel + '?callback=?', function(data) {
    	console.log(channel);
    	console.log(data);
      if (data.stream === null) {
        game = "offline";
        status = "offline";
      }
      else if (data.stream === undefined) {
        game = "account closed";
        status = "offline";
      }
      else {
        game = data.stream.game;
        status = "online";
      }
    });
    $.getJSON('https://api.twitch.tv/kraken/channels/' + channel + '?callback=?', function(data) {
      //avatar = data.logo == null? data.logo: "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
      avatar = data.logo;
      url = data.url;
      userName = data.display_name;
      brief = data.status;
      description = game + ": " + brief;
      description = (description.length > 60)? (description.substr(0, 57) + '...'): description;
      html = (status === "online")? '<div class="row user-item online-user"><img src="' + avatar +'" alt="" class="avatar col-xs-2"/><div class="username username-online col-xs-2"><a href="' + url + '" target="_blank">' + userName + '</a></div><div class="brief-status col-xs-8">' + description + '</div></div>': '<div class="row user-item offline-user"><img src="' + avatar +'" alt="" class="avatar col-xs-2"/><div class="username username-offline col-xs-2"><a href="' + url + '" target="_blank">' + userName + '</a></div><div class="brief-status col-xs-8">' + game + '</div></div>';
      $('.footer').before(html);
    });
  });
  $('.switcher#online').on('click', function() {
    $('.offline-user').css('display', 'none');
    $('.online-user').css('display', 'block');
  });
  
  $('.switcher#offline').on('click', function() {
    $('.offline-user').css('display', 'block');
    $('.online-user').css('display', 'none');
  });
  
  $('.switcher#all').on('click', function() {
    $('.offline-user').css('display', 'block');
    $('.online-user').css('display', 'block');
  });
    });
    /*
     <div class="container">
    	<div class="row" id="header">
    		<h1>Twitch Streamers</h1>
    		<div class="menu">
    			<div class="" id="all">All</div>
    			<div class="" id="online">OnLine</div>
    			<div class="" id="offline">OffLine</div>
    		</div>
    	</div>

    </div>
    */



