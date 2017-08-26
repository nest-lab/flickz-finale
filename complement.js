
const complement = (setA=[], setB=[])=>{
  var complementsOfTwoSet = [];
  for(let i=0; i<setA.length; i++){
    if(setB.indexOf(setA[i])===-1){
      complementsOfTwoSet.push(setA[i]);
      continue;
    }
  }
  return complementsOfTwoSet;
}

//TEST CASE:
const setA = [1, 2, 3, 4, 5];
const setB = [2, 3, 1, 0, 5];

const complementsOfTwoSet = complement(setA, setB);
console.log(complementsOfTwoSet); //4

