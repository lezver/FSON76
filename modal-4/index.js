const testFn = (boolean) => {
	const isRecipientAvailable = Math.random() > 0.5;
	console.log(isRecipientAvailable);
	if (!isRecipientAvailable) return console.log(isRecipientAvailable);
};

testFn();

function printValue(value) {
	console.log(value);
}

function prettyPrint(value) {
	console.log("Logging value: ", value);
}

function repeat(n, action) {
	for (let i = 1; i <= n; i += 1) {
		action(i);
	}
}

// Передаємо printValue як callback-функцію
repeat(3, printValue);
// 1
// 2
// 3

// Передаємо prettyPrint як callback-функцію
repeat(3, prettyPrint);
// Logging value: 1
// Logging value: 2
// Logging value: 3

const numbersTest = [1, 2, 3, 4, 5, 6];

numbersTest.forEach((value, index) =>
	console.log(`Index ${index}, value ${value}`)
);

const arrayOfNumbersTest = [
	{ name: "valera", age: 33 },
	{ name: "petya", age: 44 },
	{ name: "sasha", age: 24 },
	{ name: "vika", age: 22 },
];

arrayOfNumbersTest.forEach((value, index) =>
	console.log(`Index ${index}, value ${value.name}`)
);

arrayOfNumbersTest.forEach((value) => console.log(`value ${value.name}`));
arrayOfNumbersTest.forEach((value) => console.log(`value ${value.age}`));
arrayOfNumbersTest.forEach((value, index) => console.log(`index ${index}`));

const testArrowFn = (value, index) =>
	console.log(
		`index ${index} and value( name : ${value.name} and age : ${value.age} )`
	);

arrayOfNumbersTest.forEach(testArrowFn);

const planets = ["Земля", "Марс", "Венера", "Юпітер"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());

console.log(planetsInUpperCase);

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());

console.log(planetsInLowerCase);

console.log(planets);

const changeArrayInPlanets = planets.map((value) => value.slice(1, -1));

console.log(changeArrayInPlanets);

const changeArrayOfNumberTest = arrayOfNumbersTest.map((names) =>
	names.name.toUpperCase()
);

console.log(changeArrayOfNumberTest);
