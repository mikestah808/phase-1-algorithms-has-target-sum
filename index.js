function hasTargetSum(array, target) {
  // Write your algorithm here

  // write a function called hasTargetSum that receives two arguments 
  // an array of integers
  // a target integer 
  // the function should return true if any pair of number in the array adds up to the target number 

  // example: 

  // hasTargetSum([3, 8, 12, 4, 11, 7], 10);
  // returns true, since 3 and 7 add up to 10


  for(let i = 0; i< array.length; i++){
    // iteration will start at the index of 0 for the length of the array, then increment by 1 each time
      let arrayTwoNumbers = target - array[i] 
    // value of arrayTwoNumbers will be the target number minus the array of iteration i
    for(let j= i+1; array.length; j++){
    // j has the value of iteration i + 1
    // for example, if value of i = 0, j will equal index 1, which is number 8 in the array 
    // if value of i = 1, j will equal index 2, which is number 12 in the array 
    
      if(arrayTwoNumbers === array[j]){
        return true 
      }
  }
        return false
  }
};

/* 
  Write the Big O time complexity of your function here

  // Big O time complexity of function hasTargetSum is O(n^2) because of the nested for loop.

*/

/* 
  Add your pseudocode here

  - check each element in the array and see if two numbers within the array equals target integer
  - stop process once 2 numbers within the array are found 

  solutions?
  - loop?

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
