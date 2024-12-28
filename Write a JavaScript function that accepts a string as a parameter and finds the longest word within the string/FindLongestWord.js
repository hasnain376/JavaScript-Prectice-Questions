function  findLongestWord(string){
    let arr = string.split(' ');
    let result = arr[0];
    for ( let i = 1 ; i < arr.length ; i++ ){
        if(result.length < arr[i].length){
            result = arr[i];
        }
    }
    return console.log("The Longest Word Of the Entire String is :" + result);
}

let string  = "Hello World! My name is JavaScript!";
findLongestWord(string);