

function linearSearch(str,target){
   for(let i=0; i<str.length; i++){
      if(str[i] === target){
          return i
      }
   }
   return -1;
}
console.log(linearSearch(["Rohan","Mohan","Anil"], "Rohan"));