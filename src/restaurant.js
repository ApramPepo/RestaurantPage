const homePage = () => {
  const content = document.getElementById("content");
  

  const items = document.createElement("div");
  items.classList.add("home-content");
  
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

  content.appendChild(items);
}

module.exports = homePage;