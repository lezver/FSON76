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

console.log(planets.map((planet) => planet.toUpperCase()));

console.log(planets.map((planet) => planet.toLowerCase()));

console.log(planets.map((value) => value.slice(1, -1).toUpperCase()));

console.log(planets);

console.log(arrayOfNumbersTest.map((names) => names.name.toUpperCase()));

const students = [
	{ name: "Манго", courses: ["математика", "фізика"] },
	{ name: "Полі", courses: ["інформатика", "математика"] },
	{ name: "Ківі", courses: ["фізика", "біологія"] },
];

const testObj = {
	name: "fsffsf",
	age: 32,
	city: "Kharkiv",
};

const studentArray = Object.keys(testObj);
let keys = [];
let valuest = [];
keys.push(studentArray);
valuest.push(testObj[keys]);

console.log(keys, valuest);

console.log(students.map((student) => student.courses));

const allCoursess = students.flatMap((student) => student.courses);
console.log(allCoursess);

console.log(students.flatMap((value) => value.name));

const values = [51, -3, 27, 21, -68, 42, -37];

console.log(values.filter((value) => value > 0));

console.log(values.filter((value) => value < 0));

console.log(values.filter((value) => (value = 0)));

const uniqueCourses = allCoursess.filter(
	(value, index, array) => array.indexOf(value) === index
);
console.log(uniqueCourses);

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const studentsAll = [
	{ name: "Манго", score: 83 },
	{ name: "Полі", score: 59 },
	{ name: "Аякс", score: 37 },
	{ name: "Ківі", score: 94 },
	{ name: "Х'юстон", score: 64 },
];

console.log(studentsAll.filter(({ score }) => score > HIGH_SCORE));
console.log(studentsAll.filter(({ score }) => score < LOW_SCORE));
console.log(
	studentsAll.filter(({ score }) => score < HIGH_SCORE && score > LOW_SCORE)
);
console.log();

const arrayOfNumbersForeFilters = [
	1.7, 2.3, 3, 4, 5, 6.6, 7, 2.2, 6.2, 1.1, 11, 14,
];

console.log(
	arrayOfNumbersForeFilters.filter(
		(value, index, array) => array.indexOf(value) === index
	)
);

