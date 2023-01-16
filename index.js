// coding js 
// 1.Warmup-2 -- stringTimes
// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

// function stringTimes(str, n){
//        temp = "";
//      for (i = 0; i<n; i++)
//        temp +=str
//      return temp;
//    }

// 2.Warmup-1 -- monkeyTrouble
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

// function monkeyTrouble(aSmile, bSmile){
//     if(aSmile && bSmile){
//     return true;
//     }
//   if(!aSmile && !bSmile){
//   return true;
//   }
//   return false;

// 3.Warmup-1 -- sumDouble
// Given two int values, return their sum. Unless the two values are the same, then return double their sum.
function sumDouble(a, b){
    if(a == b)
    return 2 * (a + b);
    
    return a + b;
    }

    
// 4.Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
function diff21(n){
    if(n <= 21){ 
    return 21 - n;
  }else{
  return (n-21)*2;
  }
  }

//  5.Given a string and a non-negative int n, return a larger string that is n copies of the original string.
function stringTimes(str, n){
    temp = "";
    for (i =0 ; i<n; i++)
      temp +=str
    return temp;
  }

// 6.Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".
function helloName(name){
    return "Hello "  +  name  +  "!" ;
  }

// 7.