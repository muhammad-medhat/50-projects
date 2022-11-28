const prog = document.getElementById("prog");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const actives = document.querySelectorAll(".active");

const updateProgress = (step) => {
  prog.style.width = `(${step})/100%`;
};

let current = 1;

circles.forEach((el) => {
  el.addEventListener("click", () => {
    // removeClass(circles, "active");
    el.classList.toggle("active");
  });
});

next.addEventListener("click", () => {
  if (current < circles.length) {
    current++;
    update();
  }
  console.log(current);
});
prev.addEventListener("click", () => {
  current--;
  update();
  if (current < 1) {
    current = 1;
  }
  console.log(current);
});
function update() {
  circles.forEach((c, idx) => {
    if (idx < current) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  prog.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (current === 1) {
    prev.disabled = true;
  } else if (current === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
