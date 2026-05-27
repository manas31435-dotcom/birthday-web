const heartBtn = document.getElementById("heartBtn");
const nextBtn = document.getElementById("nextBtn");

heartBtn.addEventListener("click", () => {

document.getElementById("page1").classList.add("hidden");

document.getElementById("page2").classList.remove("hidden");

});

nextBtn.addEventListener("click", () => {

document.getElementById("page2").classList.add("hidden");

document.getElementById("page3").classList.remove("hidden");

});
