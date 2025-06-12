// Handle form submission with thank-you alert
function handleSubmit() {
  alert("Thank you for reaching out, Mbavhalelo will get back to you soon!");
  return false; // Prevent actual form submission
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
