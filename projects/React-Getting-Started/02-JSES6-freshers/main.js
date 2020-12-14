// Let and Const

// both are block level elements

////////////////////////////////////
//Arrow function

// function sayHello() {
//     console.log('hello')
// }
// sayHello()

// (function sayHello(name) {
//     console.log('hello ' + name)
// })('usman')

// let hello = () => {
//     console.log('hello us')
// }
// hello()

// let hello = () => console.log('hello us')
// hello()

// let hello = (name) => console.log('hello ' + name)
// hello('usman')


///////////////////////////////

//forEach

// let fruits = ['bananas', 'mangos', 'apples'];

// fruits.forEach(function(fruit) {
//     console.log(fruit)
// })


// fruits.forEach((fruit, index) => {
//     console.log(fruit, index)
// })

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


//////////////////////////////


// map
// it returns an array

// let singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase())

// console.log(singleFruit)

/////////////////////////////////////////////

//Filter
// filter is similar to for each and map but its a higher order array method and it is used to return an array with things filtered out and often it is used in state managers like redux or even in context API's where we want to delete  for something from the state we want to filter out

// const person = [
//     { id: 1, name: 'usman' },
//     { id: 2, name: 'farooq' },
//     { id: 3, name: 'ehsan' },
//     { id: 4, name: 'ali' },
// ]

// we want to delete ali
// the reason of filter is that in react the states are immutable, we cannot directly change it. now we will make a copy of it without 'ali'

// const person2 = person.filter(person => person.id !== 4);
// console.log(person2)

/////////////////////////////////////////////

// Spread Operator
// const arr = [1, 2, 3, 4];
// const arr2 = [...arr, 5, 6, 7, 8];
// // console.log(arr2)
// const arr3 = [...arr2.filter(num => num !== 2)] // 2 is filtered out
// console.log(arr3)


// const person1 = {
//     name: 'usman',
//     age: 25
// }

// const person2 = {
//         ...person1,
//         email: "ehmusman@gmail.com"
//     }
//     // console.log(person2)

////////////////////////////////////////////////////

// Destructuring
// we are going to use it a lot
// we are going to pull values out like arrays and objects

// const profile = {
//         name: 'usman',
//         fname: 'bakhsh',
//         age: 26,
//         address: {
//             street: 5,
//             colony: 'new green town'
//         },
//         hobbies: ['movies', 'music', 'coding']
//     }
//     // how to pull out the name from profile?
// const { name, fname, address, hobbies } = profile;

// console.log(name, fname, address, hobbies[2])

///////////////////////////////////////////////////////


// classes

// in react we have two kind of components
// 1- functional components and 2- class based components
// class based components are more common because we have states in it and a lot of of things which we can do with it

// we have to know about how ES6 class works, and react class is just like a ES6 classes

// class Person {
//     // a class have different properties and methods. property is just like attribute which we create from that class.
//     // and methods are just functions inside of the class
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         return `Hello my name is ${this.name} and my age is ${this.age}`
//     }
// }

// // here we are making an object from that class
// const person1 = new Person('usman', 25)
// const person2 = new Person('farooq', 29)

// console.log(person1.greet())


// ////////////////////////////////////////////////
// // Subclasses
// class Customer extends Person {
//     constructor(name, age, balance) {
//         super(name, age) // inheriting the name and age
//         this.balance = balance;
//     }
//     info() {
//         return `${this.name} owes $${this.balance}.00`
//     }
// }
// const customer1 = new Customer('usman', 25, 80)

// console.log(customer1.info())
//     // console.log(person1.info()) // its wrong. we cannot acces the methods of subclasses.
// console.log(customer1.greet()) // but we can access the methods of main class from subclass



///////////////////////////////////////////////////////

//Modules 
// modules are the big part of any framework because we cannot put everything in just one JS file
// we will create files for each components and will export it and we'll import it in our main JS file
//we'll deal with ES6 modules in react very much

// react uses webpack bundle behined the scene

// here we'll only mimic the module pattern.
// actually different files work with babel webpack


// MIMICARY


// file1 (file1.js)
// we'll export this name in file2
// export const name = 'usman';
// export const num = [1,2,3,4]; // we also have to export it

// we also have an export default option
// let  Person is in file 1, than

// export default Person;


// file2 (file2.js)
// import { name } from './file1'
// // here i will use
// console.log(name)

// import Person from './file1' // default export dont need curly braces