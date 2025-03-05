document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll(".btn");

    let currentInput: string = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === "C") {
                currentInput = "";
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = "Error";
                }
            } else {
                currentInput += value;
            }

            display.value = currentInput;
        });
    });
});
