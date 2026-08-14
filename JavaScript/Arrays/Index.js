// Array is mutable it means i can change array after the creation

let arr = [1, 2, 4, 6, 8, 9]

arr[0] = 566;

// typeof array always show array as an "Object".

// console.log(arr, typeof arr)
// console.log(arr.length)
// console.log(arr[0])

// they show array as a string
console.log(arr.toString())

// they convert array , to particular word like "and"
console.log(arr.join(" and "))

// .pop() method keep out last element in array
console.log(arr.pop())

// .push method push an element to a Array
console.log(arr.push("Harsh"))

// .shift method keep out first element to an array
console.log(arr.shift())

// .unshift push value in first element in array
console.log(arr.unshift("Jack"))

// .delete method an element what we want and one important thing delete method only delete value not their space
console.log(delete arr[3])

console.log(arr)


let a = [5, 6, 45, 61, 85, 45]
let b = ["Jack", "Danail", "Rock", "Tony"]
let c = [56.26, 450.45, 810.41, 74.56]

// concate method adds two or more array in one array
console.log(a.concat(b, c))

// sort method arrange array in ascending order
console.log(a.sort())

// .splice method is used to remove and insert element in array
let number = [1, 2, 3, 4, 5]
console.log(number.splice(1, 3), number)
console.log(number.splice(1, 3, 222, 333), number)