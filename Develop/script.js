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
  // Password required criteria
  let passwordLength = parseInt(prompt("Enter the password length? (between 8-128 characters"));
  console.log("Password Length Correct:", passwordLength);

  let includeLowercase = confirm("Include lowercase characters?");
  console.log("Password includes Lowercase:", includeLowercase);

  let includeUppercase = confirm("Include uppercase characters?");
  console.log("Password includes Uppercase:", includeUppercase);

  let includeNumeric = confirm("Include numeric characters?");
  console.log("Password includes Numeric:", includeNumeric);

  let includeSpecial = confirm("Include special characters?");
  console.log("Password includes Special:", includeSpecial);

  // Generated password from input
  let generatedPassword = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  console.log("Generated Password:", generatedPassword);

  passwordText.value = generatedPassword;
  console.log("Generate Password button clicked");
}

// Generate button function
generateBtn.addEventListener("click", writePassword);
