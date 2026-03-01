// Implement Debounce
function debounce(fn, delay) {
     let timer;

     return function(...args){
         clearTimeout(timer);

         timer = setTimeout(() => {
             fn.apply(this,args)
         },delay);
     }
}
function search(query) {
    console.log("API Call for:", query);
}

const debouncedSearch = debounce(search,1000);

// Simulating rapid typing
debouncedSearch("H");
debouncedSearch("He");
debouncedSearch("Hel");
debouncedSearch("Hell");
debouncedSearch("Hello");
