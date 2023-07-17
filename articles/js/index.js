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



