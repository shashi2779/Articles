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
### Property :
- icon prr bhi width,height ,all property de sakte hai
- a tag se bhi button bna sakte hai , width,height de krr 
- color uthane ke liye dusare jagah/website se "color-picker" use karte hai.
```js
width:100vw   ✅
height:100vh  ✅

min-height
min-width

width
min-height
Note : 
      min-height:100vh parent me toh aap child me height:100% or 50% or other % nhi de sakte bcz aap parent me min-height liye hai , 
      toh child k height me px use kare . height:120px .. etc


padding :0 70px;   
   - 0 ->  upar-niche[top-bottom] , 
   - 70px -> agal-bagal[left-right]
   - padding se content ke around space dete hai


margin :0 auto;
   - width:90%; de kar margin:0 auto karo
   - eg.  center krr sakte hai agal-bagal se div ko ya other things
   - element ke around space de sakte hai



<a> tag se hmm kuch likh krr design bhi krr sakte hai
<a> tag se button bna lo , padding de kar , padding : 14px 32px;
button me box-shadow de do
text-decoration : none
   - <a> tag se line hatane k liye



text-align : center   // imp => font ko bich me manage karne ke liye (lec-43 26:30 min)
font-weight  // font-weight sath me de sakte hai axa lagne ke liye
font-size


box-shadow :
  - text or other things prr shadow de sakte hai


 background-image: url("paper.gif");
   - background me img lagane ke liye [full screen]


<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
   - img ko dikhane ke liye



font-family
font-weight
opacity :.5  // text ka opacity
text-shadow 


letter-spacing


hover


transition: all cubic-bezier(0.19,1,0.22,1) 1s;


dispay :inline-block
   - agar tum element ko width,height de rhe ho aur wo width height kam nhi kar rhi hai,toh tumhara element "display:inline" hai , toh inline element ko kaise treat kiaa jata hai => inline-block de kar ke 
   - display inline-block krr dene se hamm usse width,height de sakte hai



<span>
   - span tag se taget krr ke kisinka color change krr sakte hai
   - target krr ke fonts bda kar sakte hai



<b></b>  => for bold element


display:flex
flex-direction:column
justify-content: center, space-between, space-evenly(aas-passs) , space-around
align-tem


position:absolute;
top:50%;
left:50%
transform:translate(-50%,-50%)



#card .card:nth-child(1){
   box-shadow
   background: linear-gradient(to right bottom, color, color)
}



overflow : hidden;


Z-index


border:1px solid #f3f3f3;
border-radius:50%;
border-bottom:2px solid #f3f3f3;
   - border-bottom => niche patli si line ke liye

```

### CSS @font-face rule
- hamane "fonts" nam ka folder banaya , aur usme fonts rakh liye , abb apane website ke liye fonts estemal kar sakte hai  
```js

@font-face {
  font-family: myFirstFont;
  src: url('./fonts/Gilroy-Black.ttf');
}

```

### fonts
```js
PlayFair Display
montserrat
Gilroy
sans Serif

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
##### note :
- px, em , rem  are primarily used for font sizing.
- % ,vw , vh are mostly used for margin , padding , spacing , and width/height
- use toh hmm kisi ka kahi bhi karr sakte hai prr mostely use jha hota hai wo bataya hai
###### rem : 
- relative to HTML element
- bydefault HTML element value = 16px hoti hai

![]()
###### em :
- it depends on parent element
![]()
###### vh :
- relative to viewsport height
- viewsport -> jitna screen prr dikh rha hai
- 100vh -> 100% of screen
- 70vh -> 70% of screen
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

#### portrait vs landscape
- portrait => sidha tablet
- landscape => ghuma diaa  
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

### Display property in css
- display : block;
- display : inline;
- display : inline-block;
```js
block :   
        - full space occupy
        - line break => new line se new elment start
        - height , width de sakte hai
        - div , h1 , h2 , p....
