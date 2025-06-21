

// guessnumper
const randomnumber = Math.floor(Math.random() * 100) + 1;

// get
const guessinput = document.getElementById('guessinput');
const guessbutton = document.getElementById('guessbutton');
const message = document.getElementById('message');

// add
guessbutton.addEventListener('click', function() {
    const userguess = Number(guessinput.value);

    if (userguess > randomnumber) {
        message.textContent = "Too high! Try again.";
    } else if (userguess < randomnumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = `Correct! The number was ${randomnumber}`;
    }
    guessinput.value = "";
});