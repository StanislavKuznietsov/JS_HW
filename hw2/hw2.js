// 1

let arr1 = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(arr1.join("|"));

// 2

let names = "Вася;Петя;Вова;Олег";
let namesArr = names.split(";");
console.log(namesArr);

// 3

function hello2(name) {
    if (name) {
        return "Hello " + name;
    } else {
        return "Hello Guest";
    }
}
console.log(hello2("Vasiliy"));


// 4

const fruits = ["apple", "pineapple", "pear"];
const fruitsInUpperCase = fruits.map(item => item.toUpperCase());

console.log(fruitsInUpperCase)

// 5

let a = [1, 2, 3, 4];
let b = [9, 32, 44, 21];

function addOneForAll(arguments) {
    return arguments.map(item => item + 1)
}

console.log(addOneForAll(a))
console.log(addOneForAll(b))

// 6

function getSum(arguments) {
    return arguments.reduce((acc, item) => acc + item, 0)
}

console.log(getSum(a))
console.log(getSum(b))

// 7

const arr2 = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
let filterNumber = arr2.filter(item => typeof item == "number")

console.log(filterNumber)

// 8

let arr3 = [0, false, null, 1];
const arrCheck = arr3 => {
    return arr3.some(item => item) ? "True value" : "False value"
}

const trueValue = arrCheck([0, false, null, 1])
const falseValue = arrCheck([0, false, null, 0])
console.log(trueValue)
console.log(falseValue)