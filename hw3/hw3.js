// 1

function getSquare(item) {
    let square = 0;
    for (let i = 1; i <= item; i++) {
        square = square + i ** 2
    }
    return square
}

let userNumber = +prompt("Put number?");
if (userNumber === isNaN) {
    console.log("is not a number")
} else {
    console.log(getSquare(userNumber))
}

// 2

let mass = [3, 5, 12, 9, 23, 93, 17];

let massFilter = mass.filter(item => {
    return 20 > item && 2 < item
})
console.log(massFilter);

let massSum = massFilter.reduce((item, i, arr) => {
    return item += i;
}, 0)
console.log(massSum)

// 3

const mass3 = [
    [1, 6, 3, '6'],
    [10, 15, 13, '10']
];

let massFilterSum = mass3.flat().reduce((acc, item) => {
    if (typeof item === "number") {
        return acc + item
    } else {
        return acc
    }
}, 0)

console.log(massFilterSum);

// 4

const person = {
    name: "Vasya",
    age: 50
};
const key = prompt("Enter new key");
const value = prompt("Enter new value");

const addNewKey = (key, value, obj) => {
    if (obj.hasOwnProperty(key)) {
        return "Already exist";
    } else {
        obj[key] = value;
        return obj;
    }
}

console.log(addNewKey(key, value, person))