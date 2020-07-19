// Every function in JS has this keyword

let name = {
    firstName: "Akash",
    lastName: "Keshari",

    printFullName: function() {
        console.log(this.firstName + " " + this.lastName)
    }
}

let printFullName_V2 = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " in " + state)
}

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}

// Function borrowing
name.printFullName.call(name);

printFullName_V2.call(name2, "Mumbai", "Maharastra");

params = ["Mumbai", "Maharastra"]
printFullName_V2.apply(name2, params)

const printPersonInfo = printFullName_V2.bind(name2, "Mumbai", "Maharastra")
console.log(printPersonInfo)
printPersonInfo()