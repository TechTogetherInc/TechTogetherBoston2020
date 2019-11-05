function barWidth() {
    // const width0 = document.getElementById("title0");
    // const bar0 = document.getElementById("bar0");
    // bar0.style.width = String((parseInt(getComputedStyle(width0).width.substring(0, getComputedStyle(width0).width.length - 2)) + 32) + "px");

    const height0 = document.getElementById("height0");
    const img = document.querySelectorAll("#carousel1 div img");
    for (i = 0; i < img.length; i++) {
        img[i].style.height = String((parseInt(getComputedStyle(height0).width.substring(0, getComputedStyle(height0).width.length - 2)) + 200) + "px");
    }
}

window.onload = barWidth; 
window.onresize = barWidth;  

