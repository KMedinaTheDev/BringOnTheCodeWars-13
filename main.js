function stray(numbers) {
//iterate through array of Odd
for(let i = 0; i< numbers.length; i++){
// check if the number at the 1st position is equal to the number at the next
  if(numbers[i] === numbers[i+1]){
//   check if the next number is equal to the number at the 1st postion
    if(numbers[i] === numbers[i+2]){
// //go back to loop
      } else{
      return numbers[i+2];
    }
    //now if the number at the current position is not equal to the number two index positions over

    }else if(numbers[i] !== numbers[i+2]){
    return numbers[i];
      }
    }
 }
