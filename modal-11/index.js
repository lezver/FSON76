// console.log('x > y:', 5);
// console.log('test',);
// console.log('hello');
// const name = 'vladislav';
// const age  = 28;
// const isPremium  = true ;
// const lastName = null ;
// const fatherName = undefined ;

// const a;
// a = 5;

// let b;
// b = 28;
// console.log(b);
// var c;
// c = 154;

// let atec = 10;
// let atec = 20;
// будет ошибка

// var c=10;
// var c=20;
// если одно и тоже имя переменной то будет выводиться последняя
// const userPrice = 100.56;
// console.log(Math.ceil(userPrice));
// console.log(Math.floor(userPrice));
// console.log(Math.round(userPrice));

// const balsnce = 100;
// const ticetPrice = 20;
// console.log(balsnce <= ticetPrice);

// && - and

// Запомните шесть значений, которые в булевом преобразовании приводятся к `false`: `0`, `NaN`, `null`, `undefined`, пустая строка `""` или `''` и само значение `false`. Абсолютно всё остальное приводится к `true`.
// || - or

// Оператор ! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.
// ! - no

// const userId = prompt('Enter your login or Phone');
// const password = prompt('Enter your password');

// const userLogin = 'admin';
// const userPassword = '12345';
// const userPhone = '0931019649';

// if ((userId === userLogin || userId === userPhone) && password === userPassword){
//   console.log('Welcome');
// }else{console.log('Wrong Login or Password');}

// const birthMonth = Number(prompt(' Enter your birth month'));
// if (birthMonth === 1 || birthMonth === 2 || birthMonth === 12){
// 	console.log( 'winter');
// } else if (birthMonth === 3 || birthMonth === 4 || birthMonth === 5){
// 	console.log( 'spring');
// } else if (birthMonth === 6 || birthMonth === 7 || birthMonth === 8){
// 	console.log( 'summer');
// } else if (birthMonth === 9 || birthMonth === 10 || birthMonth === 11){
// 	console.log( 'autumn');
// } else {
// 	console.log('введить конкретоное число:');
// }
// switch (birthMonth) {
// 	case 1:
// 	case 2:
// 	case 12:
// 		console.log( 'winter');
// 		break;
// 	case 3:
// 	case 4:
// 	case 5:
// 		console.log( 'spring');
// 		break;
// 	case 6:
// 	case 7:
// 	case 8:
// 		console.log( 'summer');
// 		break;
// 	case 9:
// 	case 10:
// 	case 11:
// 		console.log( 'autumn');
// 		break;
// 	default:
// 		console.log('введить конкретоное число:');
// }
// const userName = prompt('Enter your name');
// if (userName === 'Darth Vader') {
// 	console.log('Hello Darth Vader');
// } else {
// 	console.log('Hello, stranger');
// }

// if (userName !=='Darth Vader'){
// 	console.log('Hello, stranger');
// }else{
// 	console.log('Hello Darth Vader');
// }
// Методи replace() і replaceAll()

const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName);

const jsFileName1 = "script.js";
const minifiedJsFileName1 = jsFileName1.replace("script", "scriptomatic");
console.log(minifiedJsFileName1);

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames);
// Метод slice()
const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"
//                     Логічне && - and
const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false
console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Mango"); // false && true -> ""
console.log("Mango" && ""); // true && false -> ""
console.log("Mango" && "Poly"); // true && true -> "Poly"
console.log("Poly" && "Mango"); // true && true -> "Mango"
//                     Логічне || - or
const age1 = 5;
console.log(age1 < 10 || age1 > 30); // true || false -> true
const age2 = 40;
console.log(age2 < 10 || age2 > 30); // false || true -> true
const age3 = 20;
console.log(age3 < 10 || age3 > 30); // false || false -> false
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true
//                     Логічне ! - no
console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true
const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false
//                     Інструкція if
let cost = 0;
const subscription = "pro";
if (subscription === "pro") {
	cost = 100;
}
console.log(cost); // 100
//
let cost1 = 0;
const subscription1 = "free";
if (subscription1 === "pro") {
	cost1 = 100;
}
console.log(cost1); // 0
//
let cost2;
const subscription2 = "free";
if (subscription2 === "pro") {
	cost2 = 100;
} else {
	cost2 = 0;
}
console.log(cost2); // 0
//
let cost3;
const subscription3 = "pro";
if (subscription3 === "pro") {
	cost3 = 100;
} else {
	cost3 = 0;
}
console.log(cost3); // 100
//
let cost4;
const subscription4 = "premium";
if (subscription4 === "free") {
	cost4 = 0;
} else if (subscription4 === "pro") {
	cost4 = 100;
} else if (subscription4 === "premium") {
	cost4 = 500;
} else {
	console.log("Invalid subscription type");
}
console.log(cost4); // 500
//                     Тернарний оператор
const age4 = 20;
const type = age4 >= 18 ? "adult" : "child";
console.log(type); // "adult"
//
const num1 = 5;
const num2 = 10;
const biggerNumber = num1 > num2 ? num1 : num2;
console.log(biggerNumber); // 10
//                     Інструкція switch
let cost5;
const subscription5 = "premium";
switch (subscription5) {
	case "free":
		cost5 = 0;
		break;
	case "pro":
		cost5 = 100;
		break;
	case "premium":
		cost5 = 500;
		break;
	default:
		console.log("Invalid subscription type");
}
console.log(cost5); // 500
//                      Область видимості
const value = 5;
if (true) {
	console.log("Block scope: ", value); // 5
}
console.log("Global scope: ", value); // 5
//
// if (true) {
// 	const value1 = 5;
// 	console.log("Block scope: ", value1); // 5
// }
// console.log("Global scope: ", value); // ReferenceError: value is not defined

