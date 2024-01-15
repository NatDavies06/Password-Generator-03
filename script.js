// Password characters
function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericChars = "0123456789";
  let specialChars = "!@#$%^&*()_+{}:;,.<>?";

  let allChars = "";
  if (includeUppercase) allChars += uppercaseChars;
  if (includeLowercase) allChars += lowercaseChars;
  if (includeNumeric) allChars += numericChars;
  if (includeSpecial) allChars += specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

// Generate element
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

// Password input
function writePassword() {
  // Password criteria
  let passwordLength = parseInt(prompt("Enter the password length? (between 8-128 characters"));
  console.log("Include Password Length:", passwordLength);

  let includeLowercase = confirm("Include lowercase characters?");
  console.log("Include Lowercase:", includeLowercase);

  let includeUppercase = confirm("Include uppercase characters?");
  console.log("Include Uppercase:", includeUppercase);

  let includeNumeric = confirm("Include numeric characters?");
  console.log("Include Numeric:", includeNumeric);

  let includeSpecial = confirm("Include special characters?");
  console.log("Include Special:", includeSpecial);

  // Generated password form input
  let generatedPassword = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  console.log("Generated Password:", generatedPassword);

  passwordText.value = generatedPassword;
  console.log("Generate Password button clicked");
}

// Generate button
generateBtn.addEventListener("click", writePassword);
