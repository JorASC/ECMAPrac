let nom = 'jorge'
let eda = 23

obj = {name:name, edad:edad}

obj2 = {nom,eda}

const names = [
    {name:'Jorge', age:28},
    {name:'yesica', age:5},
    {name:'miranda', age:20}
]

let listOfNames = names.map(function (item){
console.log(item.name)
})


let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name,age,country) => {
    
}

const listOfNames4 = name => {

}

const square =num => num * num

const helloPromise = () =>{
    return new Promise((resoult,reject)=>{
        if(false){
            resoult("Hey!")
        }else{
            reject("Upsis!!")
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

