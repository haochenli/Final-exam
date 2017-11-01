var matrix = [
  [1,2,3,4,5],
  [2,3,4,5,6],
  [3,4,5,6,7],
]

function sumMatrix(matrix) {
  let sum = 0 ;
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0 ; j < matrix[i].length ; j++){
      sum+=matrix[i][j];
    }
  }
  return sum;
}
function sumMatrix3(matrix) {
  let sum = 0 ;
  matrix.forEach(function(array) {
   array.forEach((value=>{
     sum+=value;
     return;
   })) 
   return;
  });
  return sum;
}

function sumMatrix2(matrix) {
  let sum = 0;
  matrix.map((array)=>{
    array.map((value)=>{
      sum+=value;
      return;
    })
    return;
  })
  return sum;
}

console.log(sumMatrix(matrix));
console.log(sumMatrix2(matrix));
console.log(sumMatrix3(matrix));

