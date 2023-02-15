function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", () => {
  const pin = getPin();
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

// calculator deligates id handling
document.getElementById("calculator").addEventListener("click", (event) => {
  const number = event.target.innerText;
  const typedNumberField = document.getElementById("typed-numbers");
  const previousTypedNumber = typedNumberField.value;
  if (isNaN(number)) {
    if (number === "C") {
      typedNumberField.value = "";
    } else if (number === "<") {
      const digits = previousTypedNumber.split("");
      digits.pop();
      const remainingDigits = digits.join("");
      typedNumberField.value = remainingDigits;
    }
  } else {
    const newTypedNumber = previousTypedNumber + number;
    typedNumberField.value = newTypedNumber;
  }
});

// submit -> verify pin
document.getElementById("verify-pin").addEventListener("click", () => {
  const displayPinField = document.getElementById("display-pin");
  const currentPin = displayPinField.value;

  const typedNumberField = document.getElementById("typed-numbers");
  const typedNumber = typedNumberField.value;

  const pinFailureMessage = document.getElementById("pin-failure");
  const pinSuccessMessage = document.getElementById("pin-success");
  if (typedNumber === currentPin) {
    pinSuccessMessage.style.display = "block";
    pinFailureMessage.style.display = "none";
  } else {
    pinFailureMessage.style.display = "block";
    pinSuccessMessage.style.display = "none";
  }
});

// Quize question and answer start here
let count = 0;
console.log(parseInt("count" + 1));
console.log(Math.pow(4, 0.5) + "spiderman" + "987" + Math.sqrt(9));
function generatePin() {
  return Math.floor(Math.random() * 90000) + 10000;
}
console.log(generatePin());
console.log(!isNaN("10X"));

const product = 5;
const price = "7";
const subTotal = product * price;
const tax = subTotal / 10;
const total = subTotal + tax;
console.log(total);

const category = "pen";
const performer = category + "-teller";
console.log(performer);
// Quize question and answer end here
