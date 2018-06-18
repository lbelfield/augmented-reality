const phantom = require("phantom");

//   let _ph;
//   let _page;

//   phantom.create().then(function(ph){
//       _ph = ph;
//       return _ph.createPage();
//   }).then(function(page){
//       _page = page;
//       return _page.open('https://google.com/');
//   }).then(function(){
//       _page.render('src/components/liveTrainTicket/googleScreenShot' + '.png');
//   }).then(function(){
//       _page.close();
//       _ph.exit();
//   }).catch(function(e){
// });

// const phantom = require('phantom');

const Screenshot = (site, folder, fileExtension) => {
  (async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();

    await page.open(site);
    await page.render(folder + fileExtension);
    await instance.exit();
  }());
}

export default Screenshot;
