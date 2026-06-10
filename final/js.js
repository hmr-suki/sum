// VARIABLES

let counter = 0;

const message = document.querySelector(".message");
const input = document.querySelector(".nameInput");
const helloBtn = document.querySelector(".helloBtn");
const resetBtn = document.querySelector(".resetBtn");
const cat = document.querySelector(".cat");


// FUNCTION

function sayHello() {

    counter++;

    // CONDITION

    if (input.value === "") {

        message.textContent =
            "Please enter your name.";

    } else {

        message.textContent =
            "Hello " +
            input.value +
            ". Clicked " +
            counter +
            " times.";

    }
}


function resetPage() {

    counter = 0;

    message.textContent =
        "Type your name below.";

    input.value = "";

    cat.style.width = "200px";
}


function makeCatBig() {

    cat.style.width = "300px";
}


function makeCatNormal() {

    cat.style.width = "200px";
}


// EVENT LISTENERS

helloBtn.addEventListener(
    "click",
    sayHello
);

resetBtn.addEventListener(
    "click",
    resetPage
);


// MOUSEOVER EVENT

cat.addEventListener(
    "mouseover",
    makeCatBig
);

cat.addEventListener(
    "mouseout",
    makeCatNormal
);


// INPUT EVENT

input.addEventListener(
    "input",
    function () {

        message.textContent =
            "Typing: " +
            input.value;

    }
);