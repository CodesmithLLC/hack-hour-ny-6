// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,2,'fizz', 4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz',16 ];

function fizzbuzz(num) {
    let returningArr = [];
  
      let i = 1;
    while(i<= num){
        returningArr.push(i);
      i++
    }
      for(let j = 0; j < returningArr.length; j++){
    if((returningArr[j]%3==0) && (returningArr[j]%5 ==0)){
              returningArr.splice(j,1,'FIZZBUZZ');
          }else if(returningArr[j]%5 == 0){
              returningArr.splice(j,1,"BUZZ");
          }else{
           if(returningArr[j]%3 == 0){
              returningArr.splice(j,1,'FIZZ');
           }
          }
    }
      return returningArr;
  
      
  }