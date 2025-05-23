const homePage = require('./restaurant.js');
const menuPage = require('./menu.js');
const aboutPage = require('./about.js');

function drawPage() {
    homePage();
    menuPage();
    aboutPage();
}

module.exports = drawPage;