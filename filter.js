/*
  Filter array method
    Gives you back an array of the same or less length
    Applies a filter to an array based on the condition within the callback
    If the callback returns true; add the item to the new array
    If the callback returns false; skip that item.

    By default, filter does not modify the items.

  The structure of the function when you call it is the same as map:
    Provide a callback with 1-3 parameters
      1: The item
      2: The index
      3: The array

*/

const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Mango',
  'Orange',
  'Papaya',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Strawberry'
];
// Create a new array where each item is fruits with less than 6 characters in their name

let shortFruits = fruits.filter(item => {
  if (item.length < 6) {
    return true;
  } else {
    return false;
  }
});
