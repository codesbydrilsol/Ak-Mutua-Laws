// ===============================
// MOBILE MENU TOGGLE
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked (optional but recommended)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // ===============================
  // TEAM MEMBER HOVER EFFECTS
  // ===============================
  document.querySelectorAll(".team-member").forEach(member => {
    member.addEventListener("mouseenter", () => {
      member.style.transform = "translateY(-15px) scale(1.02)";
    });

    member.addEventListener("mouseleave", () => {
      member.style.transform = "translateY(0) scale(1)";
    });
  });

  // ===============================
  // STRUCTURE MEMBER HOVER EFFECTS
  // ===============================
  document.querySelectorAll(".structure-member").forEach(member => {
    member.addEventListener("mouseenter", () => {
      member.style.transform = "translateY(-8px)";
    });

    member.addEventListener("mouseleave", () => {
      member.style.transform = "translateY(0)";
    });
  });
});
