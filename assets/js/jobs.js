const img1 = document.getElementById("company1");
const img2 = document.getElementById("company2");
const img3 = document.getElementById("company3");
const img4 = document.getElementById("company4");

const buttonLeft = document.getElementById("job-button-left");
const buttonRight = document.getElementById("job-button-right");

buttonLeft.addEventListener("click", moveLeft);
buttonRight.addEventListener("click", moveRight);

function moveLeft() {
    img1Display = window.getComputedStyle(img1).display;
    img2Display = window.getComputedStyle(img2).display;
    img3Display = window.getComputedStyle(img3).display;

    if (img1Display === "block") {
        img1.style.display = "none";
        img4.style.display = "block";
    }
    else if (img2Display === "block") {
        img1.style.display = "block";
        img2.style.display = "none";
    }
    else if (img3Display === "block") {
        img2.style.display = "block";
        img3.style.display = "none";
    }
    else {
        img3.style.display = "block";
        img4.style.display = "none";
    }
}

function moveRight() {
    img1Display = window.getComputedStyle(img1).display;
    img2Display = window.getComputedStyle(img2).display;
    img3Display = window.getComputedStyle(img3).display;

    if (img1Display === "block") {
        img1.style.display = "none";
        img2.style.display = "block";
    }
    else if (img2Display === "block") {
        img2.style.display = "none";
        img3.style.display = "block";
    }
    else if (img3Display === "block") {
        img3.style.display = "none";
        img4.style.display = "block";
    }
    else {
        img4.style.display = "none";
        img1.style.display = "block";
    }
}

