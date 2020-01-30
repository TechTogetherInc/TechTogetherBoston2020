const img1 = document.getElementById("company1");
const img2 = document.getElementById("company2");
const img3 = document.getElementById("company3");
const img4 = document.getElementById("company4");
const img5 = document.getElementById("company5");

const buttonLeft = document.getElementById("job-button-left");
const buttonRight = document.getElementById("job-button-right");

const li1 = document.getElementById("liTag1");
const li2 = document.getElementById("liTag2");
const li3 = document.getElementById("liTag3");
const li4 = document.getElementById("liTag4");
const li5 = document.getElementById("liTag5");

buttonLeft.addEventListener("click", moveLeft);
buttonRight.addEventListener("click", moveRight);

li1.addEventListener("click", function () { changeImage(1); });
li2.addEventListener("click", function () { changeImage(2); });
li3.addEventListener("click", function () { changeImage(3); });
li4.addEventListener("click", function () { changeImage(4); });
li5.addEventListener("click", function () { changeImage(5); });

function moveLeft() {
    img1Display = window.getComputedStyle(img1).display;
    img2Display = window.getComputedStyle(img2).display;
    img3Display = window.getComputedStyle(img3).display;
    img4Display = window.getComputedStyle(img4).display;

    if (img1Display === "block") {
        img1.style.display = "none";
        img5.style.display = "block";
    }
    else if (img2Display === "block") {
        img1.style.display = "block";
        img2.style.display = "none";
    }
    else if (img3Display === "block") {
        img2.style.display = "block";
        img3.style.display = "none";
    }
    else if (img4Display === "block") {
        img3.style.display = "block";
        img4.style.display = "none";
    }
    else {
        img4.style.display = "block";
        img5.style.display = "none";
    }
}

function moveRight() {
    img1Display = window.getComputedStyle(img1).display;
    img2Display = window.getComputedStyle(img2).display;
    img3Display = window.getComputedStyle(img3).display;
    img4Display = window.getComputedStyle(img4).display;

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
    else if (img4Display === "block") {
        img4.style.display = "none";
        img5.style.display = "block";
    }
    else {
        img5.style.display = "none";
        img1.style.display = "block";
    }
}


function changeImage(num) {
    if (num === 1) {
        img1.style.display = "block";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "none";
    }
    else if (num === 2) {
        img1.style.display = "none";
        img2.style.display = "block";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "none";
    }
    else if (num === 3) {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "block";
        img4.style.display = "none";
        img5.style.display = "none";
    }
    else if (num === 4) {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "block";
        img5.style.display = "none";
    }
    else {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "block";
    }

}
