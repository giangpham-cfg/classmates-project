let images = [
  "./images/Alona-1.jpg",
  "./images/Ana-1.jpg",
  "./images/Burak-1.jpg",
];
let section = document.querySelector("section");
// console.log("section");

for (i = 0; i < images.length; i++) {
  let image = document.createElement("img");
  image.className = "image";
  image.setAttribute("src", images[i]);
  section.appendChild(image);
}
