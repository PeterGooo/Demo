  $(document).ready(function(){
  	/*

  	*/
  	$('.item-content').on('mouseout', function() {
        $(this).css('border-left', "none");
        $(this).css('margin-left', '0');
    });
  	$('#search-box').keypress(function(e){
  		if (e.keyCode == 13) 
  			$('#search').click();
  	});

  	$('#search').on('click', function(){
  		$('#item').children().remove();
  		var searchVal = $('#search-box').val();
  		var format = "json";
  		var action = "opensearch";
  		var callback = "?";
  		var url = "https://en.wikipedia.org/w/api.php?" + "action=" + action + "&search=" + searchVal + "&format=" + format + "&callback=" + callback;
  		//var url = "https://zh.wikipedia.org/w/api.php?action=opensearch&search=" + searchVal + "&format=json&callback=?"

  		$.ajax({
  			url: url,
  			type: "GET",
  			async: false,
  			dataType: "json", 
  			success: function(data, textStatus){
  				console.log(data);
  				for(var i=0; i<data[1].length; i++){
  					$('#item').append('<div class="item"><a href="' + data[3][i] + '" target="_blank"><div class="item-content"><div class="item-title">' + data[1][i] + '</div> <div class="item-text">' + data[2][i] + '</div> </div> </a> </div>');
  					
  				}
  			}

  		});
  	});













  });