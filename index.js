firstNumber;
operation;

function setFirstNumber() {
    firstNumber = document.getElementById("inputnumber").value;
    document.getElementById("inputnumber").value = "";
}

function add() {
    setFirstNumber();
    operation = "+";
}

function subtract() {
    setFirstNumber();
    operation = "-";
}

function multiply() {
    setFirstNumber();
    operation = "*";
}

function divide() {
    setFirstNumber();
    operation = "/";
}

function solve() {
    secondNumber = document.getElementById("inputnumber").value;
    if (operation == "+") {
        var solution = Number(firstNumber) + Number(secondNumber);
        document.getElementById("inputnumber").value = solution;
    }
    else if (operation == "-") {
        var solution = Number(firstNumber) - Number(secondNumber);
        document.getElementById("inputnumber").value = solution;
    }
    else if (operation == "*") {
        var solution = Number(firstNumber) * Number(secondNumber);
        document.getElementById("inputnumber").value = solution;
    }
    else if (operation == "/") {
        var solution = Number(firstNumber) / Number(secondNumber);
        document.getElementById("inputnumber").value = solution;
    }
}

function addToString(number) {
    currentValue = document.getElementById("inputnumber").value;
    document.getElementById("inputnumber").value = currentValue + number;
}
