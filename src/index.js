require('./styles.css');
const drawPage = require('./render.js');
const menuPage = require('./menu.js');

document.addEventListener('DOMContentLoaded', () => {
  drawPage();
  menuPage();
  
  const homebtn = document.getElementById("homebtn");
  const menubtn = document.getElementById("menubtn");
  const aboutbtn = document.getElementById("aboutbtn");
  
});