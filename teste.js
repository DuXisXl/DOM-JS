function checkPalindrome(str){
    let reversed = str.split("").reverse().join("")
    return str === reversed
  }
  
  
  console.log(checkPalindrome("reviver"));
  
  console.log(checkPalindrome("luz azul"));
  
  console.log(checkPalindrome("ana"));