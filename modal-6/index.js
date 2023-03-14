import products from "./products.js";

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

const body = document.querySelector("body");
const createElBox = document.createElement("div");
createElBox.classList.add("new-class");
body.append(createElBox);

const createElH3 = document.createElement("h3");
createElH3.classList.add("new-class__title");
createElH3.textContent = " Here i am!";

createElBox.prepend(createElH3);

const createElUl = document.createElement("ul");
createElUl.classList.add("new-class__items");

createElH3.after(createElUl);

const createElLiOne = document.createElement("li");
const createElLiTwo = document.createElement("li");
const createElLiThree = document.createElement("li");

createElLiOne.classList.add("items__item-first");
createElLiTwo.classList.add("items__item-secont");
createElLiThree.classList.add("items__item-third");
createElLiOne.textContent = "First li";
createElLiTwo.textContent = "Second li";
createElLiThree.textContent = "Third li";

createElUl.prepend(createElLiOne);
createElUl.append(createElLiTwo);
createElUl.append(createElLiThree);

createElLiThree.remove();

console.log(createElLiTwo.innerHTML);

const editorText = editor.querySelector("p");
editorText.classList.add("editor__paragraph");

editorText.innerHTML =
	'<span class="accent">Lorem ipsum</span> dolor sit amet consectetur adipisicing <span class="accent">elit.</span>';
console.log(editorText.innerHTML);

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

const list = document.querySelector(".change-inner__list");

const markup = technologies
	.map((technologie) => `<li class="list__item">${technologie}</li>`)
	.join("");
list.innerHTML = markup;

console.log(markup);

const htmlStrimg = `<p class="change-inner__text">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, ab alias.
			</p>
			<a href="#" class="change-inner__link">Lorem, ipsum dolor.</a>`;
const changeInner = document.querySelector(".change-inner");
changeInner.innerHTML += htmlStrimg;

const newTechnologies = ["JavaScript", "TypeScript", "Vue"];

const addTechnologies = newTechnologies
	.map((technologie) => `<li class="list__item">${technologie}</li>`)
	.join("");

const sectionSecondList = document.querySelector(".section-second__list");

console.log(sectionSecondList);
sectionSecondList.insertAdjacentHTML("beforeend", addTechnologies);

sectionSecondList.insertAdjacentHTML(
	"beforebegin",
	`<h2>This is a new Title in the second section!</h2>`
);
const secondSection = document.querySelector(".section-second");
const sectionSecondTitle = secondSection.querySelector("h2");
sectionSecondTitle.classList.add("section-second__title");
sectionSecondTitle.style.textAlign = "center";

const colors = [
	{ label: "red", color: "#F44336" },
	{ label: "green", color: "#4CAF50" },
	{ label: "blue", color: "#2196F3" },
	{ label: "pink", color: "#E91E63" },
	{ label: "indigo", color: "#3F51B5" },
];

const thridSection = document.querySelector(".section-thrid");
console.log(thridSection);

const makeColorPickerOptions = (options) =>
	options.map((option) => {
		const buttonEl = document.createElement("button");
		buttonEl.type = "button";
		buttonEl.style.backgroundColor = option.color;
		buttonEl.textContent = option.label;
		buttonEl.classList.add("section-thrid__btn");
		console.log(buttonEl);

		return buttonEl;
	});

const elements = makeColorPickerOptions(colors);
thridSection.append(...elements);

const product = {
	name: "Сервоприводы",
	description:
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
	price: 2000,
	available: true,
	onSale: true,
};

const productRef = document.createElement("article");
productRef.classList.add("product");

const titleRef = document.createElement("h2");
titleRef.classList.add("product__title");
titleRef.textContent = product.name;

const descriptionRef = document.createElement("p");
descriptionRef.classList.add("product__description");
descriptionRef.textContent = product.description;

const priceRef = document.createElement("p");
priceRef.classList.add("product__price");
priceRef.textContent = `Price: ${product.price}`;

productRef.append(titleRef, descriptionRef, priceRef);

console.log(productRef);

const sectionFour = document.querySelector(".section-four");

sectionFour.append(productRef);

//  ---------------------------------------------------------

const sectionFive = document.querySelector(".section-five");

console.log(sectionFive);

// const makeProductCard = (product) => {
// 	const productRef = document.createElement("article");
// 	productRef.classList.add("product");

// 	const titleRef = document.createElement("h2");
// 	titleRef.classList.add("product__title");
// 	titleRef.textContent = product.name;

// 	const descriptionRef = document.createElement("p");
// 	descriptionRef.classList.add("product__description");
// 	descriptionRef.textContent = product.description;

// 	const priceRef = document.createElement("p");
// 	priceRef.classList.add("product__price");
// 	priceRef.textContent = `Price: ${product.price}`;

// 	productRef.append(titleRef, descriptionRef, priceRef);

// 	return productRef;
// };

// sectionFive.append(...products.map(makeProductCard));

// const makeProductCard = (products) =>
// 	products.map(({ name, description, price }) => {
// 		const productRef = document.createElement("article");
// 		productRef.classList.add("product");

// 		const titleRef = document.createElement("h2");
// 		titleRef.classList.add("product__title");
// 		titleRef.textContent = name;

// 		const descriptionRef = document.createElement("p");
// 		descriptionRef.classList.add("product__description");
// 		descriptionRef.textContent = description;

// 		const priceRef = document.createElement("p");
// 		priceRef.classList.add("product__price");
// 		priceRef.textContent = `Price: ${price}`;

// 		productRef.append(titleRef, descriptionRef, priceRef);

// 		return productRef;
// 	});

// sectionFive.append(...makeProductCard(products));

sectionFive.append(
	...products.map(({ name, description, price }) => {
		const productRef = document.createElement("article");
		productRef.classList.add("product");

		const titleRef = document.createElement("h2");
		titleRef.classList.add("product__title");
		titleRef.textContent = name;

		const descriptionRef = document.createElement("p");
		descriptionRef.classList.add("product__description");
		descriptionRef.textContent = description;

		const priceRef = document.createElement("p");
		priceRef.classList.add("product__price");
		priceRef.textContent = `Price: ${price}`;

		productRef.append(titleRef, descriptionRef, priceRef);

		return productRef;
	})
);
