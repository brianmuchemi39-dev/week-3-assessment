// Initial array
let shoppingList = ["Bread", "Milk", "Sugar", "Rice"];

// 1. Display the entire shopping list
console.log("1. Entire shopping list:", shoppingList);

// 2. Display the first item in the array
console.log("2. First item:", shoppingList[0]);

// 3. Display the last item in the array
console.log("3. Last item:", shoppingList[shoppingList.length - 1]);

// 4. Add "Cooking Oil" to the end of the array
shoppingList.push("Cooking Oil");

// 5. Remove the first item from the array
shoppingList.shift();

// 6. Change "Sugar" to "Tea Leaves"
let sugarIndex = shoppingList.indexOf("Sugar");
if (sugarIndex !== -1) {
  shoppingList[sugarIndex] = "Tea Leaves";
}
console.log("Updated list after modifications:", shoppingList);

// 7. Display the total number of items in the shopping list
console.log("7. Total number of items:", shoppingList.length);