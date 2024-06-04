const hasValuesFromArray = (setArray, array) => {
  let bool = false;

  array.forEach((elm) => {
    bool = setArray.has(elm);
  });

  return bool;
};

export default hasValuesFromArray;
