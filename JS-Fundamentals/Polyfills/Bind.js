let name = {
    firstName: "Akash",
    lastName: "Keshari",
}

let printName = function(hometown, state, country) {
    console.log(this.firstName+ " " +this.lastName+ ", " +hometown+ ", " +state+ ", " +country)
}

let info = printName.bind(name, "Jagatdal", "WB", "India")
info()

Function.prototype.myBind = function(...args) {
    let obj = this
    let params = args.slice(1)    
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let info_v2 = printName.myBind(name, "Jagatdal", "West Bengal")
info_v2("India")

/*
    NOTE:
    1. If Function.prototype is added to any variable(myBind), the variable(myBind) will
       act as a function and will be available to all variable (such as printName) in global scope
    2. ...args returns array
    3. In this case we can add a check to myBind like printName is method or not.
            Arguments are valid or not
*/