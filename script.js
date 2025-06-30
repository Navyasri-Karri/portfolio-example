//hamburger toggle

const hamburger = document.getElementById("hamburger");
const mobileLinks = document.getElementById("mobile-links");

hamburger.addEventListener("click", function (e) {
  e.stopPropagation(); 
  mobileLinks.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (
    mobileLinks.classList.contains("active") &&
    !hamburger.contains(e.target) &&
    !mobileLinks.contains(e.target)
  ) {
    mobileLinks.classList.remove("active");
  }
});
const navLinks = document.querySelectorAll("#mobile-links a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileLinks.classList.remove("active");
  });
});



//details toggles


  function toggleDetails(button) {
    const detailsDiv = button.nextElementSibling;
    if (detailsDiv.style.display === "none" || detailsDiv.style.display === "") {
      detailsDiv.style.display = "block";
      button.textContent = "Hide Details";
    } else {
      detailsDiv.style.display = "none";
      button.textContent = "Details";
    }
  }


  function toggleDetails(btn) {
  const details = btn.nextElementSibling;
  if (details.classList.contains('show')) {
    details.classList.remove('show');
    btn.textContent = "Details";
  } else {
    details.classList.add('show');
    btn.textContent = "Hide Details";
  }
}

