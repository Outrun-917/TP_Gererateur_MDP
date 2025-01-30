const $generatedPassword = document.querySelector(".generated-password");
const $selectedLength = document.querySelector(".selected-length");
const $rangeInput = document.querySelector("#length");
const $submitButton = document.querySelector("#submitButton");
const $clipboardButton = document.querySelector(".copy-to-clipboard-btn");

// Checkboxes
const $includeUpperCase = document.querySelector("#uppercase");
const $includeLowerCase = document.querySelector("#lowercase");
const $includeNumbers = document.querySelector("#numbers");
const $includeSymbols = document.querySelector("#symbols");

// Strength
const $strengthText = document.querySelector(".strength-indicator");

// Checkbox state
let UpperCaseOn = false;
let LowerCaseOn = false;
let NumbersOn = false;
let SymbolsOn = false;

let checkboxLevel = 0;

// Current password length
let currentLength = 10;

// Password generator
function generatePassword(length) {
  let result = "";
  let parameters = "";

  const characters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = characters.toUpperCase();
  const numbers = "1234567890";
  const symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  console.log($includeUpperCase);

  console.log("UpperCaseOn", UpperCaseOn);
  console.log("LowerCaseOn", LowerCaseOn);
  console.log("NumbersOn", NumbersOn);
  console.log("SymbolsOn", SymbolsOn);

  checkboxLevel = 0;
  parameters = "";
  console.log(checkboxLevel);

  if (UpperCaseOn) {
    parameters += uppercaseCharacters;
    checkboxLevel++;
  }
  if (LowerCaseOn) {
    parameters += characters;
    checkboxLevel++;
  }
  if (NumbersOn) {
    parameters += numbers;
    checkboxLevel++;
  }
  if (SymbolsOn) {
    parameters += symbols;
    checkboxLevel++;
  }

  console.log(checkboxLevel);
  // console.log(parameters);

  let counter = 0;

  while (counter < length) {
    result += parameters.charAt(Math.floor(Math.random() * parameters.length));
    counter += 1;
  }

  // console.log(result);

  if (result !== "") {
    $generatedPassword.textContent = result;
  } else {
    $generatedPassword.textContent = "Please select at least one parameter";
  }
  passwordStrength()
}

// Password strength
function passwordStrength() {
  if (currentLength <= 5 || checkboxLevel <= 1) {
    $strengthText.textContent = "Low";
  } else if (currentLength <= 10 || checkboxLevel <= 2) {
    $strengthText.textContent = "Medium";
  }
}

// Checkbox listeners
$includeUpperCase.addEventListener("change", function () {
  UpperCaseOn = this.checked;
});

$includeLowerCase.addEventListener("change", function () {
  console.log("====");
  LowerCaseOn = this.checked;
});

$includeNumbers.addEventListener("change", function () {
  NumbersOn = this.checked;
});

$includeSymbols.addEventListener("change", function () {
  SymbolsOn = this.checked;
});

$selectedLength.textContent = $rangeInput.value;

$rangeInput.addEventListener("input", function (e) {
  $selectedLength.textContent = e.target.value;
  currentLength = e.target.value;
});

// Clipboard button
$clipboardButton.addEventListener("click", function (e) {
  // console.log("Clipboard clicked");

  if (navigator.clipboard) {
    navigator.clipboard.writeText($generatedPassword.textContent);
    alert("Copied password: " + $generatedPassword.textContent);
    return;
  }
  const textArea = document.createElement("textarea");
  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  document.execCommand("copy");

  document.body.removeChild(textArea);
  alert("Copied password: " + $generatedPassword.textContent);
});

// Submit
$submitButton.addEventListener("click", function (e) {
  // console.log("Submit clicked");
  e.preventDefault();
  generatePassword(currentLength);
});
