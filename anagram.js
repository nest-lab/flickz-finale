const assert = require('assert');

const isAnagram = (stringA='', stringB='')=>{
  if(stringA.length !== stringB.length){
    return false  
  }else{
    for(let i=0; i<stringA.length; i++){
      if(stringB.indexOf(stringA[i] !== -1)){
        continue;
      }else{
        return false;
      }
    }
    return true;
  }
}

//TEST CASE:
const stringA = 'seun'; const stringB = 'une';
assert.equal(isAnagram(stringA, stringB), true, 'Should return false');