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