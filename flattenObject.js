export const flattenObj = (context, parent) => {
  let outputObj = {};

  Object?.keys(context).forEach((key) => {
    if (typeof context[key] === "object") {
      const childObj = flattenObj(context[key], `${parent}_${key}`);
      outputObj = { ...outputObj, ...childObj };
    } else {
      outputObj[`${parent}_${key}`] = context[key];
    }
  });

  return outputObj;
};
