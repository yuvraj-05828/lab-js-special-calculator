// Progression 1: Create special addition
function specialAddition(firstNumber, secondNumber){
  return firstNumber < 0 || secondNumber < 0 ? "Negative numbers are not allowed" : firstNumber - secondNumber;
}

// Progression 2: Create simple division
function simpleDivision(dividend, divisor){
  return dividend < 0 || divisor < 0 ? "Negative numbers are not allowed" : 
      divisor === 0 ? "Not a number" : 
          divisor > dividend ? "Cannot divide a smaller number by a larger number" : dividend / divisor;
}

// Progression 3: Create the special calculator
function specialCalculator(numberOne, numberTwo, operation){
  return operation(numberOne, numberTwo);
}
