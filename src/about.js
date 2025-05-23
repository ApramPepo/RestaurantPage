const aboutPage = () => {

    const content = document.getElementById("content");
    const items = document.createElement("div");
    items.classList.add("cotent-page");

    const ourStory = document.createElement("h2");
    ourStory.innerText = "Our Story";
    items.appendChild(ourStory);

    const dialog = document.createElement("p");
    dialog.innerText = "Welcome to Abram's Restaurant, where passion for food and hospitality comes together to create unforgettable dining experiences. Founded in 2025, our restaurant was born from a simple idea: to serve delicious, thoughtfully prepared meals in a warm and inviting atmosphere. Inspired by fast food, we set out to create a place where friends, families, and food lovers could gather to share great moments.";
    items.appendChild(dialog);

    const contactUs = document.createElement("h2");
    contactUs.innerText = "Contact Us:";

    const mail = document.createElement("input");
    mail.type = "email";
    mail.placeholder = "Enter your Email...";
    items.appendChild(mail);

    const desc = document.createElement("textarea");
    desc.type = "text";
    desc.rows = "4";
    desc.cols = "50";
    desc.placeholder = "Enter your message";
    items.appendChild(desc);



    content.appendChild(items);
}

module.exports = aboutPage;