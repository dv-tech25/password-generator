document.addEventListener('DOMContentLoaded', () => {

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:',.<>?/";

  // Get elements
  const inputvalue = document.getElementById('inputvalue');
  const button = document.getElementById('button');
  const screen = document.getElementById('screen');
  const uppercase = document.getElementById('uppercase');
  const lowercase = document.getElementById('lowercase');
  const numbers = document.getElementById('numbers');
  const symbols = document.getElementById('symbols');

  button.addEventListener('click', generatePassword); //event listener

  function generatePassword() {
    let allChars = "";
    let requiredChars = [];

   
    if (uppercase.checked) {
      allChars += upperChars;
      requiredChars.push(upperChars.charAt(Math.floor(Math.random() * upperChars.length)));
    }
    if (lowercase.checked) {
      allChars += lowerChars;
      requiredChars.push(lowerChars.charAt(Math.floor(Math.random() * lowerChars.length)));
    }
    if (numbers.checked) {
      allChars += numberChars;
      requiredChars.push(numberChars.charAt(Math.floor(Math.random() * numberChars.length)));
    }
    if (symbols.checked) {
      allChars += symbolChars;
      requiredChars.push(symbolChars.charAt(Math.floor(Math.random() * symbolChars.length)));
    }

    // Get input length
    const length = parseInt(inputvalue.value, 10); // use 10 for avoiding ambiguity

  
    if (isNaN(length) || length < requiredChars.length) {
      alert(`Password length must be at least ${requiredChars.length}.`);
      return;
    }

   
    let password = [...requiredChars];
    for (let i = requiredChars.length; i < length; i++) {
      password.push(allChars.charAt(Math.floor(Math.random() * allChars.length)));
    }

    // Shuffle the password for randomness
    password = shufflePassword(password);

    // Display the password by converting into string
    screen.value = password.join("");
  }

  // Shuffle the password array
  function shufflePassword(password) {
    for (let i = password.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp=password[i];
      password[i]=password[j];
      password[j]=temp;
    }
    return password;
  }
});

