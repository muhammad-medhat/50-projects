const panels = document.querySelectorAll(".panel");
const removeClass = (coll, cls) => {
  coll.forEach((el) => {
    el.classList.remove(cls);
  });
};

panels.forEach((el) => {
  //   console.log(el);
  el.addEventListener("click", () => {
    // console.log(el);
    removeClass(panels, "active");
    el.classList.toggle("active");
  });
});
