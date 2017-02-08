
//function that takes an array of digits and a number.  Build upon the array adding the sum of all digits in signature and do it until the array becomes length of n

function Xbonacci(signature,n){
  //your code here
  var howManyTimes = n-signature.length;
  var fib= [];
  var sum = 0;
  for(var i =0; i<signature.length; i++){
    fib.push(signature[i]);
  }
  for(var j = 0; j<howManyTimes; j++){
    for(var q=fib.length-1; q>= (fib.length - signature.length); q--){
      sum += fib[q];
    }
    fib.push(sum);
    sum =0;
  }
  console.log(fib)
  return fib.slice(0,n);
}


//Reverse the order of words in a string

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

//OR

function reverseWords(str){
  var results = []
  var working = str.split(" ");

  for(var i = (working.length-1); i >= 0; i--) {
    results.push(working[i]);
  }
  return results.join(" "); // reverse those words
}



//piglatin challenge:

function pigIt(str){
  //Code here
  var words = str.split(" ");
  var pigWords = [];
  words.forEach(function(word){
    var pigWord = word.slice(1, word.length) + word[0] + "ay";
    pigWords.push(pigWord);
  })
  var result = pigWords.join(" ")
   return result;
}


//Print letters that are not next to duplicates of themself:

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  if(iterable.length ===0){
    return [];
  }
  var uniques = [iterable[0]];
  var counter = 0;
  var letters = iterable;
  for(var i =0; i<letters.length; i++){
    if(letters[i] !== uniques[counter]){
      uniques.push(letters[i]);
      counter +=1;
    }
  }
  return uniques;
}


//Turn numbers into english words///////

function number2words(n){
    // works for numbers between 0 and 999999
    var b=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var b2=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    if(n>=0 && n<20){
      return b[n];
    }
    if(n >= 20 && n<100){
      return b2[Math.floor(n/10)-2]+(n%10===0?'':'-'+b[n%10])
    }
    if(n>=100 && n<1000){
      return b[Math.floor(n/100)]+' hundred'+(n%100===0?'':' '+number2words(n%100));
    }else{
      return number2words(Math.floor(n/1000))+' thousand'+(n%1000===0?'':' '+number2words(n%1000));
    }
  }
