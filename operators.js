

//Arithmetic

let x = 10 , y = 20 

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y) 

//Assignment

let z=10 

z+=20 
console.log(z)

z*=20
console.log(z)

z-=20
console.log(z)

z/=20
console.log(z) 

//comparision 

let a = 10 , b = "10"

console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a>b)
console.log(a<b)
console.log(a>>=b)

//logical 

let age = 19
console.log(age>15 && age<20)
console.log(age>15 || age<20)
console.log(!(age>15)) 

//string 

let firstName = "Ayra "
let lastName = "Farhana" 
let fullName = firstName + lastName 
console.log(fullName)

let correctName = `Hi ${firstName} ${lastName} , Welcome to programming`
console.log(correctName)

//ternary 

let myAge = 20 

if(myAge> 20){
    console.log("you can vote, thank you")
}
else{
    console.log("you cannot vote!")
}

let vote=myAge>20? "you can vote" : "you cannot vote" 
console.log(vote) 

//increment and decrement 

let num=10 

console.log(num++)
console.log(num) 
console.log(++num) 

//typeof 

console.log(typeof "ayra") 
console.log(typeof 20)
console.log(typeof num )