// Controller
function getValues() {
  // get the user's input
  // decide what to do with it
  let userInput = document.getElementById('message').value;

  let reversedInput = reverseString(userInput);

  displayString(reversedInput);
}

// Business logic
function reverseString(message) {
  // take a string, return it in reverse
  let reversedMessage = '';

  for (let index = message.length - 1; index >= 0; index = index - 1) {
    reversedMessage += message[index];
  }

  return reversedMessage;
}

// View
function displayString(reversedMessage) {
  // show the string on the page
  document.getElementById('msg').textContent = reversedMessage;
  document.getElementById('alert').classList.remove('d-none');
}

// Swal.fire(
//  {
//    backdrop: false,
//    title: 'Rewind',
//    text: msg
//  }
// );