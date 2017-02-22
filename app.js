
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


///Generate hashtag challenge:


function generateHashtag(str) {
  var marketing = ["#"];
  var words = str.split(" ");
  words.forEach(function(word){
    var capitalizedWord = word[0].toUpperCase() + word.slice(1,word.length);
    console.log(capitalizedWord);
    marketing.push(capitalizedWord);
  })
  var result = marketing.join("");
  return result;
}


OR


function generateHashtag(str) {
  var hashed = '#' + str.split(' ').map(function(v) {return v.charAt(0).toUpperCase() + v.slice(1);}).join('');
  return hashed.length > 140 || str == "" ? false : hashed;
}


///////Predicting christmas presents - Comparing objects

function guessGifts(wishlist, presents) {
  // TODO
  var gifts = [];
  for(var i=0; i<presents.length; i++){
    var present = presents[i];
    for(var j=0; j<wishlist.length; j++){
      if(present.size == wishlist[j].size && present.clatters == wishlist[j].clatters && present.weight == wishlist[j].weight){
        if(gifts.indexOf(wishlist[j].name) ==-1){
          gifts.push(wishlist[j].name);
        }
      }
    }
  }
  return gifts;
}



/////Find all prime numes 0 - n////////////

function prime(num) {
  // Generate an array containing every prime number between 0 and the num specified (inclusive)
  var primes =[];
  for(var j=2; j<num+1; j++){
    if(isPrime(j)){
      primes.push(j);
    }
  }
  function isPrime(n){
    for(var i= 2; i<n; i++){
      if(n%i == 0){
        return false;
      }
    }
    return true;
  }
  return primes;
}




//////Palindrome step counter////////////


var palindromeChainLength = function(n) {
  var steps = 0;
  while(!isPalindromic(n)) {
    steps++;
    n+=reverseNum(n);
  }
  return steps;
};

function isPalindromic(n) {
  if (n < 0) throw 'isPalindromic only works for positive numbers.';
  if (Math.floor(n / 10) === 0) return true; // Single digit numbers are palindromic.
  if (n % 10 === 0) return false; // n > 0, without leading 0s cannot be palindromic if ending in 0.
  return reverseNum(n) === n;
}

function reverseNum(n) {
  var r = 0;
  while (n) {
    r *= 10;
    r += n % 10;
    n = Math.floor(n / 10);
  }
  return r;
}

///Translate Gandolf: Replace each vowel with the vowel that comes 3 before it.  Replace other letters with the letter 10 places before

function tongues(code) {
  var indexToUpcase = false;
  var result = [];
  var vowels = ["a", "i", "y", "e", "o", "u"];
  var others = ['b', 'k', 'x', 'z', 'n', 'h', 'd', 'c', 'w', 'g', 'p', 'v', 'j', 'q', 't', 's', 'r', 'l', 'm', 'f'];
  var sentence = code.split("");
  for(var i=0; i<sentence.length; i++){
    if(sentence[i] === sentence[i].toUpperCase()){
      indexToUpcase = true;
      console.log(indexToUpcase)
    }
    var check = sentence[i].toLowerCase();
    for(var j=0; j<others.length; j++){
      if(check === others[j]){
        var newIndex = j-10;
        if(newIndex<0){
          newIndex += others.length;
        }
        sentence[i]= others[newIndex]
      }
    }
    for(var y=0; y<vowels.length; y++){
      if(check===vowels[y]){
        var newIndex = y-3;
        if(newIndex<0){
          newIndex += vowels.length;
        }
        sentence[i] = vowels[newIndex];
      }
    }
    if(indexToUpcase){
      sentence[i] = sentence[i].toUpperCase();
      indexToUpcase = false;
    }
  }
  return sentence.join("");
}
