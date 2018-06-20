// ******* PHANTOM JS **********

/* // Promises sln

const phantom = require("phantom");

const Screenshot = (site, folder, fileExtension) => {
  let _ph;
  let _page;

  phantom.create().then(function(ph){
      _ph = ph;
      return _ph.createPage();
  }).then(function(page){
      _page = page;
      return _page.open(site);
  }).then(function(){
      _page.render(folder + fileExtension);
  }).then(function(){
      _page.close();
      _ph.exit();
  }).catch(function(e){
  });
} */




/* // async await sln

const phantom = require("phantom");

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
*/




/* // ********* CHROME DRIVER ****************

const fs = require('fs');
const webdriver = require('selenium-webdriver');
const chromedriver = require('chromedriver');

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless']});

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .withCapabilities(chromeCapabilities)
  .build();

// Navigate to google.com, enter a search.
driver.get('https://www.google.com/');
driver.findElement({name: 'q'}).sendKeys('webdriver');
driver.findElement({name: 'btnG'}).click();
driver.wait(webdriver.until.titleIs('webdriver - Google Search'), 1000);

// Take screenshot of results page. Save to disk.
driver.takeScreenshot().then(base64png => {
  fs.writeFileSync('screenshot.jpeg', new Buffer(base64png, 'base64'));
});

driver.quit();
*/
