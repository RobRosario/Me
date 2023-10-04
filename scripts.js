document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contact-panel").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("description").value;

    const mailtoLink = `mailto:robertleerosario@yahoo.com?subject=Contact from ${name}&body=${message}`;
    window.location.href = mailtoLink;
  });
});
