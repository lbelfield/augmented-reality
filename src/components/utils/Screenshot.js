const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();

    await page.open('http://google.com');

    await page.render('src/components/liveTrainTicket/googleScreenShot' + '.png');

    // await page.on('onLoadFinished', function() {
    //    phantom.exit();
    //   });

    await instance.exit();
}());



// var WebPage = require('webpage');
// // var phantom = require('phantom');
// import { WebPage } from 'phantom';
// // var phantomJsPrebuilt = require('phantomjs-prebuilt');

//   page = Webpage.create();
//   // page.open('http://192.168.0.20:9000');
//   // page.open('http://localhost:9000');
//   page.open('http://google.com');
//   page.onLoadFinished = function() {
//     page.render('src/components/liveTrainTicket/googleScreenShot' + '.png');
//     phantom.exit();
//   }




// var WebPage = require('webpage');

// page = WebPage.create();
// page.open('http://google.com');
// page.onLoadFinished = function() {
//   page.render('src/components/liveTrainTicket/googleScreenShot' + '.png');
//    phantom.exit();
//   }
