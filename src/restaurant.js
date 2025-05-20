const homePage = () => {

const content = document.getElementById("content");

const homebtn = document.getElementById("homebtn");
const menubtn = document.getElementById("menubtn");
const aboutbtn = document.getElementById("aboutbtn");
const items = document.createElement("div");
//
const h1 = document.createElement("h1");
h1.innerText = "This is my restaurant";
items.appendChild(h1);

//
const image = document.createElement("img");
image.src = "https://lh3.googleusercontent.com/p/AF1QipNOUkCbxolQxDe4EIvI5HJscaOA_loUzVQqRdeb=s680-w680-h510";
items.appendChild(image);

//
const details = document.createElement("p");
details.innerText = "Sunny Burger Shack is your go-to spot for quick, delicious, and affordable meals that hit all the right spots! Nestled in the heart of the city, our vibrant fast food joint serves up classic comfort food with a modern twist, perfect for families, friends, or a solo lunch break.";
items.appendChild(details);
//
const h2 = document.createElement("h2");
details.innerHTML = "Why Choose Us?";
items.appendChild(h2);

const reasons = ["Quality Ingredients: We use fresh, locally sourced produce and high-quality meats to ensure every bite bursts with flavor.", "Fast, Friendly Service: Our team is dedicated to making your visit quick and enjoyable.", "Eco-Conscious: From compostable packaging to energy-efficient equipment, we’re committed to keeping our planet as happy as our customers."];
const list = document.createElement("ul")
reasons.forEach(reason => {
    const li = document.createElement("li");
    li.textContent = reason;
    list.appendChild(li);
});

}