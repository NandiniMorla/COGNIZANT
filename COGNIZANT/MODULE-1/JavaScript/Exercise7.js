const eventContainer = document.querySelector("#event-container");

communityEvents.forEach(event => {
  const card = document.createElement("div");
  card.textContent = `${event.name} - ${event.category}`;
  eventContainer.appendChild(card);
});
