document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thanks, ${name}! Your message has been sent successfully.`);
    console.log(`Message from ${name} (${email}): ${message}`);
});
function updateSkill(skillId, percentId, value) {
    document.getElementById(skillId).style.width = value + "%";
    document.getElementById(percentId).innerText = value + "%";
  }
  
  // Example usage to dynamically update percentages
  updateSkill("html-css-bar", "html-css-percent", 90); // Update HTML & CSS
  updateSkill("javascript-bar", "javascript-percent", 75); // Update JavaScript
  updateSkill("Python-bar", "Python-percent", 85); // Update WordPress
  updateSkill("MYSQL-bar", "MYSQL-percent", 80); // Update WordPress
  updateSkill("Django-bar", "Django-percent", 70); // Update WordPress
  
