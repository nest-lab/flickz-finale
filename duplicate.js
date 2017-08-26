//To find the duplicate in array;
const assert = require('assert');
const duplicate = (values=[])=>{
  var duplicateValues = [];
  var searchedValues =[];
  for(let i=0; i<values.length; i++){
     if(searchedValues){
      if(searchedValues.indexOf(values[i]) !== -1){
        duplicateValues.push(values[i]);
        searchedValues.push(values[i]);
      }
       searchedValues.push(values[i]);      
     }
  }
  return duplicateValues;
}
//TEST CASE:
assert.equal(duplicate([1,3,4,4]).length, 1, 'should return number of duplicate');
