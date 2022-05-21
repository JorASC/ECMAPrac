const obj ={
    name:'jorge',
    age:28,
    country:'MX'
}

let {country, ...all} = obj

console.log(all)

const obj2 = {
    name: 'Jorge',
    age: 32
}
const obj1 = {
    ...obj,
    country:'MX'
}
console.log(obj1)

const helloworld = () =>{
    return new Promise((resolve,reject) =>{
        (true)
    ? setTimeout(()=> resolve('Hello world'), 3000)
    : reject(new Error('Test Error'))
    })
    
}

helloworld()
    .then(respone => console.log(respone))
    .catch(error => console.log(error))
    .finally(()=> console.log('finalizo'))



const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2018-04-20')

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day)