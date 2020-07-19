/* https://javascript.info/map-set */

// Map is a collection of keyed data items, just like an Object
// But the main difference is that Map allows keys of any type.

// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

/* Object to Map */
let obj = {
    name: "John",
    age: "30"
};

let map = new Map(Object.entries(obj))
console.log(map)
console.log(map.get('age'))

/* Map to Object */
let newMap = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let newObj = Object.fromEntries(newMap)  // Experimental feature fromEntries() [Supported in Chrome 74]

console.log(newObj)
