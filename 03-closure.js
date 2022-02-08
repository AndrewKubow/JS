 function createInc (n){
     return function(num){
        return n + num;
     }
 }

 const addOne = createInc(1); // 1 closed in function
 console.log(addOne(10));
 console.log(addOne(2));

 function urlGenerator(domain){         
     return function(url){
         return `https://${url}.${domain}`;
     }
 }

 const comUrl = urlGenerator('com');
 console.log(comUrl('google'))

 const bizUrl = urlGenerator('biz');
 console.log(bizUrl('deal'))