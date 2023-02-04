const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;
for (let i = 0; i < numbers.length; i += 1) {
	if (numbers[i] < threshold) {
		continue;
	}
	console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
}
function test(array) {
	let maxNumber = 0;
	for (let i = 0; i < array.length; i += 1) {
		if (maxNumber < array[i]) {
			maxNumber = array[i];
		}
	}
	return maxNumber;
}
console.log(test([1, 29, 3, 44, 5, 6, 74, 8, 9])); // 74

function hasMyWebsiteThisThings(website) {
	const isHaveEndsWithSlash = website.endsWith("/");
	const hasMyWebsiteText = website.includes("my-site");
	let changeWebsite =
		isHaveEndsWithSlash && hasMyWebsiteText
			? website
			: website.replace("some", "my-") + "/";
	return changeWebsite;

	// if (isHaveEndsWithSlash && hasMyWebsiteText) {
	// 	return website;
	// } else {
	// 	changeWebsite = website + "/";
	// 	return "No! this is not my website!";
	// }
}
console.log(hasMyWebsiteThisThings("http://somewebsite.com/about"));

const string = "Welcome to the Paradise";
console.log(string.replace("the", "the best"));
console.log(string.split(""));
console.log(string.split(" "));
console.log(string.split("  "));
const arrayString = string.split(" ");
console.log(arrayString.join(""));
console.log(arrayString.join(" "));
console.log(arrayString.join("-"));
console.log(arrayString.indexOf("the"));
console.log(arrayString.indexOf("Welcome"));
console.log(arrayString.indexOf("Par"));
console.log(arrayString.includes("to"));
console.log(arrayString.includes("Par"));

const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";

const hasFruits = redFruits.includes(fruit);
if (hasFruits) {
	console.log(`${fruit} - is a red fruits!`);
}
const someThingText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore itaque suscipit quo in odit?";
let somethingArray = someThingText.split(" ");
const things = "amet";
const checkWordsInArray = somethingArray.includes(things);
const hasWordsInArray = checkWordsInArray
	? `${things} - is a has in array`
	: "oh no, it is not has in array(((";
console.log(hasWordsInArray);
