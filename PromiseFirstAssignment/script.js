document.getElementById("orderButton").addEventListener("click", () => {
  const selectedFoodItems = document.querySelectorAll(
    "input[name='food']:checked"
  );
  if (selectedFoodItems.length === 0) {
    alert("Please select at least one food item.");
    return;
  }
  const orderID = generateOrderID();
  const randomSeconds = getRandomSeconds(5, 8);
  const orderPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, randomSeconds * 500);
  });

  orderPromise.then(() => {
    const foodImage = document.getElementById("foodImage");
    const orderIDElement = document.getElementById("orderID");

    const foodImages = [
      "/PromiseFirstAssignment/burger.jpg",
      "/PromiseFirstAssignment/fries.jpg",
      "/PromiseFirstAssignment/drink.jpg",
    ];
    const randomImage =
      foodImages[Math.floor(Math.random() * foodImages.length)];
    foodImage.innerHTML = `<img src="${randomImage}" alt="Food Image">`;
    foodImage.style.display = "block";
    orderIDElement.textContent = `Order ID: ${orderID}`;
  });
});
function generateOrderID() {
  return Math.floor(Math.random() * 1000);
}
function getRandomSeconds(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
