// Get the HTML elements we need to use
const lengthInput = document.getElementById("length-input");
const useUppercase = document.getElementById("use-uppercase");
const useLowercase = document.getElementById("use-lowercase");
const useNumbers = document.getElementById("use-numbers");
const useSymbols = document.getElementById("use-symbols");
const generateButton = document.querySelector(".generate-button");
const copyButton = document.getElementById("copy-button");
const passwordOutput = document.getElementById("password-output");

// Define the character sets we can use
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%&*()}{[]?></=";

// Add an event listener to the generate button
generateButton.addEventListener("click", function() {
  const passwordLength = lengthInput.value;
  let allowedChars = "";
  
  // Add the character sets to the allowed chars based on which checkboxes are selected
  if (useUppercase.checked) {
    allowedChars += uppercaseChars;
  }
  if (useLowercase.checked) {
    allowedChars += lowercaseChars;
  }
  if (useNumbers.checked) {
    allowedChars += numberChars;
  }
  if (useSymbols.checked) {
    allowedChars += symbolChars;
  }
  
  // Generate the password using the allowed chars
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  
  // Set the password output field to the generated password
  passwordOutput.value = password;
});

// Add an event listener to the copy button
copyButton.addEventListener("click", function() {
  passwordOutput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});
