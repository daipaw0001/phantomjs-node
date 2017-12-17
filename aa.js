const phantom = require('phantom');
const http = require('http');  

(async () => {
 
  const requestHandler = (request, response) => {  
    console.log(request.url)
    response.end('Hello World')
  }

  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })
 
})();

function function2() {
    (async function() {
      const instance = await phantom.create();
      const page = await instance.createPage();
      await page.on('onResourceRequested', function(requestData) {
        console.info('Requesting', requestData.url);
      });
      for (ii =0; ii < 3; ii++) {
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



