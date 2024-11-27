const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        // Handle clear button
        if (value === "C") {
            display.value = "";
        }
        // Handle backspace button
        else if (value === "←") {
            display.value = display.value.slice(0, -1);
        }
        // Handle equal button
        else if (value === "=") {
            try {
                display.value = eval(display.value.replace(/÷/g, "/").replace(/×/g, "*"));
            } catch {
                display.value = "Error";
            }
        }
        // Append other values to the display
        else {
            display.value += value;
        }
    });
});
