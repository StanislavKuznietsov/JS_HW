// 1

const bindFunc = (func, item, ...moreArgs) => {
    return func.bind(item, ...moreArgs)
}

// 2

const getKeysSum = function() {
    const valuesArr = Object.values(this)
    const valuesSumArr = valuesArr.reduce((acc, item) => {
        if (item > 0) {
            return acc + item
        } else {
            return acc
        }
    }, 0)
    return valuesSumArr;
}

const objectA = {
    a: 1,
    b: 2,
    c: 3
};

const getSumObjectAValues = bindFunc(getKeysSum, objectA);
const sumOfObjectA = getSumObjectAValues();
console.log(sumOfObjectA)

// 3

function getNewArray() {
    if (!this.values) return "Nothing";

    const filteredArray = this.values.filter((item) => {
        return (typeof item === "number") && (item > 2) && (item < 10) && (item % 2 === 0);
    })
    return filteredArray;
}

const valObject0 = {
    values: [1, '2', 4, 8, '8', 3, 10, null, false]
}
const valObject1 = {
    values: [1, 51, 33, false]
}

const result0 = getNewArray.call(valObject0) // Ссылаясь на массив ключа values из valObject0 [4, 8]
console.log(result0)
const result1 = getNewArray.call(valObject1)
console.log(result1)