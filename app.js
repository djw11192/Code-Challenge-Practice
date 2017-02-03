
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
