// document.addEventListener("DOMContentLoaded", () => {
//     const skillsSection = document.querySelector(".skills");
//     const toggleSkillsButton = document.createElement("button");
//     toggleSkillsButton.textContent = "Toggle Skills Section";
//     document.body.insertBefore(toggleSkillsButton, skillsSection);

//     toggleSkillsButton.addEventListener("click", () => {
//         if (skillsSection?.classList.contains("hidden")) {
//             skillsSection.classList.remove("hidden");
//         } else {
//             skillsSection?.classList.add("hidden");
//         }
//     });
// });
function myFunction() {
     let x: HTMLElement | null = document.getElementById("skills");
      if (x?.style.display === "none") { 
        x.style.display = "block";
     } else if(x){
         x.style.display = "none";
         } }
// Get the button element
const button: HTMLElement | null = document.querySelector('.flip');

// Add a mouseover event listener
button?.addEventListener('mouseover', () => {
  // Change the button's background color
  button.style.color = 'red';
});

// Add a mouseout event listener
button?.addEventListener('mouseout', () => {
  // Change the button's background color back to its original color
  button.style.color = '';
});