function shoppingList(shopping) {
  // Write your code here...
  let content = document.querySelector("#content"); // this selects the #content section
  let uList = document.createElement('ul'); // This creates the ul element

  for (let i = 0; i < shopping.length; i++){
    let liList = document.createElement('li'); // This creates a li element
   
    liList.innerHTML = shopping[i];
    uList.appendChild(liList);   
  }
  content.appendChild(uList);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
