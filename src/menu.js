const menuPage = () => {
    const content = document.getElementById("content");

    const items = document.createElement("div");
    items.classList.add("menu-page");

    const h2 = document.createElement("h2");
    h2.innerHTML = "Why Choose Us?";
    items.appendChild(h2);

    const reasons = ["Quality Ingredients: We use fresh, locally sourced produce and high-quality meats to ensure every bite bursts with flavor.", "Fast, Friendly Service: Our team is dedicated to making your visit quick and enjoyable.", "Eco-Conscious: From compostable packaging to energy-efficient equipment, we’re committed to keeping our planet as happy as our customers."];
    const list = document.createElement("ul")
    reasons.forEach(reason => {
    const li = document.createElement("li");
    li.textContent = reason;
    list.appendChild(li);
    });
    items.appendChild(list);

    const ourFood = document.createElement("h2");
    ourFood.innerHTML = "Here is our Menu selection:"
    items.appendChild(ourFood);

    const menu = [ "Bonanza Classic - $5.99" , "Spicy Firecracker - $6.49", "Mushroom Melt - $6.99", "Veggie Delight - $5.49"];
    const menuList = document.createElement("ul");
    menu.forEach(menuItems => {
    const li = document.createElement("li");
    li.textContent = menuItems;
    menuList.appendChild(li);
    });
    items.appendChild(menuList);

    content.appendChild(items)
}

module.exports = menuPage;