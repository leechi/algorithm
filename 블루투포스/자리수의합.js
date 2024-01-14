const 자리수의합 = (array) => {
  let max = array[0];
  let number = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < String(array[i]).length; j++) {
      number += Number(String(array[i])[j]);
    if (number <  ) max = array[i];  
    else number = 0;
    }
  }
  return max;
};

const array = [128, 460, 603, 40, 521, 137, 123];

console.log(자리수의합(array));
