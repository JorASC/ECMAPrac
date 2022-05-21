let array = [1,2,3, [1,2,3, [1,2,3]]]

 console.log(array.flat(6))


 

 let array2 = [1,2,3,4,5,6]
 console.log(array2.flatMap(value => [value, value*2]))

 let hello ='      hello world'
 console.log(hello)
 console.log(hello.trimStart())

 let hello2 = 'hello world      '

 console.log(hello2)
 console.log(hello2.trimEnd())


 try{
    false
 }catch {
    console.error();   
 }

let entries = [['name','jorge'], ['age', 32]]

console.log(Object.fromEntries(entries))

let mySymbol = `My Simbol`
let symbol = Symbol(mySymbol)

console.log(symbol.description)