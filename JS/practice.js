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

let arrOne = [1 , 2, 3, 4]

const intFunc = (num)=>{
    return num % 1 === 0;
}

console.log(intFunc(arrOne[0]));


let sum = arrOne.reduce((acc, curr)=> acc + curr, 0)
console.log(sum)