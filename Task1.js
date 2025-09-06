let persons =[ {
    name : "Ayra",
    marks: 90
}, {
    name : "Raj", 
    marks : 80 
}, {
    name : "Tarun", 
    age : 70 
}]

for(person of persons){
    console.log(person)
}

let maxmarks = 0 
let Topper = ""

for(person of persons){
    if(maxmarks<person.marks){
        maxmarks=person.marks
        Topper = person.name
    }
}
console.log(`Topper is ${Topper} and secured ${maxmarks} marks`)