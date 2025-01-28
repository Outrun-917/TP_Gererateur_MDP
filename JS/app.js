const $generatedPassword = document.querySelector(".generated-password");
const $selectedLength = document.querySelector(".selected-length");
const $rangeInput = document.querySelector("#length");

// Checkboxes
const $includeUpperCase = document.querySelector("#uppercase");
const $includeLowerCase = document.querySelector("#lowercase");
const $includeNumbers = document.querySelector("#numbers");
const $includeSymbols = document.querySelector("#symbols");

// console.log($generatedPassword);
// console.log($selectedLength);
// console.log($rangeInput);

// console.log($includeUpperCase);
// console.log($includeLowerCase);
// console.log($includeNumbers);
// console.log($includeSymbols);

// Checkbox state
let UpperCaseOn = false;
let LowerCaseOn = false;
let NumbersOn = false;
let SymbolsOn = false;

// Password generator
function generatePassword(length) {
  let result = "";

  let settings = "";

  const characters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = characters.toUpperCase();
  const numbers = "1234567890";
  const symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  settings += characters
  settings += uppercaseCharacters
  settings += numbers
  settings += symbols
  
  console.log(settings)

  const charactersLength = characters.length;
  let counter = 0;

  while (counter < length) {
    result += settings.charAt(Math.floor(Math.random() * settings.length));
    counter += 1;
  }

  console.log(result);
}

generatePassword(10)

function generateUpperCase(length) {
  generatePassword(length);
  $generatedPassword.textContent = result.toUpperCase();
}

// generateUpperCase(10);

// Checkbox listeners
$includeUpperCase.addEventListener("change", function () {
  if (this.checked) {
    UpperCaseOn = true;
  } else {
    UpperCaseOn = false;
  }
});

$includeLowerCase.addEventListener("change", function () {
  if (this.checked) {
    LowerCaseOn = true;
  } else {
    LowerCaseOn = false;
  }
});

$includeNumbers.addEventListener("change", function () {
  if (this.checked) {
    NumbersOn = true;
  } else {
    NumbersOn = false;
  }
});

$includeSymbols.addEventListener("change", function () {
  if (this.checked) {
    SymbolsOn = true;
  } else {
    SymbolsOn = false;
  }
});

$selectedLength.textContent = $rangeInput.value;

$rangeInput.addEventListener("input", function (e) {
  $selectedLength.textContent = e.target.value;
});
