// let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer')
// let inputField = document.getElementById("inputField")

// addToDoButton.addEventListener('click', function(){
//     let paragraph = document.createElement('p')
//     paragraph.classList.add('paragaraph-styling')
//     paragraph.innerText = document.getElementById('inputField').value;
//     toDoContainer.appendChild(paragraph)
//     inputField.value = []
//     paragraph.addEventListener('click', function(){
//         toDoContainer.removeChild(paragraph)
//     })
// })

// let addToDoButton = document.getElementById('addToDo')
// let toDoContainer = document.getElementById('toDoContainer')
// let inputField = document.getElementById('inputField')

// addToDoButton.addEventListener('click', function(){
//     let paragaraph = document.createElement('p')
//     paragaraph.classList.add('paragraph-styling')
//     paragaraph.innerText = document.getElementById('inputField').value
//     toDoContainer.appendChild(paragaraph)
//     inputField.value = []
//     paragaraph.addEventListener('click', function(){
//         toDoContainer.removeChild(paragaraph)
//     })
// })

//check if is an INT

//Question #1

// let arrOne = [1 , 2, 3, 4]

// const intFunc = (num)=>{
//     return num % 1 === 0;
// }

// console.log(intFunc(arrOne[0]));


// let sum = arrOne.reduce((acc, curr)=> acc + curr, 0)
// console.log(sum)

//FizBuzz

//Fizz = even

// function fizBuzz(arr){
//     for(let i = 0; i < arr.length; i++ ){
//         if(i % 2 === 0){
//             console.log("This number is even")
//         } else {
//             console.log("This number is odd")
//         }
//     }
// }
// console.log(fizBuzz([2, 4, 55, 63, 6, 77]))


//Dynamic

const newPerson = {
    "name": "Fernando",
    "age": 22,
    "location": "San Antonio"
}


//print a sentence using this

const newStatement = (person)=> {
    for (key in person ){
    let printOut =    "Hell, my name is " + person.name + " I am " + person.age + " years old and I live in " + person.location
    return printOut
    }
}
console.log(newStatement(newPerson))

