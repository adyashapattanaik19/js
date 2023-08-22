let a= [5,3,3,3,3,4,6,7]
function removeDuplicates(array){
  const result = [];
  for (let i=0; i<array.length; i++){
    let exists = false;
    for (j=0;j<result.length; j++){
      if(array[i]===result[j]){
        exists = true;
        break;
      }
    }
    if(!exists){
      result.push(array[i]);
    }
  }
  return result;
}
console.log(removeDuplicates(a))
