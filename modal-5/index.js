function foo() {
	return this;
}

console.log(foo());

const foo2 = () => this;

console.log(foo2());

const user = {
	username: "Mango",
};

user.showContext = foo;

console.log(user.showContext());

const hotel = {
	hotelName: "Resort hotel",
	showThis() {
		const foo = () => console.log("this is foo :", this);
		foo();
		console.log("this is showThis :", this);
	},
};

hotel.showThis();

function greatGeust(greating) {
	console.log(`${greating}, ${this.username}`);
}

const guestFirts = {
	username: "Valya",
};

const guestSecond = {
	username: "Petya",
};

greatGeust.call(guestFirts, "Welcome ");

greatGeust.call(guestSecond, "Welcome so much ");

greatGeust.apply(guestFirts, ["Welcome "]);

greatGeust.call(guestSecond, ["Welcome so much "]);

function great(clientName) {
	return `${clientName}, welcome to the «${this.service}».`;
}

const steam = {
	service: "Steam",
};
const google = {
	service: "Gmail",
};

const steamGreeter = great.bind(steam);
const googleGreeter = great.bind(google);

console.log(steamGreeter("lezver"));
console.log(googleGreeter("lezver"));

const customer1 = {
	firstName: "Jacob",
	secondName: "Mercer",
	getFullName() {
		const { firstName, secondName } = this;
		return `${firstName} ${secondName}`;
	},
};

const makeMessage1 = (callback) =>
	console.log(`We are processing your order : ${callback}.`);

makeMessage1(customer1.getFullName());

// console.log(makeMessage1(customer1.getFullName()));

// const customer = {
// 	firstName: "Jacob",
// 	lastName: "Mercer",
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	},
// };

// function makeMessage(callback) {
// 	// callback() - це виклик методу getFullName без об'єкта
// 	console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer));

// makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

const makeChangeColor = function () {
	const changeColor = function () {
		console.log(this);
		// this.color = color; // ERROR! Can't find variable : color
	};

	return changeColor;
};

const updeteColor = makeChangeColor();

updeteColor("red");

const animal = {
	legs: 4,
};

const dog = Object.create(animal);

dog.name = "Mango";

console.log(dog);
console.log(animal.isPrototypeOf(dog));
console.log(dog.isPrototypeOf(animal));
console.log(customer1.isPrototypeOf(dog));
console.log(animal.isPrototypeOf(customer1));
console.log(customer1.hasOwnProperty("name"));
console.log(animal.hasOwnProperty("legs"));
console.log(dog.hasOwnProperty("name"));
console.log(animal.hasOwnProperty("level"));
console.log(customer1.hasOwnProperty("firstName"));

for (const key in dog) {
	if (!dog.hasOwnProperty(key)) continue;
	console.log(key);
}

class User {
	constructor(name, email) {
		this.email = email;
		this.name = name;
	}
}
const mango = new User("Mango", "mango@gmail.com");
const poly = new User("Poly", "poly@gmail.com");

console.log(User);
console.log(mango);
console.log(poly);

class User1 {
	constructor({ firstName, lastName, email, phone }) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
	}
	getEmail() {
		return this.email;
	}
	changeEmail(newEmail) {
		this.email = newEmail;
	}
}

const ajax = new User1({
	firstName: " Ajax",
	lastName: "Armor",
	email: "ajax@gmail.com",
	phone: "0912343269",
});

const jacob = new User1({
	phone: "2394234809",
	email: "jacob@gmail.com",
	lastName: "Salivan",
	firstName: "Jacob",
});

console.log(jacob);

jacob.changeEmail("newemail@gmail.com");

console.log(ajax);
console.log(jacob);

console.log(User1);

class User2 {
	name;
	#email;
	#phone;

	constructor({ name, email, phone }) {
		this.name = name;
		this.#email = email;
		this.#phone = phone;
	}
	getEmail() {
		return this.#email;
	}
	changeEmail(newEmail) {
		this.#email = newEmail;
	}
	get() {
		return this.#phone;
	}
	set(newPhone) {
		this.#phone = newPhone;
	}
}

const mango2 = new User2({
	name: "Mango",
	email: "mango@gmail.com",
});

console.log(mango2);

mango2.changeEmail("newMango@gmail.com");

console.log(mango2.email);
// console.log(mango2.#email); // SyntaxError: Cannot reference undeclared private names: "#email"
console.log(mango2.getEmail());

mango2.set("090909838238");

console.log(mango2.get());

console.log(mango2.phone); // undefined

// console.log(mango2.#phone); // SyntaxError: Cannot reference undeclared private names: "#phone"
