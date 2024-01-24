function isPalindrome(string){
  let reversedString= string.split('').reverse().join('');
  if(string === reversedString){
    console.log("String is Pallidrome")
  }
  else{
  console.log("String is not Pallidrome")
  }
}

var result = isPalindrome("abbaba")
console.log(result);