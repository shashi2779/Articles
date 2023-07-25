###  filter , map , forloop ,forEach() ,sort()

##### get name from users array
```js

// how to get name 
// write code to get array names from given array of users
// get back only active users
// sort users bye age descending => number ke case me alag behave karta hai , string ke case me alag behave karta hai 



let users = [
    {
        id:1,
        name:"shashikant",
        isActive: true,
        age :25

    },
    {
        id:2,
        name:"vikash",
        isActive: true,
        age :22

    },
    {
        id:3,
        name:"dhoni",
        isActive: true,
        age :41

    },
    {
        id:4,
        name:"raina",
        isActive: true,
        age :36

    },
    {
        id:5,
        name:"surya",
        isActive: false,
        age :33

    },
    {
        id:6,
        name:"samsong",
        isActive: false,
        age :34

    }
]



// solution : 4 , IMP for interviews 

const names = users.filter( user => user.isActive ).map( user => user.name )
console.log(names)



//  solutiuon - 1 :

let names = []

for(let i=0 ;i<users.length ; i++){
     names.push(users[i].name)
}

console.log(names)



// solution - 2 :
// forEach loop kuchh bhi return nhi karta 
// map fun ek new array return karta hai prr forEach loop kuch return nhi karta toh "original array" ko change karr deta hai


let names = []

users.forEach((user)=>{
   names.push(user.name)
})

console.log(names)





// solution - 3 :
// only get "active" users

let names = []

for (let i = 0; i < users.length; i++) {
    if (users[i].isActive) {
        names.push(users[i].name)
    }
}

console.log(names)




// sort :
// The sort() method sorts the elements of an array and returns the reference to the same array,
// now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)


// "age" in acending order  => 22, 25, 33, 34 , 36, 41

users.sort((user1,user2) => user1.age < user2.age ? -1 : 1)
console.log(users)


// "age" in decending order  => 41,36,34,33,25,22

users.sort((user1,user2) => user1.age < user2.age ? 1 : -1)
console.log(users)




// only active user "name" show , arrange according to "age" in decending order

let name1 = users.filter((user) => user.isActive)
.sort((user1,user2) => user1.age < user2.age ? 1 : -1)
.map((user)=>user.name)

console.log("output :",name1)


output :
-----------
0: "dhoni"   41
1: "raina"   36
2: "shashikant" 25
3: "vikash"     22


```
- sort() method
```js
question-1 :
-----------------
let nums = [1,2,3,10,20,30]
nums.sort()
console.log(nums)


output :

[0,1,10,2,20,3,30]



======= modify ============================

let nums = [1,2,3,10,20,30]

nums.sort(function(a,b){
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
})

console.log(nums)


output:
[1,2,3,10,20,30]


=========== another way =====================

let nums = [1,2,3,10,20,30]

nums.sort((a,b) => a>b ? 1 :-1)

console.log(nums)


output:
[1,2,3,10,20,30]

```
### set object , Includes() , some() , reduce() , find() , findIndex() , concat()
[](https://www.youtube.com/watch?v=VZcwNZ8kNLc&list=PL_HlKez9XCSObvbpDXzmorfjnCrCz7bQZ&index=3)
```js
1 => check If user with such name exists
2 => adding element to the array
3 => remove dublicates element in the array
4 => concatenating the array
```
- check If user with such name exists
```js


let users = [
    {
        id: 1,
        name: "shashikant",
        isActive: true,
        age: 25

    },
    {
        id: 2,
        name: "vikash",
        isActive: true,
        age: 22

    },
    {
        id: 3,
        name: "dhoni",
        isActive: true,
        age: 41

    },
    {
        id: 4,
        name: "raina",
        isActive: true,
        age: 36

    },
    {
        id: 5,
        name: "surya",
        isActive: false,
        age: 33

    },
    {
        id: 6,
        name: "samsong",
        isActive: false,
        age: 34

    }
]



// 1- check If user with such name exists
// if user is exit then show "true" val

// solution - 1 : 

const isNameExit = (name, users) => {
    let exist = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            exist = true;
        }
    }
    return exist;
}

// esko console prr run karaye 
isNameExit('shashikant',users)  // true



// solution - 2 :

const isNameExit = (name, users) => {
   
   const user =  users.find((user)=> user.name === name)

   return user;
}

// esko console prr run karaye 
isNameExit('shashikant',users)  //  pura obj aa jayega sahshikant  ka
isNameExit('xaxi',users)  //  undefined

--------------------------------------------------------------------------------------

const isNameExit = (name, users) => {
   
   const user =  users.find((user)=> user.name === name)

   return Boolean(user)
}

// esko console prr run karaye 
isNameExit('shashikant',users)  //  true
isNameExit('xaxi',users)  //  false





// solution - 3 :

const isNameExit = (name, users) => {
   
    const index =  users.findIndex((user)=> user.name === name)
 
    return index;
 }
 
 // esko console prr run karaye 
 isNameExit('shashikant',users)  // 0
 isNameExit('xaxi',users)  //  -1


------------------------------------------------------------------

const isNameExit = (name, users) => {
   
    const index =  users.findIndex((user)=> user.name === name)
 
    return index >= 0;
 }
 
 // esko console prr run karaye 
 isNameExit('shashikant',users)  // true
 isNameExit('xaxi',users)  //  false





// solution - 4 :

 const isNameExit = (name, users) => {
   
    const user =  users.some((user)=> user.name === name)
 
    return user;
 }
 
 // esko console prr run karaye 
 isNameExit('shashikant',users)  // true
 isNameExit('xaxi',users)  //  false


```

- Adding element to the Array
```js
// solution -1 :

let arr = [1,2]

const append = (arr,ele) =>{
    arr.push(ele)
    return arr;
}

console.log(append(arr,3));
console.log(arr)     // original array ko bhi change krr diaa



// Note : 
//  new element dal rhe toh "new array" bane , original array ko change/modify na kare
// sprade operator use karegen
// solution -2 


let arr = [1,2]

const append = (arr,ele) =>{
    return [...arr,ele]
}

console.log(append(arr,3));
console.log(arr)  // original array change nhi hua hai bcz of sprade operator


```
- Remove Dublicates Element in the Array
```js
// Remove Dublicates Element in the Array

// solution - 1 :

// const arr = [1, 2, 3, 3, 4, 4, 5]

// function uniqueArray() {
//     let uniqueElements = []

//     arr.forEach((ele) => {
//         if (!uniqueElements.includes(ele)) {
//             uniqueElements.push(ele)
//         }
//     })

//     return uniqueElements;
// }

// console.log(uniqueArray(arr))


// output :
// =========
// [1 ,2 ,3 ,4 ,5]





// solution - 2
// set obj :
//the set obj is a built-in js datastr that allows you to store unique values of any type.
// original arr ko change nhi karega 
const arr = [1, 2, 3, 3, 4, 4, 5]

function uniqueArray(arr) {
    return [...new Set(arr)]
}

console.log(uniqueArray(arr))
console.log(arr)  // original arr ko change nhi karega   



output :
==========
[1 ,2 ,3 ,4 ,5]
[1, 2, 3, 3, 4, 4, 5]



// solution - 3 :
// accumulator (acc) - jisme value jayegin

const arr = [1, 2, 3, 3, 4, 4, 5]

function uniqueArray(arr) {
    return arr.reduce((acc, ele) => {
        //agar hai toh return karwa do (acc ko )  [1,2,3] aaya agali bar 3 aaya array me hai toh acc return ho jayega
        //agar nhi hai toh "ek new arr" banaya aur usme ele ki value dal di
        return acc.includes(ele) ? acc : [...acc, ele]
    }, [])
}

console.log(uniqueArray(arr))

```
- Concatenating  the Array
```js
// solution - 1 :
// Concatenating  the Array

const mergeArray = (arr1,arr2) =>{
 arr1.push(...arr2)
 return arr1;
}

const arr1 = [1]
const arr2 = [2,3]
const result = mergeArray(arr1,arr2)
console.log(result,arr1,arr2)   // [1,2,3],[1,2,3],[2.3]



// solution - 2 :
// merge bhi ho jaye , mera arr1 modify bhi na ho 

const mergeArray = (arr1,arr2) =>{
      return [...arr1,arr2]
}
   
   const arr1 = [1]
   const arr2 = [2,3]
   const result = mergeArray(arr1,arr2)
   console.log(result,arr1,arr2)   // [1,Array(2)->2,3],[1],[,2,3]



// solution - 3 : 

const mergeArray = (arr1,arr2) =>{
    return arr1.concat(...arr2)
}
 
 const arr1 = [1]
 const arr2 = [2,3]
 const result = mergeArray(arr1,arr2)
 console.log(result,arr1,arr2)    // [1,2,3],[1],[2,3]


```
## Interviews questions 
- variable shadowing
```js
//  variable shadowing

function test(){
    var a = "hello"
    let b = "bye"

    if(true){
        let a = "hii"        // let a variable shadow the var a 
        var b = "good bye"  // illegal shadowing =>  Identifier 'b' has already been declared
        console.log(a);
        console.log(b)
    }
}

test()


Note :
======
- agar bahar "let" nam se variable hai aur block scope me "var" nam se same variable declared hai toh illegal shadowing kahlati hai.

-  Identifier 'b' has already been declared

```
- Temporal dead zone
```js
// temporal dead zone => Is the time between the declaration and the initialization of let and const variable.

```
### map , filter , reducer
- map , filter , reducer are basically array function
##### map method 
- creates a new array from calling a function for every array element.
- map fun takes a callback fun
- does not execute the function for empty elements.
- does not change the original array.
```js
 const nums = [1,2,3,4,5]

let newArr = nums.map((num)=>{
      return num
})

console.log(newArr)   // [1,2,3,4,5]


-----------------------------------------------

const nums = [1,2,3,4,5]

let newArr = nums.map((num)=>{
      return num * 3
})

console.log(newArr)   // [3,6,9,12,15]

```

##### filter method 
- the filter method takes each element in array and apply conditional statement against it. if the conditional returns true the element gets puts into the output array. 
if the conditional returns false the element does not get puts into output array.
```js

const nums = [1,2,3,4,5]

let newArr = nums.filter((num)=>{
      return num>2
})

console.log(newArr)   // [3,4,5]

```

##### reduce method 
- the reduce method reduces an array of value down just one value 
- it recieve two things 1- accumulator  2- value
-  method returns a single value: the function's accumulated result.
-  method does not execute the function for empty array elements.
-  method does not change the original array.
```js

const nums = [1,2,3,4,5]

let sum = nums.reduce((acc,value)=>{
      return acc + value;
},0)

console.log(sum)   // 15

```