const colorPickerOptions = [
	{ label: "red", color: "#F44336" },
	{ label: "green", color: "#4CAF50" },
	{ label: "blue", color: "#2196F3" },
	{ label: "pink", color: "#E91E63" },
	{ label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions.find((color) => color.label === "green"));

console.log(colorPickerOptions.find((color) => color.label === "red"));

console.log(colorPickerOptions.find((color) => color.label === "black"));

console.log(colorPickerOptions.findIndex((index) => index.label === "green"));

console.log(colorPickerOptions.findIndex((index) => index.label === "pink"));

console.log(colorPickerOptions.findIndex((index) => index.label === "indigo"));

console.log(
	colorPickerOptions.indexOf((index) => index.label === "indigo") +
		" : It's not work with object"
);

console.log(colorPickerOptions.findIndex((index) => index.color === "f23of2"));

console.log(arrayOfNumbersForeFilters.every((value) => value > 0));

console.log(arrayOfNumbersForeFilters.every((value) => value < 0));

console.log([1, 2].some((number) => number >= 0));

console.log([-2, -1].some((number) => number > 0));

console.log(
	arrayOfNumbersForeFilters.reduce(
		(previousValue, element, index, array) => previousValue + element + index
	)
);

console.log(
	arrayOfNumbersForeFilters.reduce(
		(previousValue, value) => previousValue + value
	)
);

const totalTestNumbers = arrayOfNumbersForeFilters.reduce(
	(previousValue, element, index, array) =>
		previousValue + element / array.length,
	0
);
console.log(totalTestNumbers);

const totalScore = studentsAll.reduce(
	(previousValue, { score }, index, array) => {
		return previousValue + score / array.length;
	},
	0
);

console.log(totalScore);

const tweets = [
	{ id: "000", likes: 5, tags: ["js", "nodejs"] },
	{ id: "001", likes: 2, tags: ["html", "css"] },
	{ id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
	{ id: "003", likes: 8, tags: ["css", "react"] },
	{ id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

let totalSumOfLikes = 0;
tweets.forEach(({ likes }) => (totalSumOfLikes += likes));

console.log(totalSumOfLikes / tweets.length);

console.log(
	tweets.reduce((previousValue, { likes }, index, array) => {
		return previousValue + likes / array.length;
	}, 0)
);

console.log(
	tweets.reduce((previousValue, { tags }) => {
		previousValue.push(...tags);

		return previousValue;
	}, [])
);

console.log(
	tweets.reduce((previousValue, { id }) => {
		previousValue.push(id);

		return previousValue;
	}, [])
);

console.log(
	tweets.reduce((previousValue, { likes }) => {
		previousValue.push(likes);

		return previousValue;
	}, [])
);

const getTags = () =>
	tweets.reduce((previousValue, { tags }) => {
		previousValue.push(...tags);

		return previousValue.filter(
			(value, index, array) => array.indexOf(value) === index
		);
	}, []);

console.log(getTags(tweets));

console.log([...arrayOfNumbersForeFilters.sort((a, b) => a - b)]);
console.log([...arrayOfNumbersForeFilters.sort()]);

const arrayOfNames = [
	"Vladislav",
	"Artyom",
	"Boris",
	"Alina",
	"Egor",
	"Svetlana",
];

console.log(arrayOfNames.sort((a, b) => a.localeCompare(b)));

console.log(arrayOfNames.sort((a, b) => b.localeCompare(a)));

console.log(
	studentsAll.sort(
		(firstStudent, secondStudent) => firstStudent.score - secondStudent.score
	)
);

console.log(
	studentsAll.sort(
		(firstStudent, secondStudent) => secondStudent.score - firstStudent.score
	)
);

console.log(
	studentsAll.sort((firstStudent, secondStudent) =>
		firstStudent.name.localeCompare(secondStudent.name)
	)
);

console.log(
	studentsAll.sort((firstStudent, secondStudent) =>
		secondStudent.name.localeCompare(firstStudent.name)
	)
);

const sortedByAscendingScore = [...studentsAll].sort(
	(firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

console.log(sortedByAscendingScore);

const mapByName = sortedByAscendingScore.map((student) => student.name);

console.log(mapByName);

const sortedReversAscendingScore = [...studentsAll].sort(
	(firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const mapReversByNames = sortedReversAscendingScore.map(
	(student) => student.name
);

console.log(mapReversByNames);

const minToMaxNamesOfStudentsScore = [...studentsAll]
	.sort(
		(firstStudent, secondStudent) => firstStudent.score - secondStudent.score
	)
	.map((student) => student.name);

const maxToMinNamesOfStudendsScore = [...studentsAll]
	.sort(
		(firstStudent, secondStudent) => secondStudent.score - firstStudent.score
	)
	.map((student) => student.name);

console.log(
	`This is min to max namex of students ${minToMaxNamesOfStudentsScore}, and this is max to min names of students ${maxToMinNamesOfStudendsScore}`
);

const sortedByTagsAToZ = tweets
	.flatMap((tweet) => tweet.tags)
	.filter((value, index, array) => array.indexOf(value) === index)
	.sort((a, b) => a.localeCompare(b));

console.log(sortedByTagsAToZ);

const sortedByTagsZToA = tweets
	.flatMap((tweet) => tweet.tags)
	.filter((value, index, array) => array.indexOf(value) === index)
	.sort((a, b) => b.localeCompare(a));

console.log(sortedByTagsZToA);

console.log(arrayOfNumbersForeFilters.find((number) => number === 5));

const makeShaff = (shaffName) => {
	return (dish) => {
		return `${shaffName} to cook ${dish}`;
	};
};

const shaff = makeShaff("Vladislav");

console.log(shaff("soup"));

console.log(shaff("cake"));

console.log(shaff("ice cream"));

const putLikes = (friend) => {
	return (sumOfLikes) => {
		return `${friend} put ${sumOfLikes}`;
	};
};

const grisha = putLikes("Grisha");

console.log(grisha("1like"));

console.log(grisha("2likes"));

console.log(grisha("3likes"));

console.log(grisha("4likes"));

const eva = putLikes("Eva");

console.log(eva("4likes"));

console.log(eva("41likes"));

console.log(eva("34likes"));

// console.dir(eva);

const rounder = (places) => {
	return (number) => {
		return Number.parseFloat(number).toFixed(places);
	};
};

const rounderTwo = rounder(2);

const rounderThree = rounder(3);

console.log(rounderTwo("1.432524d2"));

console.log(rounderTwo("32.432524d2"));

console.log(rounderThree("1.432524d2"));

console.log(rounderThree("32.432524d2"));

const myLibFactory = () => {
	let value = 0;

	const add = (num) => (value += num);

	return {
		add,
		getValue() {
			return value;
		},
	};
};

const myLib = myLibFactory();

console.log(myLib);

console.log(myLib.add(10));
console.log(myLib.add(101));
// console.dir(myLib.getValue);

const salary = {
	mango: 100,
	poly: 50,
	ajax: 150,
};

console.log(Object.keys(salary).reduce((total, key) => total + salary[key], 0));

console.log(Object.values(salary).reduce((total, value) => total + value, 0));

console.log(
	tweets
		.reduce((totalTags, { tags }) => [...totalTags, ...tags], [])
		.reduce((array, tag) => {
			if (array[tag]) {
				array[tag] += 1;

				return array;
			}
			array[tag] = 1;

			return array;
		}, {})
);

console.log(
	tweets
		.reduce((totalTags, { tags }) => [...totalTags, ...tags], [])
		.reduce((acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }), {})
);

const each = (array, callback) => {
	let newArray = [];

	for (const el of array) {
		newArray.push(callback(el));
	}

	return newArray;
};
console.log(each([64, 49, 36, 25, 16], (value) => value * 2));

console.log(each([64, 49, 36, 25, 16], (value) => value - 10));

console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));

console.log(["Mango", "Polly", "Ajax"].forEach((value, index) => value));

function logItems(items) {
	items.forEach(function (item, index) {
		console.log(`${index + 1} - ${item}`);
	});
}

logItems(["Mango", "Poly", "Ajax"]);