//                     exercise 9

function add(a, b, c) {
	return a + b + c;
}
add(2, 5, 8);
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));
console.log(add(511, 1045, 1675));

//                     exercise 10

function makeMessage(name, price) {
	const message = `You poced ${name}, price per item is ${price} credits`;
	return message;
}
console.log(makeMessage("Radar", 6150));
console.log(makeMessage("Scanner", 3500));
console.log(makeMessage("Reactor", 8000));
console.log(makeMessage("Engine", 4070));

//                     exercise 11

function calculateTotalPrice(orderedQuantity, pricePerItem) {
	const totalPrice = orderedQuantity * pricePerItem;
	return totalPrice;
}
console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(1, 3500));
console.log(calculateTotalPrice(12, 70));

//                     exercise 12

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
	const message = `You ordered droids worth ${
		orderedQuantity * pricePerDroid + deliveryFee
	} credits. Delivery (${deliveryFee} credits) is included in total price.`;
	return message;
}
console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));

//                     exercise 13

function isAdult(age) {
	const passed = age >= 18;
	return passed;
}
console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));
console.log(isAdult(37));

//                     exercise 14

function isValidPassword(password) {
	const SAVED_PASSWORD = "jqueryismyjam";
	const isMatch = password === SAVED_PASSWORD;
	return isMatch;
}
console.log(isValidPassword("mangodab3st"));
console.log(isValidPassword("kiwirul3z"));
console.log(isValidPassword("jqueryismyjam"));

//                     exercise 15

function checkAge(age) {
	let message;
	if (age >= 18) {
		// Change this line
		message = "You are an adult";
	} else {
		message = "You are a minor";
	}
	return message;
}
console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

//                     exercise 16

function checkStorage(available, ordered) {
	let message;
	if (available > ordered) {
		message = "Order is processed, our manager will contact you.";
	} else {
		message = "Not enough goods in stock!";
	}
	return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

//                     exercise 17

let a = 5;
let b = 10;
let c = 15;
let d = 20;
// before;
a = a + 2;
b = b - 4;
c = c * 3;
d = d / 10;
// after;
a += 2;
b -= 4;
c *= 3;
d /= 10;

//                     exercise 18

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
	let message;
	const totalPrice = pricePerDroid * orderedQuantity;
	if (totalPrice > customerCredits) {
		message = "Insufficient funds!";
	} else {
		message = `You ordered ${orderedQuantity} droids, you have ${
			customerCredits - totalPrice
		} credits left`;
	}
	return message;
}
console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));

//                     exercise 19

function checkPassword(password) {
	const ADMIN_PASSWORD = "jqueryismyjam";
	let message;
	if (null === password) {
		// Change this line
		message = "Canceled by user!";
	} else if (ADMIN_PASSWORD === password) {
		// Change this line
		message = "Welcome!";
	} else {
		message = "Access denied, wrong password!";
	}
	return message;
}
console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));

//                     exercise 20

function checkStorage(available, ordered) {
	let message;
	if (0 === ordered) {
		message = "There are no products in the order!";
	} else if (available < ordered) {
		message = "Your order is too large, there are not enough items in stock!";
	} else {
		message = "The order is accepted, our manager will contact you";
	}
	return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

//                     exercise 21

function isNumberInRange(start, end, number) {
	const isInRange = start <= number && number <= end;
	return isInRange;
}
console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));

//                     exercise 22

function checkIfCanAccessContent(subType) {
	const canAccessContent = subType === "pro" || subType === "vip";
	return canAccessContent;
}
console.log(checkIfCanAccessContent("pro"));
console.log(checkIfCanAccessContent("starter"));
console.log(checkIfCanAccessContent("vip"));
console.log(checkIfCanAccessContent("free"));

