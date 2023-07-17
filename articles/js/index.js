// filter , map , forloop ,forEach() ,sort()

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


// how to get name 
// write code to get array names from given array of users
// get back only active users
// sort users bye age descending => number ke case me alag behave karta hai , string ke case me alag behave karta hai 


//  solutiuon - 1 :

// let names = []

// for(let i=0 ;i<users.length ; i++){
//      names.push(users[i].name)
// }

// console.log(names)




//  solutiuon - 2 :

// forEach loop kuchh bhi return nhi karta 
// map fun ek new array return karta hai prr forEach loop kuch return nhi karta toh "original array" ko change karr deta hai

// let names = []

// users.forEach((user)=>{
//    names.push(user.name)
// })

// console.log(names)




// solution - 3 :
// only get "active" users

// let names = []

// for (let i = 0; i < users.length; i++) {
//     if (users[i].isActive) {
//         names.push(users[i].name)
//     }
// }

// console.log(names)



// solution : 4 IMP

// const names = users.filter( user => user.isActive ).map( user => user.name )
// console.log(names)



// sort :
// The sort() method sorts the elements of an array and returns the reference to the same array,
// now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// "age" in acending order  => 22, 25, 33, 34 , 36, 41

// users.sort((user1,user2) => user1.age < user2.age ? -1 : 1)
// console.log(users)


// "age" in decending order  => 41,36,34,33,25,22

// users.sort((user1,user2) => user1.age < user2.age ? 1 : -1)
// console.log(users)



// only active user "name" show , arrange according to "age" in decending order

// let name1 = users.filter((user) => user.isActive)
// .sort((user1,user2) => user1.age < user2.age ? 1 : -1)
// .map((user)=>user.name)

// console.log("output :",name1)



// // arrange numbers in acending order
// let nums = [1,2,3,10,20,30]

// nums.sort((a,b) => a>b ? 1 :-1)

// console.log(nums)


// output :
// [1,2,3,10,20,30]



// ================================= ep - 2 ==================================================


// 1 => check If user with such name exists
// 2 => adding element to the array
// 3 => remove dublicates element in the array
// 4 => concatenating the array




// 1- check If user with such name exists
// if user is exit then show "true" val

// Level -1 

// const isNameExit = (name, users) => {
//     let exist = false;

//     for (let i = 0; i < users.length; i++) {
//         if (users[i].name === name) {
//             exist = true;
//         }
//     }
//     return exist;
// }

// // esko console prr run karaye 
// isNameExit('shashikant',users)  // true



// // solution - 2 :

// const isNameExit = (name, users) => {

//    const user =  users.find((user)=> user.name === name)

//    return Boolean(user)
// }

// // esko console prr run karaye 
// isNameExit('shashikant',users)  // true
// isNameExit('xaxi',users)  //  false





// solution - 3 :

// const isNameExit = (name, users) => {

//     const index =  users.findIndex((user)=> user.name === name)

//     return index;
//  }

//  // esko console prr run karaye 
//  isNameExit('shashikant',users)  // 0
//  isNameExit('xaxi',users)  //  -1




// const isNameExit = (name, users) => {

//     const index =  users.findIndex((user)=> user.name === name)

//     return index >= 0;
//  }

//  // esko console prr run karaye 
//  isNameExit('shashikant',users)  // true
//  isNameExit('xaxi',users)  //  false




// solution - 4 :

const isNameExit = (name, users) => {

    const user = users.some((user) => user.name === name)

    return user;
}

// esko console prr run karaye 
isNameExit('shashikant', users)  // true
isNameExit('xaxi', users)  //  false

//---------------------------------------------------------------------------------------



// Adding element to the Array

//  let arr = [1,2]

// const append = (arr,ele) =>{
//     arr.push(ele)
//     return arr;
// }

// console.log(append(arr,3));
// console.log(arr)     // original array ko bhi change krr diaa



// let arr = [1,2]

// const append = (arr,ele) =>{
//     return [...arr,ele]
// }

// console.log(append(arr,3));
// console.log(arr)




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





// solution - 3 :
// accumulator (acc) - jisme value jayegin

// const arr = [1, 2, 3, 3, 4, 4, 5]

// function uniqueArray(arr) {
//     return arr.reduce((acc, ele) => {
//         //agar hai toh return karwa do (acc ko )  [1,2,3] aaya agali bar 3 aaya array me hai toh acc return ho jayega
//         //agar nhi hai toh "ek new arr" banaya aur usme ele ki value dal di
//         return acc.includes(ele) ? acc : [...acc, ele]
//     }, [])
// }

// console.log(uniqueArray(arr))




// Concatenating  the Array

// solution -  1 :

// const mergeArray = (arr1,arr2) =>{
//  arr1.push(...arr2)
//  return arr1;
// }

// const arr1 = [1]
// const arr2 = [2,3]
// const result = mergeArray(arr1,arr2)
// console.log(result,arr1,arr2)   // [1,2,3],[1,2,3],[2.3]

// solution - 2 :
// merge bhi ho jaye , mera arr1 modify bhi na ho 

// const mergeArray = (arr1,arr2) =>{
//       return [...arr1,arr2]
// }
   
//    const arr1 = [1]
//    const arr2 = [2,3]
//    const result = mergeArray(arr1,arr2)
//    console.log(result,arr1,arr2)   // [1,Array(2)->2,3],[1],[,2,3]



// solution - 3 : 

const mergeArray = (arr1,arr2) =>{
    return arr1.concat(...arr2)
}
 
 const arr1 = [1]
 const arr2 = [2,3]
 const result = mergeArray(arr1,arr2)
 console.log(result,arr1,arr2)   // [1,2,3],[1],[2,3]