    //   finding the largest number
 
 // let a=8;
//  let b=6;
//  let c=4;
//  let d=3;
//  let e=9;
// if (a>b && a>c && a>d && a>e) {
//     console.log(a);
// }
// else if (b>a && b>c && b>d && b>e) {
//     console.log(b);
// }
// else if(c>a && c>b && c>d && c>e)  {
//     console.log(c);
// }
// else if(d>a && d>b && d>c && d>e)  {
//     console.log(d);
// }
// else {
//     console.log(e);
// }
  
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

if (day < 10) {
        day = "0" + day;
}

if (month < 10) {
        month = "0" + month;
}
 var formattedDate = month + "/" + day + "/" + year;
 console.log("current date: " + formattedDate);



        // ascending and descinding
//  const strArr1 =['a','f','t','r','l','d'] ;
//  const ascArr = strArr1.sort();
//  console.log(ascArr);

 
//   const strArr2 =['b','s','h','q'] ;
//    const descArr = strArr2.sort();

//  console.log(descArr);

    //   removing duplicates

// let chars =['A','B','C','A','C','D'];
//  let uniqueChars = [...new Set(chars)];
// console.log(uniqueChars);

        //   properties of the object



let person = {

     name: "John",

    age: 30,

     occupation: "Engineer",

    city: "New York"

  };

 

   let properties = Object.keys(person);

 

   console.log("Properties of the object:");

 

   for (let i = 0; i < properties.length; i++) {
        console.log(properties[i]);
   }
   

    

     
    

      
    
         
    
    
     
    
   