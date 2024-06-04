export default function getListStudentIds(arryOfObj) {
  let arrayID = [];

  if (!Array.isArray(arryOfObj)) {
    return arrayID;
  }
  arrayID = arryOfObj.map((arrayItems) => arrayItems.id);

  return arrayID;
}
