// Smooth scrolling for navigation

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior: "smooth"
});

});

});



// Simple recruiter attention tracking (console)

const projects = document.querySelectorAll(".project");

projects.forEach(project => {

project.addEventListener("mouseenter", () => {

console.log("Recruiter viewing project:", project.querySelector("h3").innerText);

});

});
