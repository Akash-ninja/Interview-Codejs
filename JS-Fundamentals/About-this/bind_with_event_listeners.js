const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("THIS is: ", this)
    console.log(`${this.name} sings LA LA LA`)
  },
}

const btn = document.querySelector("#clickMe")

// want to have object method as callback
btn.addEventListener("click", conan.sing) // this bound to btn element and this.name will be empty string

btn.addEventListener("click", conan.sing.bind(conan)) // this here is bound to Conan obj

btn.addEventListener("click", conan.sing.call(conan)) // does not fit here because it immediately calls the function
