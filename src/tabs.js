const tabs = () => {
    const content = document.getElementById("content");

    const hometab = require("./restaurant.js");
    const menutab = require("./menu.js");
    const abouttab = require("./about.js");

    const homebtn = document.getElementById("homebtn");
    const menubtn = document.getElementById("menubtn");
    const aboutbtn = document.getElementById("aboutbtn");

    const clear = () => {
        content.innerHTML = '';
    };

    const setActiveButton = (activeBtn) => {
        [homebtn, menubtn, aboutbtn].forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    };

    homebtn.addEventListener('click', () => {
        clear();
        setActiveButton(homebtn);
        hometab();
    });

    menubtn.addEventListener('click', () => {
        clear();
        setActiveButton(menubtn);
        menutab();
    });

    aboutbtn.addEventListener('click', () => {
        clear();
        setActiveButton(aboutbtn);
        abouttab();
    });

    hometab();
    setActiveButton(homebtn);
}

module.exports = tabs;

