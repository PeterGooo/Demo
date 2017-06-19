window.onload = function () {
  var url = 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US';
  var urlRes = '', urlResAll = '';
  function demo(url){
    fetch(url, {mode: 'cors'}).then(function(res){
      console.log(res);
      res.json().then(function (data) {
        urlRes = data;
      })
    })
  }
  demo(url);
  console.log(urlRes);
  // console.log(urlRes.images[0].url);
}
