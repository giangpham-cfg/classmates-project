let persons = [
  {
    id: 1,
    name: "Alona",
    img: "./images/Alona-1.jpg",
    country: "Ukraine",
    it: "Web Development",
    age: 23,
    gender: "Female",
  },
  {
    id: 2,
    name: "Ana",
    img: "./images/Ana-1.jpg",
    country: "Portugal",
    it: "Data Analyst",
    age: 28,
    gender: "Female",
  },
  {
    id: 3,
    name: "Burak",
    img: "./images/Burak-1.jpg",
    country: "Turkey",
    it: "Data Analyst",
    age: 33,
    gender: "Male",
  },
];

function buildPage(personsParam) {
  for (i = 0; i < personsParam.length; i++) {
    let main = document.querySelector("main");
    let article = document.createElement("article");
    main.appendChild(article);

    let image = document.createElement("img");
    image.className = "image";
    image.setAttribute("src", personsParam[i].img);

    let nameText = document.createElement("h3");
    nameText.textContent = `Name: ${personsParam[i].name}`;

    let countryText = document.createElement("p");
    countryText.className = "country";
    countryText.textContent = `Country: ${personsParam[i].country}`;

    let ageNumber = document.createElement("p");
    ageNumber.className = "Age";
    ageNumber.textContent = `Age: ${personsParam[i].age}`;

    let genderText = document.createElement("p");
    genderText.className = "Gender";
    genderText.textContent = `Gender: ${personsParam[i].gender}`;

    let itText = document.createElement("p");
    itText.className = "IT";
    itText.textContent = `Favorite IT path: ${personsParam[i].it}`;

    article.append(image, nameText, countryText, ageNumber, genderText, itText);
    image.style.cssText = "width: 300px;";
  }
}

buildPage(persons);
