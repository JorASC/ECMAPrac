const data = {
    frontend: 'Jorge',
    backend: 'isablel',
    design: 'Mir'
}

const entries = Object.entries(data)

console.log(entries)

console.log(entries.length)

const values = Object.values(data)
console.log(values)
console.log(values.length)


const str = 'hello'

console.log(str.padStart(7, 'hi'))
console.log(str.padEnd(12,'________'))


const obj = {
    name: 'oscar',
}

const errorMsg = 'Test Error'
const helloWorld = () =>{
    return new Promise((resolve,reject) =>{
        (false)
            ? setTimeout(()=>resolve ('Hello World'), 3000)
            : reject(new Error (errorMsg))
        
    }) 
}

const HelloAsync = async() =>{
    const hello = await helloWorld(); 
    console.log(hello)


}

HelloAsync()


const anotherFunction = async () =>{
    try{
        const hello = await helloWorld()
        console.log(hello)
    }catch(error){
        console.log(error)
    }
}

anotherFunction()