let age = window.prompt("Enter your age.");
let maxAge = window.prompt("Enter the max age you would like.");
let numPerDay = window.prompt("Enter how much of your favorite snack you consume in a day.");
let totalRequired = (numPerDay * 365) * (maxAge - age);

    if (confirm(`Are ${age}, ${maxAge}, and ${numPerDay} truly your inputs?`)) {
        document.write("You will need " + totalRequired + " cups of water needed to last you until the ripe old age of " + maxAge);
    }
    else {
        window.alert("Run the code again.");
    }