const localName = "My city";
const localPlace = "Kharkiv";

const obj = {
	a: "Vlad",
	b: 28,
	changeName(newName) {
		this.a = newName;
	},
	addNewStrengthIndication(a, b) {
		this[nameArray].push(a, b);
	},
	addMyWifeOld(text) {
		this.wife = text;
	},
	getLengthStrehgthIndication() {
		return this[nameArray].length;
	},
};
obj.lastName = "Gulida";
obj[localName] = localPlace;

obj.changeName("Vladislav");

const nameArray = "strengthIndication";
const valueOfArray = ["110x4", "120x4", "130x6"];

obj[nameArray] = valueOfArray;

obj.addNewStrengthIndication("50x7", "380x12");

obj.wife = "Alina";
let myWifeOld = 28;

obj.addMyWifeOld(`My wife name - Alina and she is a ${myWifeOld} years old :)`);
console.log(obj.getLengthStrehgthIndication());
console.log(obj);

for (const kay in obj) {
	console.log(`This is kay: ${kay} this is it value: ${obj[kay]}`);
}

const bookShelf = {
	books: ["The Last Kingdom"],
	getBook() {
		return this.books;
	},
	addNewBook(newBook) {
		this.books.push(newBook);
	},
	remuveBook(bookName) {
		const indexBook = this.books.indexOf(bookName);
		this.books.splice(indexBook, 1);
	},
};

bookShelf.addNewBook("The Mist");
bookShelf.addNewBook("Gream Guarding");
bookShelf.remuveBook("The Last Kingdom");

console.log(bookShelf.getBook());

const animal = {
	legs: 4,
};

const dog = Object.create(animal);
dog.name = "Khan";

animal.legs = 2;

console.log(dog);
console.log(animal);

console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("legs"));

for (const kay in dog) {
	if (dog.hasOwnProperty(kay)) {
		console.log(`Kay : ${kay} and his value : ${dog[kay]}`);
	}
}
// const kaysFromObjectDog = Object.keys(dog);
console.log(Object.keys(dog));

console.log(Object.values(dog));

const fiendKeysFromObj = Object.keys(obj);

for (const key of fiendKeysFromObj) {
	console.log(key);

	console.log(obj[key]);
}

console.log(fiendKeysFromObj.join(", "));

const fiendValuesFromObj = Object.values(obj);

console.log(fiendValuesFromObj.join(", "));

const goods = {
	apples: 6,
	grapes: 3,
	bread: 4,
	cheese: 7,
};

const vuluesOfGoods = Object.values(goods);

const sumOfGoods = (array) => {
	let sum = 0;
	for (const value of array) {
		sum += value;
	}
	return sum;
};

console.log(sumOfGoods(vuluesOfGoods));

console.log(Object.entries(obj));
console.log(Object.create(obj));

const books = [
	{
		title: "The Last Kingdom",
		author: "Bernard Cornwell",
		rating: 8.38,
	},
	{
		title: "На березі спокійних вод",
		author: "Роберт Шеклі",
		rating: 8.51,
	},
	{
		title: "Сон смішної людини",
		author: "Федір Достоєвський",
		rating: 7.75,
	},
];

const fnOfBooks = (array) => {
	let bookNames = [];
	let totalRating = 0;
	for (const book of array) {
		console.log(book);
		console.log(book.title);
		console.log(book.author);
		console.log(book.rating);
		bookNames.push(book.title);
		totalRating += book.rating / array.length;
	}
	console.log(totalRating.toFixed(2));
	console.log(bookNames);
};

fnOfBooks(books);

const arrayNumbers = [1, 2, 3];
const arrayName = ["a", "b", "c"];

let sum = "";

for (let i = 0; i < arrayName.length; i += 1) {
	sum += ` Names : ${arrayName[i]}, Numbers  : ${arrayNumbers[i]}.`;
}
console.log(sum);

const arrayOfThings = ["chair", "window", "table", "menu", "bag", "couch"];

console.log(arrayOfThings.sort());

const friends = [
	{ name: "Mango", online: false },
	{ name: "Kiwi", online: true },
	{ name: "Poly", online: true },
	{ name: "Ajax", online: false },
];

const fiendFriendsByName = (allFriends, friendName) => {
	for (const friend of allFriends) {
		if (friend.name === friendName) {
			return `Oh here is your friend : ${friendName}`;
		}
	}
	return "Your friend is not here";
};

console.log(fiendFriendsByName(friends, "Mango"));
console.log(fiendFriendsByName(friends, "Kiwi"));
console.log(fiendFriendsByName(friends, "Vasya"));

const getAllNames = (allFriends) => {
	const getAllNamesFriends = [];
	for (const friend of allFriends) {
		getAllNamesFriends.push(friend.name);
	}
	return getAllNamesFriends;
	//  of is we need string
	// return getAllNamesFriends.join(", ");
};

console.log(getAllNames(friends));

const getOnlineFriends = (allFriends) => {
	const friendIsOnline = [];
	for (const friend of allFriends) {
		if (friend.online) {
			friendIsOnline.push(friend.name);
		}
	}
	// return friendIsOnline;
	return `Your friends : ${friendIsOnline.join(", ")} are online!`;
};

console.log(getOnlineFriends(friends));

const getOfflineFriends = (allFriends) => {
	const friendsIsOffline = [];
	for (const friend of allFriends) {
		if (!friend.online) {
			friendsIsOffline.push(friend.name);
		}
	}
	return `Your friends : ${friendsIsOffline.join(", ")} are not online!`;
};

console.log(getOfflineFriends(friends));

const getFriendsByStatus = (allFriends) => {
	const friendsByStatus = {
		online: [],
		offline: [],
	};

	for (const friend of allFriends) {
		// if (friend.online) {
		// 	friendsByStatus.online.push(friend.name);
		// } else {
		// 	friendsByStatus.offline.push(friend.name);
		// }
		friend.online
			? friendsByStatus.online.push(friend.name)
			: friendsByStatus.offline.push(friend.name);
	}

	return friendsByStatus;
};

console.log(getFriendsByStatus(friends));

console.log(Object.keys(friends).length);

const shoppingCard = {
	items: [],
	getItems() {
		return this.items;
	},
	add(product) {
		this.items.push(product);
	},
	remove() {},
	clear() {
		return (this.items = []);
	},
	countTotalPrice() {
		let totalPrice = 0;
		for (const product of this.items) {
			totalPrice += product.price;
		}
		return totalPrice;
	},
	increaseQuantity() {},
	decreaseQuatity() {},
};

shoppingCard.add({ name: "apple", price: 50 });
shoppingCard.add({ name: "lemon", price: 60 });
shoppingCard.add({ name: "orange", price: 80 });
shoppingCard.add({ name: "banana", price: 120 });

// shoppingCard.clear();
console.log(shoppingCard.countTotalPrice());

console.log(shoppingCard.getItems());

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];

const allTemps = [...lastWeekTemps, ...currentWeekTemps];

const fnOfTemps = (firstArray, secondArray, ...rest) => {
	return firstArray + secondArray + rest;
};

console.log(fnOfTemps(lastWeekTemps, currentWeekTemps, allTemps));
console.log(Math.min(...allTemps));

const firstObj = { propA: 5, propB: 10 };
const secondObj = { propC: 15 };
const thirdObj = { ...firstObj, ...secondObj };
console.log(thirdObj);

const restObj = (...rest) => {
	return rest;
};

console.log(restObj(firstObj, secondObj, thirdObj));
