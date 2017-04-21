var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
page.open('https://clickcounterbutton-johorst.c9.io/', function(status) {
page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js", function() {
  if (status !== 'success') {
    console.log('Unable to access network');
  } else {
    var ua = page.evaluate(function() {
      $('#ccd').click();
    });
    console.log(ua);
  }
  phantom.exit();
});});
