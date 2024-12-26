const parent = {
  color: "purple",
  sing() {
    return "LA LA LA"
  },
}

const child = {
  num: 2,
  __proto__: parent,
  obj: parent, // does not links the child to parent obj
}

child.color // purple
// it looks first in child object and then in parent

child.__proto__ // refers to parent obj

child.__proto__.__proto__ // refers to JS object

child.__proto__.__proto__.__proto__ // null (prototype of js object is null)

typeof null // 'object'
