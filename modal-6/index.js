const title = document.querySelector(".article-title");

console.log(title.textContent);

console.log(
	(document.querySelector(".article-title").style.textContent = "bla bla bla")
);

// title.textContent = "Change this Title";

// the sames

document.querySelector(".article-title").textContent = "Change this title";

document.querySelector(".article-text").textContent =
	"Change this text, because it's was long text";

const paragraph = document.querySelector("#paragraph");

paragraph.classList.add("red", "green", "blue");

console.log(paragraph.classList.contains("red"));

paragraph.classList.remove("green");

console.log(paragraph.classList.contains("green"));

paragraph.classList.toggle("is-has"); // add the new class : "is-has"
paragraph.classList.toggle("is-has"); // remove the class : "is-has"

console.log(paragraph.classList);

paragraph.classList.forEach((cls) => console.log(cls));

title.style.textAlign = "center";
title.style.fontSize = "25px";
title.style.color = "green";
paragraph.style.textAlign = "center";
paragraph.style.color = "yellow";

const img = document.querySelector(".image");
img.style.display = "block";
img.style.margin = "0 auto";
console.log(img.attributes);
console.log(img.hasAttribute("src"));
console.log(img.hasAttribute("url"));
console.log(img.getAttribute("src"));
console.log(img.setAttribute("alt", "this is a new alt!"));
console.log(img.removeAttribute("alt"));

const editor = document.querySelector(".editor");
editor.style.margin = "0 auto";
editor.style.width = "499px";
editor.style.background = "white";

const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action);
console.log(closeBtn.dataset.action);

const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => console.log(dish.dataset.id));
