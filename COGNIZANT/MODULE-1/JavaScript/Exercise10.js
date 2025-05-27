function createEvent(name = "Untitled", date = "TBD", category = "General") {
  return { name, date, category };
}

const { name, date } = createEvent("Music Fest", "2025-07-15");
console.log(name, date);

const original = [{ name: "A" }];
const cloned = [...original];
