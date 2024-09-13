//console.log("Hi!");

// Variables

// var, let, const
// let a = 10;
// a=20;
// console.log(a);

// var and let

let a = 10; // number
let b="hello"; // string
let c=true; // boolean
let d=[1,2,3,4]; // arrays
let e={
    name: "Alice",
    age: 20
} // objects

// console.log(typeof(a))
// functions

// normal function
// function sum(a,b) {
//     return a+b;
// }

// console.log(sum(10,20));

// arrow function

// const sum = (a,b) => a+b;

// console.log(sum(10,20));

// const person = {
//     name: "Alice",
//     age: 20,
//     greetNormal: function(){
//         console.log(this);
//     },
//     greetArrow: () => {
//         console.log(this);
//     }
// }

// person.greetNormal();
// person.greetArrow();

// const person = () => {
//     if(true){
//         let a=10;
//     }
//     console.log(a);
// }

// person();

// console.log("10"===10);


// for(let i=0;i<5;i++){
    //     console.log(number[i]);
    // }
    
    // map, filter, reduce
    
    // const mappednumber = numbers.map((number) => {
        //     return "The number is: "+number;
        // })
        
        // console.log(mappednumber);
        
        // output: 
        // ["the number is 1",
        //     "the number is 2",
        //     "the number is 3" ...
        // ]

// const numbers = [1,2,3,4,5];

// const filterNumbers = numbers.filter((number)=>{
//     return number > 2;
// })

// console.log(filterNumbers);

const people = [
    {
        name: "Alice",
        age: 23
    },
    {
        name: "Bob",
        age:20
    },
    {
        name: "Clark",
        age: 21
    }
];

//filtering using map
// const mapPeople = people.map((person) => {
//     return person.age>21 ? person:{};
// })

// console.log(mapPeople);

// const filterPeople = people.filter((person)=>{
//     return person.age>21;
// })

// console.log(filterPeople);


// Promises: resolves, reject

// const codeProblem = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Coding problem");
//             resolve();
//         }, 1500)
//     });
// }

// const attendBootcamp = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Attend Bootcamp");
//             resolve();
//         }, 4500)
//     });
// }

// const doJobs = async () =>{
//     codeProblem();
//     console.log("sleep");
//      await attendBootcamp();
//     // codeProblem.then(()=>{
//     //     attendBootcamp.then(()=>{
//     //         ...a.
//     //     })
//     // }) // callback hell
// }

// // async and await comes
// // callback

// doJobs();


let data = []
const movies = async () => {
    let response = await fetch("https://freetestapi.com/api/v1/movies");
    console.log(response);
    data = await response.json();
    console.log(data);
    const peopleHTML = people.map((person) =>{
        return `
          <div class="card">
            <h3>Name: ${person.name}</h3>
            <h3>Age: ${person.age}</h3>
          </div>
        `
    }).join('');
    return peopleHTML;
}

// movies();

// DOM

// console.log(document.getElementById("title").textContent);

// let username = prompt("Enter your name:")
// console.log(username);

const callMovies = async () => {
    document.getElementById("title").innerHTML = await movies();
}

callMovies();

//          <div>
//             <h3>${person.name}</h3>
//             <h3>${person.age}</h3>
//           </div>
//           <div>
//           <h3>${person.name}</h3>
//           <h3>${person.age}</h3>
//         </div>
//         <div>
//         <h3>${person.name}</h3>
//         <h3>${person.age}</h3>
//       </div>
//       <div>
//       <h3>${person.name}</h3>
//       <h3>${person.age}</h3>
//     </div>
//     <div>
//     <h3>${person.name}</h3>
//     <h3>${person.age}</h3>
//   </div>
