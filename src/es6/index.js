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





