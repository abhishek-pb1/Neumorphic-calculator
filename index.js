var inputBox = document.querySelector(".text-box #userInput");
var userInput ='';
var equalsButton = document.querySelector(".numpad .equals");

// Keyboard presses
document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "Enter":
            calc();
            break;
        case "x":
            inputBox.value += "*";
            break;
    
    
        default:
            break;
    }
})

// Mouse clicks
for (let i=0;i<document.querySelectorAll(".numpad .btn").length; i++){
document.querySelectorAll(".numpad .btn")[i].addEventListener("click", function() {
    switch (this.innerHTML) {
        case "C":
            inputBox.value = '';
            break;
        case "1":
            inputBox.value += '1';
            break;
        case "2":
            inputBox.value += '2';
            break;
        case "3":
            inputBox.value += '3';
            break;
        case "4":
            inputBox.value += '4';
            break;
        case "5":
            inputBox.value += '5';
            break;
        case "6":
            inputBox.value += '6';
            break;
        case "7":
            inputBox.value = '7';
            break;
        case "8":
            inputBox.value += '8';
            break;
        case "9":
            inputBox.value += '9';
            break;
        case "00":
            inputBox.value += '00';
            break;
        case "0":
            inputBox.value += '0';
            break;
        case ".":
            inputBox.value += '.';
            break;
        case "+":
            inputBox.value += '+';
            break;
        case "-":
            inputBox.value += '-';
            break;
        case "x":
            inputBox.value += '*';
            break;
        case "%":
            inputBox.value += '%';
            break;
        case "=":
            // inputBox.value += '3';
            userInput = inputBox.value;
            const result = '\n'+ eval(userInput);
            inputBox.value += result;
            break;
            
            default:
                break;
            }
    if(this.classList.contains("backspace")){
        inputBox.value = inputBox.value.slice(0, -1);
    }
    else if(this.classList.contains("divide")){
        inputBox.value += '/';
    }
})
}



// equalsButton.addEventListener("click", function() { 
//     userInput = inputBox.value;
//     const result = '\n'+ eval(userInput);
//     inputBox.value += result;
// });

function calc() { 
    userInput = inputBox.value;
    const result = '\n'+ eval(userInput);
    inputBox.value += result;
}