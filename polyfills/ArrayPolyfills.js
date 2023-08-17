/**
 *
 * @param {Function} fn callback function
 * @returns Array
 */
export const myMapFunction = function (fn) {
  const res = [];

  for (let i = 0; i < this?.length; i++) {
    res.push(fn(this[i]));
  }

  return res;
};

/**
 *
 * @param {Function} fn callback function
 * @returns new Array with filtered values;
 */
export const myFilterFunction = function (fn) {
  const res = [];

  for (let i = 0; i < this?.length; i++) {
    if (fn(this[i])) {
      res.push(this[i]);
    }
  }

  return res;
};

/**
 *
 * @param {Function} fn callback function
 * @returns new Array with filtered values;
 */
export const myReducerFunction = function (fn, accumulator) {
  for (let i = 0; i < this?.length; i++) {
    if (!accumulator) {
      accumulator = this[i];
    } else {
      accumulator = fn(this[i], accumulator);
    }
  }

  return accumulator;
};
