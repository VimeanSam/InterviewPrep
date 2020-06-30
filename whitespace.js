let str = "     This is     full    of          white       space";

let newStr = removeAllWhitespaces(str);
console.log(newStr)

function removeAllWhitespaces(str){
    let sentence = str;
    let newSentence = ''

    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] !== ' ' && sentence[i] !== '\t'){
            newSentence = newSentence + sentence[i]
        }
    }
    return newSentence;
}
