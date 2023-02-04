const screen = document.getElementById("screen");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let s,
  m,
  h = 0;

start.addEventListener("click", () => {
  //   screen.innerText = Date.now();
  setInterval(() => {
    s = s == 60 ? 0 : s + 1;
    m = m == 60 ? 0 : m + 1;
    console.log(s);
  }, 1000);
});
