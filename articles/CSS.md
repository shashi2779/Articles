## CSS  - Cascading Style Sheets

### style.css 
- start with
```js

*{
  margin :0;
  padding:0;
  box-sizing: border-box;
}
html,body{
  with:100%;
  height:100%;
}

```

### css units :
- units :
   - absolute
   - relative

##### absolute :
- not responsive
- not scalable
- eg . px

##### Relative:
- easily scable in responsive
- rem , em , vh ,vw ,%
###### rem : 
- relative to HTML element
- bydefault HTML element value = 16px hoti hai

![]()
###### em :
- it depends on parent element
![]()
###### vh :
- relative to viewsport height
![]()
###### vw :
- relative to viewsport width
![]()
###### % :
- relative to parent element
![]()
### three types of styling in css
- inline css
- internal css
- external css
### How to set image in background in css
```
width:100%;
height:100%;
background-image:url(link);
background-size:cover;
// image ka kaun sa part dekhna chah rrhe hai 
background-position: center/bottom/top;


Img website : "unsplash.com"
```
### postion : absolute 
- static , relative , absolute , fixed , sticky
- three car hai ek ke bad ek , mann lo bich wali car ko uthaya bridge prr le aya toh niche wali third wali car move krr ke 2nd wali position prr pahoch gayi ,
- toh third wali car 2nd wali k niche hai , toh third wali dikhegi nhi (bridge ke upar se dekhane me )
- matlab position : absolute kar ke uss element move kra sakte hai kidhar bhi
### postion : relative
- kisi div me koi element hai usko move karana chah rhe toh "position : absolute" kar ke move kra sakte hai uss div ke bahar bhi le ja sakte hai
- but mai chahta hu move kare wo element but uss div ke bahar nhi , toh "position : relative" karr degen.
- jisake ander uss element ko rakhana hai use "position: relative" banayegen.

### display property :
##### diplay : flex :
- mana ek div me three element liye wo ek dusare ke niche aa rhe hai , unhe alag-bagal karna hai toh , div ko "display: flex" krr degen
- ye element ko agal- bagal krr deta hai 
- display : flex
- display : flex karne se do axis khul jati hai x-axis , y-axis . x-axis prr "justify-content" se arrange/manage karte hai , y-axis pr "align-item" se arrange/manage karte hai
##### flex-direction : column;
- ye column me arrenge kar dega 
##### justify content : center 
- horizontal arrange krr k data hai
   - yha horizontal "center" kiye hai
##### align item : center
- vertically arrange krr k data hai
   - yha vertically "center" kiye hai


### media query
[how to use media query for multiple device in css](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

- portrait vs landscape
[tablet portrait vs landscape](https://www.scientiamobile.com/smartphone-vs-tablet-orientation-whos-using-what/)

- Imp :
[watch responsive](https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_mediaquery_breakpoints)
```js
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
```

