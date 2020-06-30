function subsequenceSum(arr, len, limit, start, stop, answer, target){
    if(stop === limit){
        let sum = 0;
        for(let i = 0; i < stop; i++){
            sum = sum + answer[i]
        }
        if(sum === target){
            console.log(answer)
        }
        return;
    }
    if(start < len){
        subsequenceSum(arr, len, limit, start+1, stop, answer, target);
        answer[stop] = arr[start];
        subsequenceSum(arr, len, limit, start+1, stop+1, answer, target);
    }
}

let arr = [2, 4, 6, 8, 10, 12, 1, 2, 5, 7];
let k = 5;
let target = 25;
let map = {};
let result = [];
for(let i = 0; i < k; i++){
    result.push(-1);
}

subsequenceSum(arr, arr.length, k, 0, 0, result, target);