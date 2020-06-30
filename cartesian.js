/*
 * Write a function that takes two lists of
integers, and returns a
list of all pairs of integers, one from the first
list, one from the second, in any order, as so:

  [1, 2, 3], [4, 5, 6]
    --> [[1, 4], [1, 5], [1, 6], [2, 4], ...]
    
    
    Write a function that computes the cartesian
product of a list of lists, as so:

  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    --> [[1, 4, 7], [1, 4, 8], [1, 4, 9], [1, 5, 7], ...]

The lists can be of any length, but you can assume that all 
lists are of the same length.  The length of each list is not
necessarily the same as the the number of lists passed to the function,
so for example these would all be valid arguments:

   [[1, 2, 3], [4, 5, 6]]
   [[1, 2], [3, 4], [5, 6]]
   [[1], [2], [3], [4]]
 */

//PART 1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [];

for(let i = 0; i < arr1.length; i++){
  for(let j = 0; j < arr2.length; j++){
    //console.log(i+"|"+j);
    result.push([arr1[i], arr2[j]]);
  }
}

console.log('PART 1')
console.log(result);


//PART2
function cartesianList(args, temp) {
    //move the index of the 2d array
    let params = args.slice(1);
    //store the different combinations
    let result = [];
    for (let i = 0; i < args[0].length; i++) {
        //create a copy of a temporary array that will be used to store temporary combinations
        let copy = temp.slice();
        copy.push(args[0][i]);
        //if parameter is undefined we reached the end of the recursion tree and we must push the result
        if (!params.length) {
            result.push(copy);
        } else {
            //backtrack
            result = result.concat(cartesianList(params, copy));
        }
    }
    return result;
}

console.log('PART 2')
let l3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let l4 = [[1, 2], [3, 4], [5, 6]];
console.log(cartesianList(l3, []));

console.log('PART 2b')
console.log(cartesianList(l4, []));