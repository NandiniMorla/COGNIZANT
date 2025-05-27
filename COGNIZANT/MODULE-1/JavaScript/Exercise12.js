const userData = { name: "Nandini", email: "nandini@example.com", event: "Art Fair" };

fetch("https://mockapi.io/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(userData)
})
.then(res => res.json())
.then(data => {
  setTimeout(() => {
    alert("Registration successful!");
  }, 1000);
})
.catch(err => alert("Registration failed!"));