//                     exercise 23

function isNumberNotInRange(start, end, number) {
	const isInRange = number >= start && number <= end;
	const isNotInRange = !isInRange;
	return isNotInRange;
}
console.log(isNumberNotInRange(10, 30, 17));
console.log(isNumberNotInRange(10, 30, 5));
console.log(isNumberNotInRange(20, 50, 24));
console.log(isNumberNotInRange(20, 50, 76));

//                     exercise 24

function getDiscount(totalSpent) {
	const BASE_DISCOUNT = 0;
	const BRONZE_DISCOUNT = 0.02;
	const SILVER_DISCOUNT = 0.05;
	const GOLD_DISCOUNT = 0.1;
	let discount;
	if (totalSpent >= 50000) {
		discount = GOLD_DISCOUNT;
	} else if (totalSpent >= 20000 && totalSpent < 50000) {
		discount = SILVER_DISCOUNT;
	} else if (totalSpent >= 5000 && totalSpent < 20000) {
		discount = BRONZE_DISCOUNT;
	} else {
		discount = BASE_DISCOUNT;
	}
	return discount;
}
console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300));
console.log(getDiscount(5000));
console.log(getDiscount(20000));
console.log(getDiscount(50000));

//                     exercise 25

function checkStorage(available, ordered) {
	let message;
	message =
		ordered > available
			? "Not enough goods in stock!"
			: "The order is accepted, our manager will contact you";
	return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

//                     exercise 26

function checkPassword(password) {
	const ADMIN_PASSWORD = "jqueryismyjam";
	let message;
	message =
		password === ADMIN_PASSWORD
			? "Access is allowed"
			: "Access denied, wrong password!";
	return message;
}
console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));

//                     exercise 27

function getSubscriptionPrice(type) {
	let price;
	switch (type) {
		case "starter":
			price = 0;
			break;
		case "professional":
			price = 20;
			break;
		case "organization":
			price = 50;
			break;
	}
	return price;
}
console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("organization"));
console.log(getSubscriptionPrice("starter"));

//                     exercise 28

function checkPassword(password) {
	const ADMIN_PASSWORD = "jqueryismyjam";
	let message;
	switch (password) {
		case null:
			message = "Canceled by user!";
			break;
		case ADMIN_PASSWORD:
			message = "Welcome!";
			break;
		default:
			message = "Access denied, wrong password!";
	}
	return message;
}
console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));

//                     exercise 29

function getShippingCost(country) {
	let message;
	switch (country) {
		case "China":
			message = "Shipping to China will cost 100 credits";
			break;
		case "Chile":
			message = "Shipping to Chile will cost 250 credits";
			break;
		case "Australia":
			message = "Shipping to Australia will cost 170 credits";
			break;
		case "Jamaica":
			message = "Shipping to Jamaica will cost 120 credits";
			break;
		default:
			message = "Sorry, there is no delivery to your country";
	}
	return message;
}
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));

//                     exercise 30

function getNameLength(name) {
	const message = `Name ${name} is ${name.length} characters long`;
	return message;
}
console.log(getNameLength("Poly"));
console.log(getNameLength("Harambe"));
console.log(getNameLength("Billy"));
console.log(getNameLength("Joe"));

//                     exercise 31

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

//                     exercise 32

function getSubstring(string, length) {
	const substring = string.slice(0, length);
	return substring;
}

//                     exercise 33

function formatMessage(message, maxLength) {
	let result = message;
	if (message.length > maxLength) {
		result = message.slice(0, maxLength) + "...";
	}
	return result;
}
console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

//                     exercise 34

function normalizeInput(input) {
	const normalizedInput = input.toLowerCase();
	return normalizedInput;
}
console.log(normalizeInput("Hello world"));
console.log(normalizeInput("This ISN'T SpaM"));
console.log(normalizeInput("Big SALE"));

//                     exercise 35

function checkForName(fullName, name) {
	const result = fullName.includes(name);
	return result;
}
console.log(checkForName("Egor Kolbasov", "Egor"));
console.log(checkForName("Egor Kolbasov", "egor"));
console.log(checkForName("Egor Kolbasov", "egOr"));
console.log(checkForName("Egor Kolbasov", "Zhenya"));
console.log(checkForName("Vadim Nekrasov", "Vadim"));
console.log(checkForName("Vadim Nekrasov", "vadim"));
console.log(checkForName("Vadim Nekrasov", "Dima"));

//                     exercise 36

function checkForSpam(message) {
	let result;
	result =
		message.toLowerCase().includes("spam") ||
		message.toLowerCase().includes("sale");
	return result;
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
