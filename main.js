let eventKey = document.getElementsByClassName("event")[0].getElementsByClassName("key")[0];

let eventWhich = document.getElementsByClassName("event")[1].getElementsByClassName("which")[0];

let eventCode = document.getElementsByClassName("event")[2].getElementsByClassName("code")[0];

let large = document.getElementsByClassName("box")[0].getElementsByClassName("large")[0];

let title = document.getElementsByTagName("h1")[0]
console.log(title);

let square = document.getElementById("square");
let rectangle = document.getElementById("rectangle");
let circle = document.getElementById("circle");
let triangle = document.getElementById("triangle-up");
console.log(triangle)

document.addEventListener( "keydown", (event) => {

    eventKey.textContent = event.key;
    large.textContent = event.which;
    eventWhich.textContent = event.which;
    eventCode.textContent = event.code;
    title.style.visibility = "hidden";

    if (event.code == "KeyX"){

        rectangle.classList.add('rectangle-rotate')

    }

    if (event.code == "KeyU"){

        circle.classList.add('circle-change');

    }

    if (event.code == "KeyS"){

        square.classList.add('make-circle')

    }

    if (event.code == "KeyK"){

        triangle.classList.add("triangle-move");

    }

})