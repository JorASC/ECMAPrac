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
newFunction("ricardo", 23, "Colombia")


