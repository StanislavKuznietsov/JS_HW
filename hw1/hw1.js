const name = "Vasya";

if (typeof name == "string") {
    console.log("Hello " + name)
} else {
    console.log("Wrong Data type")
}

let checkName = typeof name == "string" ? console.log("Hello " + name) : console.log("Wrong Data type");




const name123 = 123;

if (typeof name123 == "string") {
    console.log("Hello" + name123)
} else {
    console.log("Wrong Data type")
}



console.log(typeof 1);
console.log(typeof "");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});