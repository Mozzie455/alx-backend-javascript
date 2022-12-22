export default function appendToEachArrayValue(array, appendString) {
  const iterable = [];
  for (const val of array) {
    iterable.push(appendString + val);
  }

  return iterable;
}
