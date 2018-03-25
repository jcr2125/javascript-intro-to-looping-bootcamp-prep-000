function forLoop(arr){
  for(let i = 0; i < 25; i++){
    arr.push(`I am ${i + 1} strange loop${i === 0 ? "" : "s"}.`);
  }
  return arr;
}

function whileLoop(num){
  while(num >= 0){
    console.log(num);
    num--;
  }
}