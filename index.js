// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Example: Highlight the About section when clicked
    const aboutSection = document.querySelector("#about");
    aboutSection.addEventListener("click", () => {
      aboutSection.style.backgroundColor = "#f0f8ff"; // Change background color
      alert("You clicked the About section!");
    });
  
    // Example: Handle click on Project 1 title
    const projectTitle = document.querySelector("#projects .project h3");
    projectTitle.addEventListener("click", () => {
      projectTitle.style.color = "blue"; // Change text color
      alert("Project 1 is about creating a portfolio using HTML and CSS!");
    });
  
    // Example: Handle footer click
    const footer = document.querySelector("footer");
    footer.addEventListener("click", () => {
      alert("Thank you for visiting my portfolio!");
    });
  });
  