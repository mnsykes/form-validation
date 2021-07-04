// global variables
const submit = document.querySelector("#submitBtn");
const entryForm = document.querySelector("#entryForm");
const elements = entryForm.elements;
const formElements = [];
const valid = [];

// pushes all form elements into array
for (let i = 0; i < elements.length; i++) {
	let formElement = elements[i];
	formElements.push(formElement);
}

// event listeners
entryForm.addEventListener("submit", validateForm);
productDesc.addEventListener("keyup", countChar);

// functions;
function validateForm(e) {
	e.preventDefault();
	for (let i = 0; i < formElements.length - 1; i++) {
		let element = formElements[i];
		checkInputs(element);

		// when all entries are valid, the two array lengths will match
		// and the form can be submitted
		// formElements length of -1 used so the submit button isn't counted
	}
	if (valid.length === formElements.length - 1) {
		alert("The Dude abides");
		entryForm.submit();
	}

	return 0;
}

// loop through all form elements
// validity method valueMissing to check for required form elements
// validity method patternMismatch checks against regex pattern in form attributes
// if either test fails function sets error messages
// if both tests pass CSS class is applied and element is added to array

function checkInputs(element) {
	if (!element.validity.valueMissing && !element.validity.patternMismatch) {
		setSuccessFor(element);
		pushValid(element);
	} else if (element.validity.patternMismatch || element.validity.valueMissing) {
		setErrorFor(element, `${element.title}`);
		return;
	}
}

// if the element is a valid entry it will be stored in this array
// if element is not already in the array then
// element is pushed to array
function pushValid(element) {
	if (valid.includes(element)) {
		console.log(element);
	} else {
		valid.push(element);
	}
}

// sets CSS class for error messages on inputs
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "form-control error";
	small.innerText = message;
}

// sets CSS class for successful inputs
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

// counts characters in Product Description text box
// and prints count to the form
function countChar() {
	const descValue = productDesc.value;
	const counter = descValue.length;

	document.querySelector(".charCount").innerHTML = counter;
}
