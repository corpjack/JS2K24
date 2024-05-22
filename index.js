const res =
{
    name:'Burger king',
    Location: 'noida,delhi,lucknow',
    category:['Italian','Pizzeria'],
    mainMenu: ['pizza','pasta','risotto'],
    openingHours:
    {
      thu:{
        open:12,
        close:10
      },
      fri:{
        open:12,
        close:11
      },
      sat:{
        open:10,
        close:6
      }
    }
  
}
//!default values
// const {name , Location,openingHours} = res;
// console.log(name,Location,openingHours);

//!mutating variable while destructuring 
// let a =40;
// let b = 50;

// const obj = {a:20,b:10,c:50}
// // {a,b} = obj; // unexpected Exception we can not assign to code block.
// ({a,b} = obj);
// console.log(a,b);

//!Nested Objects
const {fri} = openingHours;
console.log(fri);
//! data comming from api 
// const data ={
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }

//   const {id,title} = data;
//   console.log(id,title);

  //! another way of destructuring
//   const {
//     id: ids,
//     title:logo
//   } = data
//   console.log(ids,logo);

  //!when we do not any data than how destrucring work

//   const{menu , mainMenu} =res;
//   console.log(menu,mainMenu); //we will get undesfined because menu is not in our object.

  //! we can define some default data when data is undefined it is useful when we not get any value.

// const {menu1 =[], mainMenu: starter= []} = res;
// console.log(menu1,starter);   


