function newFunction (name,age,countryu){
    var name = name || 'Oscar';
    var age = age || 26
    var country = country || 'Mexico'

    console.log(name,age,country)
}

//es6

function newFunction2(name='oscar', age = 32, country = 'MX'){
    console.log(name,age,country)
}

newFunction2();
newFunction2("ricardo", 23, "Colombia")

let hello = 'hello'
let world = 'world'

epicPhrase =  hello + ' ' + world

console.log(epicPhrase)

let epicPhrase2 = `${hello} ${world}`

console.log(epicPhrase2)


let lorem = 'Esto es una mamada, estoy bien aburrido alv. Todo esto ya lo se\n'
+ 'siguiente frase mamalona'


let lorem2 = `Otra frase epica,
ya funciona como deberia
`

console.log(lorem)
console.log(lorem2)


let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age, person.country)

let { name, age, country } = person
console.log(name, age, )


let team1 = ['oscar','julian','ricado']
let team2 = ['camila','yesica','valeria']

let education = ['David', ... team1, ... team2]

console.log(education)

{
    var global = 'Global Var'
}

{
    let globalLet = 'GlobalLet'
}

console.log(global)
console.log(globalLet)


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


class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(14,23))

import{hello} from './module'

hello()

function* helloWorld(){
    if (true){
        yield 'Hello, '
    }
    if (true){
        yield 'World';
    }
}

const generatorHello = helloWorld()

console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)

