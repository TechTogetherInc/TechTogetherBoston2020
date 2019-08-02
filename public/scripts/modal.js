var modalPopUp = document.getElementById("modal");
var modalButton = document.getElementById("modalButton");
var closeButton = document.getElementById("close");
var body = document.getElementById("body");
var submit = document.getElementById("submitBtn");
var form = document.getElementById("form");
// var completionScreen = document.getElementById("submission");
var input_1 = document.getElementById("name");
var input_2 = document.getElementById("company");
var input_3 = document.getElementById("email");
var input_4 = document.getElementById("message");

modalButton.addEventListener('click', function () {
   display();
});

closeButton.addEventListener('click', function () {
   close();
});

function display() {
   modalPopUp.style.display = "block";
   body.classList.add('grayBackground');
}

function close() {
   modalPopUp.style.display = "none";
   body.classList.remove('grayBackground');
}

// submit.addEventListener('click', function () {
//    submitScreen();
// })

// function submitScreen() {

//    if (input_1.checkValidity() && input_2.checkValidity() && input_3.checkValidity() && input_4.checkValidity()) {
//       form.style.display = "none";
//       completionScreen.style.display = "flex";
//    }


// }

