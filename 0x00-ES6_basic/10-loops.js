export default function appendToEachArrayValue(array, appendString) {
  const tmpArr = [];
  for (const value of array) {
    let tmpstr = '';
    tmpstr += appendString + value;
    tmpArr.push(tmpstr);
  }

  return tmpArr;
}
