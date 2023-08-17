import { flattenUserObj } from "./constants.js";
import { flattenObj } from "./flattenObject.js";
import {
  myFilterFunction,
  myMapFunction,
  myReducerFunction,
} from "./polyfills/ArrayPolyfills.js";
import { timer } from "./timer.js";

/**
 * Function to print i to n after every second
 */
// timer(10);

/**
 * Flatten an object
 */
// const outputObj = flattenObj(flattenUserObj, "user");
// console.log(outputObj);

/**
 * Arrays.map
 * Polyfill
 */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const square = (i) => i * i;

// Array.prototype.myMap = myMapFunction;
// const newArr = arr.myMap(square);
// console.log("Map", newArr);

/**
 * Arrays.filter
 * Polyfill
 */
// const greaterThanFour = (i) => i > 4;
// Array.prototype.myFilter = myFilterFunction;
// const filteredArray = arr.myFilter(greaterThanFour);
// console.log("Filtered", filteredArray);

/**
 * Arrays.reducer
 * Polyfill
 */
// const sum = (i, acc) => acc + i;
// Array.prototype.myReducer = myReducerFunction;
// const reduced = arr.myReducer(sum, 0);
// console.log("Reduced", reduced);
