"use strict";

///functions/// 

// function school (boys,girls){
//     const total = `in 10th std ${boys} boys and ${girls} girls`;
//     return total;
// }

//  const calculation= school(20,10);
//  console.log(calculation);


//  ///functions delcalartion & expressions

//        //delcalartion
//  function students1 (boys) {
//     return 50 - boys ;
//  }
// const diff1 = students1(70);

//         //expression
// const students2 = function (boys){
// return 50 - boys;
// }
// const diff2 = students2(80);
      
//      //output
// console.log(diff1,diff2);




//Arrow functions

// const untilretirement =(birth,fname) => {
// const age = 2020-birth;
// const retirement = 50-age;

// return `${fname} retires in ${retirement} years`;
// }

// console.log(untilretirement(1997,"rohit"));
// console.log(untilretirement(1995,"tejas"));


// functions Calling Other functions

// function cutfruitpieces(fruit) {
//     return fruit * 4;
//   }
  
//   function fruitProcessor(apples, oranges) {
//     const A_Pieces = cutfruitpieces(apples);
//     const O_Pieces = cutfruitpieces(oranges);
  
//     const juice = `Juice with ${A_Pieces} piece of apple and ${O_Pieces} pieces of orange.`;
//     return juice;
//   }
//   console.log(fruitProcessor(2, 3));

// Introduction to Arrays


// const friend1 = 'tejas';
// const friend2 = 'vishal';
// const friend3 = 'yogesh';

// const friends = ['tejas', 'vishal', 'yogesh'];
// console.log(friends);

// const y = new Array(1997, 2001, 2005, 2022);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'kayas';
// console.log(friends);


// const fName = 'rakesh';
// const rakesh = [fName, 'patil', 2025 - 1997, 'trainee', friends];
// console.log(rakesh);
// console.log(rakesh.length);

// const calAge = function (birthYear) {
//   return 2037 - birthYear;
// }
// const years = [1997, 2001, 2005, 2019, 2022];

// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])];
// console.log(ages);


/////Basic Array operation 

// 1)push=

// const friends = ["yogesh","rakesh","harshal","vishal"]
// console.log(friends);
// const updatefriends = friends.push("amol");
// console.log(updatefriends);

// //2) unshift =
// friends.unshift("ajay");
// console.log(friends);

// //3) pop =
// friends.pop();
// console.log(friends);

// //4)shift =
// friends.shift();
// console.log(friends);

// //5) include =

// console.log(friends.includes("vishal"));
// console.log(friends.includes("nothing"));

// //6) index of element =

// console.log (friends.indexOf("yogesh"));
// console.log (friends.indexOf("vishal"));

//introduction of objects == Key value pairs

// const details = {Fname : "umesh",
//                 Lname  : "patil",
//                 age : 2023 -1997,
//                 job : "Trainee",
//                 friends:["vishal","amit","shoeab"]
// };
// console.log(details);


//object methods 

const details = {Fname : "umesh",
                 Lname  : "patil",
                 Dob: 1997,
                 job : "Trainee",
                 friends:["vishal","amit","shoeab"]
                 hasdriniglicense : "true",     

                calculateAge : function(Dob){
                    return 2022-Dob
                }
            };
 console.log(details);

 console.log(details.calculateAge(1997));
 console.log(details['calculateAge'](1997));



