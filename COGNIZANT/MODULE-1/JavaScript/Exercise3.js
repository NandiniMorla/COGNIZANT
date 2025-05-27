const events = [
  { name: "Music Fest", date: "2025-07-01", seats: 10 },
  { name: "Art Workshop", date: "2024-12-01", seats: 0 }
];

const today = new Date();

events.forEach(event => {
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  } else {
    console.log(`Event ${event.name} is unavailable`);
  }
});

function register(event) {
  try {
    if (event.seats > 0) {
      event.seats--;
      console.log("Registered successfully!");
    } else {
      throw new Error("No seats left!");
    }
  } catch (error) {
    console.error(error.message);
  }
}
