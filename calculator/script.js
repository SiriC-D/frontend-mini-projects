// 1. We "grab" the display input from the HTML so we can change its text later
const display = document.getElementById("display");

// 2. This function adds numbers or symbols to the screen
function appendToDisplay(input) {
  // We take the current value of the display and add the new input to the end of it
  // Example: If display is "1" and input is "0", it becomes "10"
  display.value += input;
}

// 3. This function clears everything
function clearDisplay() {
  // We set the value to an empty string (nothing)
  display.value = "";
}

// 4. This function deletes only the last character typed
function deleteLast() {
  // .slice(0, -1) means "keep everything from the start (0) to the second-to-last character"
  display.value = display.value.slice(0, -1);
}

// 5. This function does the actual math!
function calculate() {
  try {
    // eval() takes the string (like "5+5") and calculates the result (10)
    display.value = eval(display.value);
  } catch (error) {
    // If the user types something impossible (like "5++2"), show "Error"
    display.value = "Error";
  }
}
