window.addEventListener("load", function() {
    var inputEl = document.getElementById('introdu');

    function isOdd() {

        if (!inputEl.value) {
            return alert("Please enter a number.");
        }

        var inputNumber = Number(inputEl.value);

        if (isNaN(inputNumber)) {
            return alert(inputEl.value + " is not a valid value. Please enter a number.");
        }

        if (inputNumber % 2 == 1) {
            alert(inputNumber + " is an odd number");
        } else {
            alert(inputNumber + " is not an odd number ");
        }
    }

    document.getElementById("verify").addEventListener("click", function() {
        isOdd();
    });
});
