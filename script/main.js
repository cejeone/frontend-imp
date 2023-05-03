AOS.init();

//landingpage tentang

const circle = document.querySelector(".circle");
const hoverDiv = document.querySelector(".hoverDiv");
hoverDiv.addEventListener("mousemove", (e) => {
     circle.style.display = "block";
     circle.style.left = e.clientX - 48 + "px";
     circle.style.top = e.clientY - 48 + "px";
});
hoverDiv.addEventListener("mouseout", (e) => {
     circle.style.display = "none";
});