Inline :
        - hight , width ka koi effect nhi padhta bcz jitna content ka require hai utna hi consume karega
        - line break nhi hoti , ek element ke bad dusra element aa sakta hai
        - ye required space hi lega
        - span , a , img

inline-block :
              - same inline 
              - but add width & height          
```  

## How to improve/grow user experience :
```js

 https://www.youtube.com/watch?v=qmhQJwBO-JA

```
- follow the structure 
    - eg. reading left to write , top to bottom hota aaya hai.
    - eg. nab bar me brand name ho , main content me kya rakhna hai
    - imp content above rahna chahiye jiise pta chal jaye website kis bare me hai 

- match standard
   - sare website grid pattern me bani hoti hai, toh hame dhyan rakhna chahiye ki hamara website ek pattern follow kare
   - agar aap idea se masterpiece banana chah rhe ,toh user availability na dekh kar aapke idea ke unique par dhyan dena chahiye..... 
   - aap chahe unique + standard ka combination kar ke bhi ek achchi UI bna sakte hai.
   - website design ke liye kayi UI framework bhi aate hai. eg. Bootstrap , tailwindcss , mob-> react native , flutter
- understand 3 sec rule
   -  agar koi visiter aapke website pe google ya social-media se aata hai , toh aapke website ko 3 sec tak dekhata hai , agar use interesting na dikhe toh wo tap close kar deta hai.
   -  agar aapke website me loading time jzada hai toh aap apni website pe pahle interesting pre-load dikha sakte hai(wireframe type). jisse use ka interest bna rhe.
   -  responsive ho , mob me utna hi dikhayiye jitna jaruri hai.
- Don't let your visitor lost in navigation [apne user ko navigation me bhatakane na de]
   -  eg. Home , Portfolio , Blog , Shop
   -  jab bhi aap website ko navigation banate ho , navigation ke highlight prr bhi dhyan de jaise navigation prr click karte hi kuch indication aana chahiye , ki hamm kha se kha ja rhe hai.
   -  agar form me koi details bharwa rhe toh sara content 3 click se jada na ho
   -  website me aap tap switching me bhi kuch na kuch add kar sakte hai , eg. transzation add kar sakte hai.
   -  aapka content jaldi mil jaye esliye "search" ka hona jaruri hai.

- Balance your design 
   - kisi me design me text content & images ka balance hona bahot jaruri hai bcz ek image hajaro words ka auda deti hai.
   - aap jab design banaye toh dhyan rakhe ki aapko content boring na ho eske liye aap kuch jagah prr graphic & images use karr sakte hai.
   - fonts website ko axa babane me bahot madad karta hai.
   - hmm ek ya do fonts use kar ke hamm axe se content ko present kar sakte hai.
- pay attension to conversion UX
   - agar aapke UI me form hai toh , form submit hone ka instruction mil jaye aur form submit hone prr , form submit hone ka conformation mil jaye
   - ye kam micro-instruction se behatareen tarike se kar sakte hai.
   - eg. form submit hone prr right-sign show ho

- Take feedback
    - ye bahot jaruri hai , aapki UI/design aapke visitor/customer ko pasand aaye.
    - aapki audience ko kya axa lagta hai, wo aapke pasand se jaza matter karta hai
    - esliye aapke UI/Design ke bare me aapke frds ya expert se feedback le , jo bhi feedback aapko mile usse aapki UI improve karne me use kare , jisse aapki UI ke har naye version me user experience behtarin hota jaye
    - feedback se aapka "original-idea" change na ho bcz aap alag-2 logo ke openion se confuse ho sakte hai, aur aapka idea bhi change ho sakta hai.  





### GSAP : for animation
- open website & go on Get-Started button
- then open link -> Loading GSAP 
```js
<body>


<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js"></script>
</body>
```
- GSAP loading script lagane ke bad hi , script tag use kare , jisse aapka GSAP load ho jaye 
```js
<body>



<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js"></script>

<script>
   // js
</script>
</body>
```


