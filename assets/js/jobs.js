const img1 = document.getElementById("company1");
const img2 = document.getElementById("company2");
const buttonLeft = document.getElementById("job-button-left");
const buttonRight = document.getElementById("job-button-right");

buttonLeft.addEventListener("click", moveLeft);
buttonRight.addEventListener("click", moveRight);

function moveLeft() {
    if (img1.style.display === "none") {
        img1.style.display = "block";
        img2.style.display = "none";
    }
    else {
        img1.style.display = "none";
        img2.style.display = "block";
    }
}

function moveRight() {
    if (img1.style.display === "none") {
        img1.style.display = "block";
        img2.style.display = "none";
    }
    else {
        img1.style.display = "none";
        img2.style.display = "block";
    }
}

