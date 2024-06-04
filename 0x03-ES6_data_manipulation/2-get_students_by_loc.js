export default function getStudentsByLocation(arryOfObj, objLocation) {
  const filteredArray = arryOfObj.filter(
    (arrayItem) => arrayItem.location === objLocation,
  );

  return filteredArray;
}
