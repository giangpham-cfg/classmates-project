let images = [
  "./images/Alona-1.jpg",
  "./images/Ana-1.jpg",
  "./images/Burak-1.jpg",
];

let names = ["Alona", "Ana", "Burak"];


let persons = [
  {
    name: "Alona",
    img: "./images/Alona-1.jpg"
  }
]
function buildPage() {
  for (i = 0; i < images.length; i++) {
    let section = document.querySelector("section");

    let image = document.createElement("img");
    let text = document.createElement("h3");
    image.className = "image";
    image.setAttribute("src", images[i]);
    text.textContent = names[i];
    section.appendChild(image);
    section.appendChild(text);
    image.style.cssText = "width: 300px;";
  }
}
