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
mango2.email = "fjwlejf;l34f2j;fj2";

console.log(mango2.email);

class User3 {
	static Roles = {
		ADMIN: "admin",
		EDITOR: "editor",
	};
	#email;
	#role;

	constructor({ email, role }) {
		this.email = email;
		this.role = role;
	}

	get role() {
		return this.#role;
	}
	set role(newRole) {
		this.#role = newRole;
	}
}

const mango3 = new User3({
	email: "mango@email.com",
	role: User3.Roles.ADMIN,
});

console.log(mango3.email);

console.log(mango3.Roles);

console.log(User3.Roles);

console.log(mango3.role);
mango3.role = User3.Roles.EDITOR;
console.log(mango3.role);

class ContentEditor extends User {}

const editor = new ContentEditor("editor@email.com");

console.log(editor);
console.log(editor.email);

const counter = {
	value: 0,
	increment() {
		this.value += 1;
		if (this.value > 10) {
			this.value = 10;
		}
	},
	decrement() {
		this.value -= 1;
		if (this.value === -1) {
			this.value = 0;
		}
	},
};

const decrementBtn = document.querySelector(".js-decrement");
const incrementBtn = document.querySelector(".js-increment");
const valueElement = document.querySelector(".js-value");

decrementBtn.addEventListener("click", () => {
	counter.decrement();
	valueElement.textContent = counter.value;
});

incrementBtn.addEventListener("click", () => {
	counter.increment();
	valueElement.textContent = counter.value;
});

const changeColorForEverythings = function (color) {
	// console.log(`this :`, this, `this.color : ${color}`);
	this.color = color;
};

const hat = {
	color: "black",
};
console.log(hat);
changeColorForEverythings.call(hat, "orange");

console.log(hat);

const sweater = {
	color: "green",
};

console.log(sweater);

changeColorForEverythings.apply(sweater, ["pink"]);

console.log(sweater);

const changeColorForHat = changeColorForEverythings.bind(hat);
const changeColorForSweater = changeColorForEverythings.bind(sweater);

changeColorForHat("yellow");
changeColorForSweater("white");

console.log(hat);
console.log(sweater);

const objC = {
	z: 9,
};

console.log(objC);

const objB = Object.create(objC);
objB.y = 6;

console.log(objB);

const objA = Object.create(objB);
objA.x = 3;
objA.y = 2;
objA.z = 1;

console.log(objA);

const Car = function ({ brand, model, price } = {}) {
	// console.log(this);
	this.brand = brand;
	this.model = model;
	this.price = price;
};
Car.prototype.changePrice = function (newPrice) {
	this.price = newPrice;
};
const myCar1 = new Car({
	brand: "volkswagen",
	model: "tiguan",
	price: 1700000,
});

console.log(myCar1);

const myCar2 = new Car({ brand: "volkswagen", model: "golf", price: 1400000 });

console.log(myCar2);

const myCar3 = new Car();

console.log(myCar3);

const myCar4 = new Car({ brand: "audi", model: "Q7", price: 2500000 });

console.log(myCar4);

const myCar5 = new Car({ brand: "honda", model: "CR-V", price: 1950000 });

console.log(myCar5);

myCar5.changePrice(258093);

const UserNew = function ({ email, password } = {}) {
	this.email = email;
	this.password = password;
};

UserNew.prototype.changeEmail = function (newEmail) {
	this.email = newEmail;
};
UserNew.prototype.changePasswortd = function (newPassword) {
	this.password = newPassword;
};

const alina = new UserNew({
	email: "alina@email.com",
	password: 12041994,
});
console.log(alina);

alina.changeEmail("newemail@email.com");
alina.changePasswortd(19940412);

console.log(alina);

const lezver = new UserNew({ email: "lezver@email.com", password: 12345 });

console.log(lezver);

lezver.changeEmail("newlezver@email.com");
lezver.changePasswortd(987654321);

console.log(lezver);

const CounterPlugin = function ({
	rootSelector,
	initialValue = 0,
	step = 1,
} = {}) {
	this._value = initialValue;
	this._step = step;
	this._reference = this._getReference(rootSelector);
	this._bindEvents();
	this.updateValueUI();
};
CounterPlugin.prototype._getReference = function (rootSelector) {
	const reference = {};
	reference.container = document.querySelector(rootSelector);

	reference.incrementBtn =
		reference.container.querySelector("[data-increment]");
	reference.decrementBtn =
		reference.container.querySelector("[data-decrement]");
	reference.valueEl = reference.container.querySelector("[data-value]");

	return reference;
};
CounterPlugin.prototype._bindEvents = function () {
	this._reference.incrementBtn.addEventListener("click", () => {
		this.increment();
		this.updateValueUI();
	});
	this._reference.decrementBtn.addEventListener("click", () => {
		this.decrement();
		this.updateValueUI();
	});
};
CounterPlugin.prototype.updateValueUI = function () {
	this._reference.valueEl.textContent = this._value;
};
CounterPlugin.prototype.increment = function () {
	this._value += this._step;
};
CounterPlugin.prototype.decrement = function () {
	this._value -= this._step;
	if (this._value === -3 || this._value === -10) {
		this._value = 0;
	}
};

new CounterPlugin({ rootSelector: "#counter2", step: 3, initialValue: 12 });
new CounterPlugin({ rootSelector: "#counter1", step: 10, initialValue: 50 });

class VolksWagenCars {
	constructor({ model, type, price } = {}) {
		this._model = model;
		this._type = type;
		this._price = price;
	}
	get model() {
		return this._model;
	}
	set model(newModel) {
		this._model = newModel;
	}
	get type() {
		return this._type;
	}
	set type(newType) {
		this._type = newType;
	}
	get price() {
		return this._price;
	}
	set price(newPrice) {
		this._price = newPrice;
	}
}

const tiguan = new VolksWagenCars({
	model: "tiguan",
	type: "crossower",
	price: 1680000,
});

const arteon = new VolksWagenCars({
	model: "arteon",
	type: "sedan",
	price: 1960000,
});

const golf = new VolksWagenCars({
	model: "golf",
	type: "hatchback",
	price: 1570000,
});

console.log(tiguan);
console.log(arteon);
console.log(golf);

console.log(tiguan.model);
tiguan.price = 1333111;
console.log(tiguan.price);
console.log(tiguan);

class Hero {
	constructor({ name = "hero", xp = 0 } = {}) {
		(this._name = name), (this._xp = xp);
	}
	get name() {
		return this._name;
	}
	set name(newName) {
		this._name = newName;
	}
	get xp() {
		return this._xp;
	}
	set xp(amount) {
		this._xp += amount;
	}
}

class Necromancer extends Hero {
	constructor(config) {
		super(config);
		this._mana = config.mana;
	}
	get mana() {
		return this._mana;
	}
	set mana(amount) {
		this._mana += amount;
	}
}

class Warrior extends Hero {
	constructor(config) {
		super(config);
		this._energy = config.energy;
	}
	get energy() {
		return this._energy;
	}
	set energy(amount) {
		this._energy += amount;
	}
}

const lezz = new Necromancer({ name: "lezz", xp: 1000, mana: 500 });

lezz.name = "lezver";
lezz.xp = 50;
lezz.mana = 25;
console.log(lezz);

const rascul = new Warrior({ name: "rascul", xp: 1100, energy: 90 });

rascul.xp = 100;
rascul.energy = 10;
console.log(rascul);
