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

document.addEventListener("click", function(key) {
    switch (key) {
        case "Enter":
            calc();
            break;
        case "x":
            inputBox.value += '*';
            break;
    
    
        default:
            break;
    }
})



equalsButton.addEventListener("click", function() { 
    userInput = inputBox.value;
    const result = '\n'+ eval(userInput);
    inputBox.value += result;
});

function calc() { 
    userInput = inputBox.value;
    const result = '\n'+ eval(userInput);
    inputBox.value += result;
}