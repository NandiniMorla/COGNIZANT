console.log("Form submission initiated.");

function submitForm(userData) {
  try {
    console.log("Sending user data:", userData);
    fetch("https://mockapi.io/register", {
      method: "POST",
      body: JSON.stringify(userData)
    }).then(res => console.log("Status:", res.status));
  } catch (error) {
    console.error("Error during registration", error);
  }
}
