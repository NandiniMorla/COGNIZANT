const communityEvents = [];

communityEvents.push({ name: "Baking Workshop", category: "Cooking" });

const musicEvents = communityEvents.filter(e => e.category === "Music");

const displayCards = communityEvents.map(e => `Event: ${e.name}`);
console.log(displayCards);
