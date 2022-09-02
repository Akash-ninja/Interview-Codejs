// https://www.typescriptlang.org/docs/handbook/basic-types.html
// Typescript TYPES - Primitive - 11 and Non-primitive - 1

// BOOLEAN - true / false
let isDone: boolean = false;

// NUMBER -  all numbers in TypeScript are floating point values
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// STRING 
let color: string = "blue";
color = 'red';

// ARRAY
// 2 ways to write
let list: number[] = [1, 2, 3];
//uses a generic array type, Array<elemType>
let list_2: Array<number> = [1, 2, 3]

// TUPLE
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

// ENUM
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

// ANY
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
let list_3: any[] = [1, true, "free"];

// VOID
// void is a little like the opposite of any
function warnUser(): void {
    console.log("This is my warning message");
}

// NULL and UNDEFINED
let u: undefined = undefined;
let n: null = null;

// NEVER
// The never type represents the type of values that never occur.
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// OBJECT - Non primitive
// 'object' is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error