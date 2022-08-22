// Intersection 

function intersectionsSets(setA, setB) {
  const intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem)
    }
  }
  return intersection
}

const setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3, 4, 5, 8, 7, 6]);

const resultIntersection = intersectionsSets(setA, setB)
console.log("result Intersection ->>>>>", resultIntersection)


// IsSuperSet
function isSuperSet(setA, subset) {
  for (let elem of subset) {
    if (!setA.has(elem)) {
      return false
    }
  }
  return true
}

const resultIsSuperSet = isSuperSet(setA, setB);
console.log("isSuperSet ->>>>", resultIsSuperSet)

// Union 
function unionSet(setA, setB) {
  const union = new Set(setA);
  for (let elem of setB) {
    union.add(elem)
  }
  return union
}

const resultUnionSet = unionSet(setA, setB)
console.log("resultUnionSet ->>>>>", resultUnionSet)

// Difference 
function differenceSet(setA, setB) {
  const difference = new Set(setA);
  for (let elem of setB) {
    difference.delete(elem)
  }
  return difference
}

const resultDifferenceSet = differenceSet(setA, setB)
console.log("resultDifferenceSet =>>>>>>>", resultDifferenceSet)


// check for duplicates 

function checkDuplicates(arr1) {
  const mySet = new Set(arr1)
  return mySet.size < arr1.length;
}

const resultCheckDuplicates = checkDuplicates(arr1)
console.log("resultCheckDuplicates ->>>>>", resultCheckDuplicates)


// getting all the unique values from arrays 

function uniqueList(arr1, arr2) {
  const mySet = new Set(arr1.concat(arr2));
  return Array.from(mySet)
}

const arr1 = [1, 1, 2, 3, 4, 2, 3, 4, 2]
const arr2 = [2, 3, 5, 7, 4, 8, 4, 6, 6]

const resultUnique = uniqueList(arr1, arr2);
console.log(resultUnique)