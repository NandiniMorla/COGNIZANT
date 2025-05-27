document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const { name, email, event } = e.target.elements;
  if (!name.value || !email.value) {
    alert("All fields are required!");
  } else {
    console.log(`Registered ${name.value} for ${event.value}`);
  }
});
