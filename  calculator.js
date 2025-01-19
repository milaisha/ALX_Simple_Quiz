function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Function to handle button clicks
function handleCalculation(operation) {
    // Retrieve input values and convert them to numbers
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;

    let result;

    // Perform the appropriate operation based on the button clicked
    switch (operation) {
        case "add":
            result = add(number1, number2);
            break;
        case "subtract":
            result = subtract(number1, number2);
            break;
        case "multiply":
            result = multiply(number1, number2);
            break;
        case "divide":
            result = divide(number1, number2);
            break;
        default:
            result = "Invalid operation";
    }

    // Update the result in the DOM
    document.getElementById("calculation-result").textContent = result;
}

document.getElementById("add").addEventListener("click", function () {
    handleCalculation("add");
});

document.getElementById("subtract").addEventListener("click", function () {
    handleCalculation("subtract");
});

document.getElementById("multiply").addEventListener("click", function () {
    handleCalculation("multiply");
});

document.getElementById("divide").addEventListener("click", function () {
    handleCalculation("divide");
});
