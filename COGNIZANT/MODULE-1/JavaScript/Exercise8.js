document.getElementById("categoryFilter").onchange = function (e) {
  console.log(`Filtering by category: ${e.target.value}`);
};

document.addEventListener("keydown", (e) => {
  console.log(`Search key: ${e.key}`);
});
