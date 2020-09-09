const sortArray = (arrayToSort) => {
  // variable declarations
  const pivot = arrayToSort[0];
  let itemsAbovePivot = [];
  let itemsBelowPivot = [];

  // remove pivot from array to sort
  arrayToSort.shift();

  // sort array to sort into two groups (itemsBelowPivot and itemsAbovePivot)
  arrayToSort.forEach(function (arrayItem, arrayIndex) {
    if (arrayItem >= pivot) {
      itemsAbovePivot.push(arrayItem);
    } else {
      itemsBelowPivot.push(arrayItem);
    }
  });

  // set values of sorted versions of itemsBelowPivot and itemsAbovePivot
  let itemsBelowPivotSorted = itemsBelowPivot;
  let itemsAbovePivotSorted = itemsAbovePivot;

  // sort itemsBelowPivot and itemsAbovePivot if needed
  if (itemsAbovePivot.length > 1) {
    itemsAbovePivotSorted = sortArray(itemsAbovePivot);
  }
  if (itemsBelowPivot.length > 1) {
    itemsBelowPivotSorted = sortArray(itemsBelowPivot);
  }

  // return itemsBelowPivotSorted, pivot, and itemsAbovePivotSorted concatenated
  return itemsBelowPivotSorted.concat([pivot]).concat(itemsAbovePivotSorted);
};
