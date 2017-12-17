
const phantom = require('phantom');
function function2() {
    (async function() {
      const instance = await phantom.create();
      const page = await instance.createPage();
      await page.on('onResourceRequested', function(requestData) {
        console.info('Requesting', requestData.url);
      });
      for (ii =0; ii < 30; ii++) {
          const status = await page.open('http://adzbux.com/promote7.php?ref=biboucuongoc1102');
          const content = await page.property('content');
      }
        
      await instance.exit();
    })();

}
 
var i = 0, howManyTimes = 10;
function f() {
    function2();
    console.log(Date()); 
    setTimeout( f, 50000 ); 
}
f();



