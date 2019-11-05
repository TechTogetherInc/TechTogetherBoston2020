const track1_button = document.getElementById("track1");
const track2_button = document.getElementById("track2");
const track3_button = document.getElementById("track3");
const track4_button = document.getElementById("track4");

const track1_text = document.getElementById("track1_text");
const track2_text = document.getElementById("track2_text");
const track3_text = document.getElementById("track3_text");
const track4_text = document.getElementById("track4_text");

const track1_img = document.getElementById("track1_img");
const track2_img = document.getElementById("track2_img");
const track3_img = document.getElementById("track3_img");
const track4_img = document.getElementById("track4_img");

track1_button.addEventListener("click", function () { switchTrack(1) });
track2_button.addEventListener("click", function () { switchTrack(2) });
track3_button.addEventListener("click", function () { switchTrack(3) });
track4_button.addEventListener("click", function () { switchTrack(4) });

function switchTrack(track) {
    const opp = ".25";
    if (track === 1) {
        track1_text.style.display = "block";
        track2_text.style.display = "none";
        track3_text.style.display = "none";
        track4_text.style.display = "none";
        track1_img.style.opacity = "1";
        track2_img.style.opacity = opp;
        track3_img.style.opacity = opp;
        track4_img.style.opacity = opp;
    }
    else if (track === 2) {
        track1_text.style.display = "none";
        track2_text.style.display = "block";
        track3_text.style.display = "none";
        track4_text.style.display = "none";
        track1_img.style.opacity = opp;
        track2_img.style.opacity = "1";
        track3_img.style.opacity = opp;
        track4_img.style.opacity = opp;
    }
    else if (track === 3) {
        track1_text.style.display = "none";
        track2_text.style.display = "none";
        track3_text.style.display = "block";
        track4_text.style.display = "none";
        track1_img.style.opacity = opp;
        track2_img.style.opacity = opp;
        track3_img.style.opacity = "1";
        track4_img.style.opacity = opp;
    }
    else {
        track1_text.style.display = "none";
        track2_text.style.display = "none";
        track3_text.style.display = "none";
        track4_text.style.display = "block";
        track1_img.style.opacity = opp;
        track2_img.style.opacity = opp;
        track3_img.style.opacity = opp;
        track4_img.style.opacity = "1";
    }
}

