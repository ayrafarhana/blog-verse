function greet(){
    console.log("welcome to programming")
}

greet()

/*
function add(x,y){
    return x+y
}

let result=add(10,20) 
console.log(result)  */

const add = function(x,y){
    return x+y
}

console.log(add(22,22))

//Arrow Function 

const square = (x) => x*x
console.log(square(7)) 

const sub =(x,y) =>{
    console.log(x,y)
    return x-y
}

console.log(30-10)         
