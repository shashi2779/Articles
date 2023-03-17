## Local Storage :

```js
 // ele/data ko local storage me save karr lo 
// save karne k liye - stringify

                                             🟫 array item
                                             🔻
localStorage.setItem("imdb",JSON.stringify(newArray))   // array ko string me change kiya
                                🔺
                                🟫 yha sirf string store hoti hai



// ele/data save hai , abb get karo with state
// string me save hai , string ko abb array bna do
// padhane ke liye - parse
// save karne k liye - stringify

const [fav,setFav] = React.useSate([])


                                    🟫 collection name
                                    🔻
let oldFav = localStorage.getItem("imdb") 
oldFav = JSON.parse(oldFav)

setFav([...oldFav])
 

```