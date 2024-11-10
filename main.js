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
    var x = document.getElementById("skills");
    if ((x === null || x === void 0 ? void 0 : x.style.display) === "none") {
        x.style.display = "block";
    }
    else if (x) {
        x.style.display = "none";
    }
}
// Get the button element
var button = document.querySelector('.flip');
// Add a mouseover event listener
button === null || button === void 0 ? void 0 : button.addEventListener('mouseover', function () {
    // Change the button's background color
    button.style.color = 'red';
});
// Add a mouseout event listener
button === null || button === void 0 ? void 0 : button.addEventListener('mouseout', function () {
    // Change the button's background color back to its original color
    button.style.color = '';
});
