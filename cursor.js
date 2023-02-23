// custom cursor
const elem1 = document.createElement("div");
const elem2 = document.createElement("div");
elem1.id = "cursor";
elem2.id = "cursor2";

document.body.appendChild(elem1);
document.body.appendChild(elem2);


const cursor = document.getElementById("cursor");
const cursor2 = document.getElementById("cursor2");
const clickables = document.querySelectorAll("a, p, span, img, button, i");

clickables.forEach((element) => {
  element.addEventListener("mouseover", () => {
    cursor.classList.add("active");
    cursor2.classList.add("active");
  });

  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    cursor2.classList.remove("active");
  });
});

document.body.addEventListener("mousemove", function (e) {
  document.addEventListener("mousemove", function (e) {
    cursor.style.transform = cursor2.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
  });
});