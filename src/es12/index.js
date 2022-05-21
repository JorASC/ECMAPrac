const str = 'Javascript es maravilloso, con Javascript puedo crear el futuro de la web'

const replacedString = str.replace('Javascript', 'Python')

console.log(replacedString)

const replacedString2 = str.replaceAll('Javascript','Python')

console.log(replacedString2)


class Message {
    #show(val){
        console.log(val)
    }
    //get #add(val){
      //  ...
    //}

}

const message = new Message()

message.show('Hola!')


const promise1 = new Promise((resolve,reject) =>reject("1"))
const promise2 = new Promise((resolve,reject) =>resolve("2"))
const promise3 = new Promise((resolve,reject) =>resolve("3"))

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response))


class anyClass {
    constructor(element){
    this.ref = new weakRef (element)
    }
}

