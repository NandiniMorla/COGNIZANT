function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const yogaEvent = new Event("Yoga Camp", "2025-06-30", 15);
console.log(yogaEvent.checkAvailability());

console.log(Object.entries(yogaEvent));
