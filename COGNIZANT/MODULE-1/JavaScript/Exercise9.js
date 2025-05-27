fetch("https://mockapi.io/events")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Using async/await
async function loadEvents() {
  try {
    document.body.innerHTML += "Loading...";
    const res = await fetch("https://mockapi.io/events");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Failed to load events", err);
  }
}
loadEvents();
