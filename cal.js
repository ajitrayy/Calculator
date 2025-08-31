let display = document.querySelector(".input");
let buttons = document.querySelectorAll(".button");
let expression = "";
let openBracket = true; // () toggle ke liye

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (value === "=") {
            try {
                expression = eval(expression).toString();
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }
        } 
        else if (value === "AC") {
            expression = "";
            display.value = "";
        } 
        else if (value === "X") {
            expression = expression.slice(0, -1);
            display.value = expression;
        } 
        else if (value === "()") {
            if (openBracket) {
                expression += "(";
                openBracket = false;
            } else {
                expression += ")";
                openBracket = true;
            }
            display.value = expression;
        } 
        else if (value === "+/-") {
            if (expression) {
                // last number ko toggle karne ke liye regex
                let lastNum = expression.match(/(\d+\.?\d*)$/);
                if (lastNum) {
                    let start = expression.slice(0, -lastNum[0].length);
                    let num = parseFloat(lastNum[0]);
                    num = -num;
                    expression = start + num.toString();
                    display.value = expression;
                }
            }
        } 
        else {
            expression += value;
            display.value = expression;
        }
    });
});
