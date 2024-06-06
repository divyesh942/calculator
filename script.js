function btnclk(button) {
    var music = new Audio('mymusic2.mp3');
    music.play();
    var value = button.value;
    console.log(value);
    updateDisplay(value);
}

function updateDisplay(value) {
    var display = document.getElementById('display');
    //  appending the value to the current display content:
    if (value === "AC") {
        display.textContent = ""; // Clear the display
    } else if (value === "C") {
        display.textContent = display.textContent.slice(0, -1); // Remove the last character
    } else if (value === "=") {
        // Evaluate the expression (ensure it's safe to evaluate)
        try {
            display.textContent = eval(display.textContent);
        } catch (e) {
            display.textContent = "Error";
        }
    } else {
        display.textContent += value; // Append the button value to the display
    }
}
