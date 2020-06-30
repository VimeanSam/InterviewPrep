let str = 'reverse'

let rev = reverse(str);
console.log(rev)

function reverse(str){
    let word = str;
    let char = '';
    for(let i = word.length-1; i >= 0; i--){
        char = char + word[i]
    }
    return char;
}