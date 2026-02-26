 // Print 1 to n

 function printNumber(n) {
     if ( n=== 0) 
      return;

      printNumber(n-1);
      console.log(n);
 }
 printNumber(3);