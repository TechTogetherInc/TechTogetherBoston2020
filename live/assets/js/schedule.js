$("[data-toggle=popover]").popover(); // initialize bootstrap popovers 

const btn1 = document.getElementById("day1-btn");
const btn2 = document.getElementById("day2-btn");
const btn3 = document.getElementById("day3-btn");

const tbl1 = document.getElementById("day1-tbl");
const tbl2 = document.getElementById("day2-tbl");
const tbl3 = document.getElementById("day3-tbl");

btn1.addEventListener("click", function () { changeTable(1) });
btn2.addEventListener("click", function () { changeTable(2) });
btn3.addEventListener("click", function () { changeTable(3) });

function changeTable(day){
    if(day === 1){
        btn1.style.border = "none";
        btn1.style.backgroundColor = "#808cFB";
        btn1.style.color = "#FFF";

        btn2.style.border = "1px #000 solid";
        btn2.style.backgroundColor = "#FFF";
        btn2.style.color = "#000";

        btn3.style.border = "1px #000 solid";
        btn3.style.backgroundColor = "#FFF";
        btn3.style.color = "#000";

        tbl1.style.display = "block";
        tbl2.style.display = "none";
        tbl3.style.display = "none";
    }
    else if(day === 2){
        btn2.style.border = "none";
        btn2.style.backgroundColor = "#808cFB";
        btn2.style.color = "#FFF";

        btn1.style.border = "1px #000 solid";
        btn1.style.backgroundColor = "#FFF";
        btn1.style.color = "#000";

        btn3.style.border = "1px #000 solid";
        btn3.style.backgroundColor = "#FFF";
        btn3.style.color = "#000";

        tbl1.style.display = "none";
        tbl2.style.display = "block";
        tbl3.style.display = "none";
    }
    else{
        btn3.style.border = "none";
        btn3.style.backgroundColor = "#808cFB";
        btn3.style.color = "#FFF";

        btn2.style.border = "1px #000 solid";
        btn2.style.backgroundColor = "#FFF";
        btn2.style.color = "#000";

        btn1.style.border = "1px #000 solid";
        btn1.style.backgroundColor = "#FFF";
        btn1.style.color = "#000";

        tbl1.style.display = "none";
        tbl2.style.display = "none";
        tbl3.style.display = "block";
    }

}
