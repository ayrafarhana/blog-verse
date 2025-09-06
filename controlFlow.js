
let marks = 70 

if(marks>90){
    console.log("A grade")
}
else if(marks>=70){
    console.log("B grade")
} 
else{
    console.log("C Grade")
}

let number = 4

switch(number) {
    case 1 :
        console.log("Monday")
        break 
     case 2 :
        console.log("Tuesday")
        break
     case 3 :
        console.log("Wednesday")
        break
     case 4 :
        console.log("Thursday")
        break
     case 5 :
        console.log("Friday") 
        break
     case 6 :
        console.log("Saturday") 
        break
     case 7 :
        console.log("Sunday")   
        break
    default:
        console.log("No Day!")
        break
}

let user = "Ayra"
let i ;

for(i=1;i<=10;i++){
//console.log(i)
console.log("Hi") 
console.log(user)
}

let Fruits = ["Mango, Grapes, Apple, Papaya"]

for(let i = 0 ; i <= Fruits.length; i++){
    console.log(Fruits)
}

for(let Fruit of Fruits){
     console.log(Fruit)
}



let person = {
    name : "ayra",
    age : 20,
    place : "Guntur"
}

for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

for(let i=10; i>=0; i--){
    if(i==6){
        continue 
    }
    else if(i==1){
        break 
    }
    console.log(i) 
}