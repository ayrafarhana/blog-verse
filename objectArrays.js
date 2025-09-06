let person = {
    name : "Ayra",
    age : 20
}
/*
console.log(person.name)
console.log(person["age"])
*/
const {name,age} = person 
console.log(name) 
console.log(age)


let num = [1,2,3]
let squares = num.map((num)=>num*num) //Transform
console.log(squares) 

let odds = num.filter((num)=>num%2!=0) //Filter
console.log(odds)

let multiply = num.reduce((present,num)=>present*num,1) //Reduce 
console.log(multiply) 