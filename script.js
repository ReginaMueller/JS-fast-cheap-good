const fast_btn = document.getElementById("fast-btn");
const fast_input = document.getElementById("fast-input");

const cheap_btn = document.getElementById("cheap-btn");
const cheap_input = document.getElementById("cheap-input");

const good_btn = document.getElementById("good-btn");
const good_input = document.getElementById("good-input");

let lastCheckedBoxes = ["", ""];
let count = 0;
let fastOnclicked = false;
let cheapOnclicked = false;
let goodOnclicked = false;

function render() {
  if (count > 2) {
    if (lastCheckedBoxes[1] == "fast") {
      fast_input.checked = false;
      fastOnclicked = false;
    } else if (lastCheckedBoxes[1] == "cheap") {
      cheap_input.checked = false;
      cheapOnclicked = false;
    } else if (lastCheckedBoxes[1] == "good") {
      good_input.checked = false;
      goodOnclicked = false;
    }
  }
}

fast_input.addEventListener("change", () => {
  if (fastOnclicked) {
    count--;
    lastCheckedBoxes[0] = "";
    fastOnclicked = false;
  } else {
    count++;
    lastCheckedBoxes[1] = lastCheckedBoxes[0];
    lastCheckedBoxes[0] = "fast";
    fastOnclicked = true;
  }
  render();
  if (count > 2) count--;
});

fast_btn.addEventListener("click", () => {
  if (fastOnclicked) {
    count--;
    lastCheckedBoxes[0] = "";
    fast_input.checked = false;
    fastOnclicked = false;
  } else {
    count++;
    lastCheckedBoxes[1] = lastCheckedBoxes[0];
    lastCheckedBoxes[0] = "fast";
    fast_input.checked = true;
    fastOnclicked = true;
  }
  render();
  if (count > 2) count--;
});

cheap_input.addEventListener("change", () => {
  if (cheapOnclicked) {
    count--;
    lastCheckedBoxes[0] = "";
    cheapOnclicked = false;
  } else {
    count++;
    lastCheckedBoxes[1] = lastCheckedBoxes[0];
    lastCheckedBoxes[0] = "cheap";
    cheapOnclicked = true;
  }
  render();
  if (count > 2) count--;
});

cheap_btn.addEventListener("click", () => {
  if (cheapOnclicked) {
    count--;
    lastCheckedBoxes[0] = "";
    cheap_input.checked = false;
    cheapOnclicked = false;
  } else {
    count++;
    lastCheckedBoxes[1] = lastCheckedBoxes[0];
    lastCheckedBoxes[0] = "cheap";
    cheap_input.checked = true;
    cheapOnclicked = true;
  }
  render();
  if (count > 2) count--;
});

good_input.addEventListener("change", () => {
  if (goodOnclicked) {
    count--;
    lastCheckedBoxes[0] = "";
    goodOnclicked = false;
  } else {
    count++;
    lastCheckedBoxes[1] = lastCheckedBoxes[0];
    lastCheckedBoxes[0] = "good";
    goodOnclicked = true;
  }
  render();
  if (count > 2) count--;
});

good_btn.addEventListener("click", () => {
  if (goodOnclicked) {
    count--;
    lastCheckedBoxes[0] = "";
    good_input.checked = false;
    goodOnclicked = false;
  } else {
    count++;
    lastCheckedBoxes[1] = lastCheckedBoxes[0];
    lastCheckedBoxes[0] = "good";
    good_input.checked = true;
    goodOnclicked = true;
  }
  render();
  if (count > 2) count--;
});
