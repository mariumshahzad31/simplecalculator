document.addEventListener("DOMContentLoaded", function () {
    var display = document.getElementById("display");
    var buttons = document.querySelectorAll(".btn");
    var currentInput = "";
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var value = button.getAttribute("data-value");
            if (value === "C") {
                currentInput = "";
            }
            else if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                }
                catch (_a) {
                    currentInput = "Error";
                }
            }
            else {
                currentInput += value;
            }
            display.value = currentInput;
        });
    });
});
