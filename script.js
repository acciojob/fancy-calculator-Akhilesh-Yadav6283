//your JS code here. If required.
// Take input for the first variable (multiply by 2)
let firstInput = prompt("Enter the first number:");
let result = parseFloat(firstInput) * 2;

// Take input for the second variable
let secondInput = prompt("Enter the second number:");

// Add the second input to the result of the first input multiplied by 2
result += parseFloat(secondInput);

// Display the final result using alert() in the specified format
alert("The final result is: " + result);
