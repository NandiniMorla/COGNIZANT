function addEvent(name, date, category, seats) {
  return { name, date, category, seats };
}

function registerUser(event) {
  if (event.seats > 0) event.seats--;
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

function registrationTracker(category) {
  let count = 0;
  return function () {
    count++;
    console.log(`Registrations for ${category}: ${count}`);
  };
}

const trackMusic = registrationTracker("Music");
trackMusic();
trackMusic();
