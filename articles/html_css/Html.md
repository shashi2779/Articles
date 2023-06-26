## HTML - hypertext markup language
- for creating webpage

```js
<html>

  <head>

  </head>

  <body>


  </body>

</html>
```
```js
<html>

  <head>

    <title>Document</title>
  </head>

  <body>


  </body>

</html>
```

```js
<html>

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>

  <body>


  </body>

</html>
```
### Body Tag vs Title Tag vs Head Tag vs Meta tag
```js
<body> tag
- jo bhi body tag ke ander likha hoga wo sab "display" ho jata hai browser ke main window parr
- <p> ,<h1> , <img> , <audio> ,<video> ,<div> ...etc



<head> tag
- "extra information related to page" contain karna head tag kahlata hai.
- <link> , <meta> ,<style> , <script>



<title>excellent</title> tag
- browser ke upar jo tab hota hai usme display ho jana 
- Browser tab par hame project ka nam show karna ho ya website ka nam



<meta> tag
- <meta charset="UTF-8">
     - mainly use in SEO (Search engine optimization )
     - SEO => website traffic ko badhane ka tarika me use karna & others
     - site ko rank karne ke liye

- <meta name="viewport" content="width=device-width, initial-scale=1.0">  
     - ye responsive design ke liye
     
-  <meta name="keywords" content="HTML, CSS, JavaScript , html-toturials , web development">     
      - ye keywords jab ko search kare toh meri website rank karr pahle dikhe

- <meta ......    content="ie=edge">  
      - ye internate explorer jo abhi estemal krr rhe

- <meta name="robots"    content="NoIndex,NoFollow">
      - aap chahte hai meri website search engine me na aaye  
      
- <meta name="robots"    content="Index,Follow">
      - aapki website ko search engine me rank milegi      
```
### Tags vs Attributes vs element
###### tags :
- HTML tags are used to hold the HTML element
- HTML tag start with "<" and end with ">"
```js
 <h1>............</h1>
```
###### Element :
- HTML element holds the content
- whatever , written within a HTML tag are HTML elements.
```js
<h1>all are element</h1>
```

###### Attribute :
- HTML attributes are used to describe the charactistic of HTML element in details.
- yah kisi bhi tag ki property ko describe karta hai ya additional information ke bare me batata hai.
```js
<hr color= "red">
```

- Some Tags are here :
```js

<h1> tag to <h6> tag hota hai
   <h1> tag se sabse "bda" me 
   <h6> tag se sabse chota me 

<br/> => tag se "line break" hota hai

<hr> => horizontal "line" aa jayega

<b> tag => for bold 


<a href=" link of youtube ">youtube</a>

```

### id vs class
- class : 
  - A Class name can be used by multiple HTML elements
  - kisi bhi element ko same class nam de sakte hai
- id:
  - while an ID name must only be used by one HTML element within the page
  - unique ,
  - id ka nam , multiple html element ko nhi de sakte , hmm kisi ek hi html element ko "id" de sakte hai 

###  What are the various formatting tags in HTML?
```js

<b> - makes text bold
<i> - makes text italic
<em> - makes text italic but with added semantics importance
     - search engine optimization ke liye em tag use karte hai , ye kam italic bhi kar deta hai
<strong> - marks the text as important
<big> - increases the font size of the text by one unit
<small> - decreases the font size of the text by one unit
<sub> - makes the text a subscript
<sup> - makes the text a superscript
<del> - displays as strike out text
<mark> - highlights the text
<ins> - displays as added text

```

### Link or Anchors tag :
- it is used to create hyperlink to a resource i.e webpage, pdf, text file
```js
<a> tag

<a href="url">link text</a>

<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>


href="url" me url dete hai

target : => target keywords to open a new window

````
### how many ways we can specify css
- inline
   - here we use the 'style' attribute inside the HTML element
- Internal
   - ```js
       here we use <style> tag inside the <head> tag or <body> tag me niche
    ```
- External
   - ```js
       here we use the <link> tag inside <head> tag to refrance the css file into our HTML code.
       
         <link rel="stylesheet" href="style.css">
      ```
#### html with js
```js
we use the <script> tag inside <head> tag to refrance 
the js file into our HTML code.

<script src="myscripts.js"></script>
``` 
### semantic tag in html
```js
header
nav
main
section
article
aside
footer
``` 

### Images responsive :

```js
first add in html : <meta name="viewport" content="width=device-width, initial-scale=1.0">  [ye rhta hi hai html me]
----------------------------------------------------------------------------------------------------------------------------

<div>
  <p>
    <img src="img.jpg">
  </p>
</div>



img{
  width:100%;
  height:auto;
}

ya 

apne se responsive bna lo [koi bhi technique se]

```
## svg animations
- go to figma
- then write our "signature"
- select kar "signature" ko export kar liaa in svg formate 
- then "viewport" source code nikal liaa [svg path] 
```js

<div>
  <svg id="signature">
   .................
   .................
  </svg>
<div>



#signature{
  stroke-dashArray:.....; // dash-2 kam-jada karr sakte hai esee
  stroke-dashoffset:....; // gayab kar dega signature ko hi 
  animation: sign 2sec easy-out;
}



@keyFrames sign{
  to{
    stroke-dashoffset:0;
  }
}

```

 
#### List in html
- order list
```js
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol> 


1.Coffee
2.Tea
3.Milk

```
- Unordered list
```js

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>


.Coffee
.Tea
.Milk
```

#### Table in html


![](../articles/img/table.png)

```js
<table>

  <thead>
    <tr>
      <th>roll no</th>
      <th >Name</th>
      <th >age</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>10</td>
      <td>shashi</td>
      <td>25</td>
    </tr>
  </tbody>

</table>

```

#### Iframes tag :
- An HTML iframe is used to display a web page within a web page.
- Iframes tag ke jariye aap apne webpage me kisi aur ka document/web page lga sakte ho.
  - youtube video lagana
  - koi website ka link toh website khuljayegi
  - map bhi lga sakte hai
  - koi file/document bhi lga sakte hai
- esme css property bhi de sakte hai.
- syntax :
```js
<iframe src="url" title="description"></iframe>
```

```js
<iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>

or 

<iframe src="demo_iframe.htm" style="height:200px;width:300px;" title="Iframe Example"></iframe>



youtube ka video lagana hai apane html me
-------------------------------------------
- click share 
- go to "Embed"
- copy the "iframe" tag
- map lane ke liye bhi yehi method hai


<iframe width="560" height="315" src="https://www.youtube.com/embed/Qe4LESwhqTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```

#### page me mp3/video songs kaise lagayegen
- mp3 songs
```js

<audio>

   <source src=" " type="audio/mpeg" >
</audio>

-------------------------------------------------------------------------

<audio>

   <source src="bg song.mp3" type="audio/mpeg" >
</audio>

-----------------------------------------------------------------------

## nhi dikh rha "page" prr toh "controls" use kare audio me

<audio  controls autoplay>

   <source src="bg song.mp3" type="audio/mpeg" >
</audio>

```

- video 
```js
<video  controls width="320">

   <source src="demo.mp4" type="video/ogg" >
</video>
```

### form tag [most imp iterviews question] :
- An HTML form is used to collect user input.. the user input is most ofen 
  send to a server for processing.
[learn form tag with input "checkbox"](https://www.w3schools.com/html/html_forms.asp)
```js
<form>
   <label for="fname">First Name:</label><br>
   <input type="text">
</form>


or


<form>
   <div>
     First Name:
     <input type="text">
   </div>
</form>
```
### input tag
-
```js
<input type="text">  	Displays a single-line text input field

<input type="radio">	Displays a radio button (for selecting "one" of many choices)

<input type="checkbox">	Displays a checkbox (for selecting "zero or more" of many choices)

<input type="submit">	Displays a submit button (for submitting the form)

<input type="button">	Displays a clickable button
----------------------------------------------------------
<input type="file" >   Upload img

<input type="reset" >   form reset

<input type="date">     set date,month,year

```
```js
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>
```
### male/female 
- "male radio" prr tip kar phir "female radio" prr tip rhe toh , male radio se "check" hat nhi rha , dono prr show karne lag rha 
- mai chahta hu at a time kisi ek prr hi "check" show ho toh
-  input ke "name attribute" use karegen , phir dono me gender de degen
```js
<td>
 <input type="radio">male
 <input type="radio">female
</td>
```

```js
<td>
 <input type="radio" name="gender" >male
 <input type="radio" name="gender" >female
</td>
```
- yehi kam "input checkbox" me value se handle kiye
### input 
- ek ke bad ek tick karne se sara tick ho gya h
```js
<td>
 <input type="checkbox" >js
 <input type="checkbox" >react
 <input type="checkbox" >java
</td>
```
- sab check na ho jaye ess liye value add krr diye
```js
<td>
 <input type="checkbox" value="js">js
 <input type="checkbox" value="react">react
 <input type="checkbox" value="java">java
</td>
```

### upload img :
[read upload img](https://www.w3schools.com/howto/howto_html_file_upload_button.asp)
- [type = "file"] se input me
```js
<form action="/action_page.php">
  <input type="file" id="myFile" name="filename">
  <input type="submit">
</form>
```
### reset k  liye "form" :
[form reset](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_reset)
```js
<input type="reset">
```
### select tag [imp interviews]
[read select tag](https://www.w3schools.com/tags/tag_select.asp)
- aap "select" karo car "option" bahot hai.  [learn karne ka aasan tarika]
```js
<select >
    <option >Volvo</option>
    <option >Saab</option>
    <option >Opel</option>
    <option >Audi</option>
</select>
```
```js
<select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
</select>
```
```js
<form action="/action_page.php">
        <label for="cars">Choose a car:</label>
        <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
        <br><br>
        <input type="submit" value="Submit">
</form>
```
- option group(option ka group kar do) aa gya ki kha ka car lena hai => swedish cars , german cars  alag alag show karr rha
```js
<form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <optgroup label="Swedish Cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select>
  <br><br>
  <input type="submit" value="Submit">
</form>
```

## Local & session storage :
#### web storage :
- browser prr data store karna 
- with web storage websites store data locally on users browsers

#### cookies :
- Application data had to be stored in cookies , included in every server request

### object for storing data 
- local storage
- session storage

#### local storage :
- for multiple session with no expiration date & time.
- ye jo data apne browser me store karega wo multiple session ke liye allowed hoga 
- aap browser band bhi kar doge toh wah data rahega.
```js

// Save data to localStorage
localStorage.setItem(key,value)


// Get saved data from localStorage
let value = localStorage.getItem(key)


// Remove all saved data from localStorage
localStorage.removeItem(key)

```

#### session storage :
- for single session
- data is lost when browser is closed

```js

// Save data to sessionStorage
sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
sessionStorage.clear();

```

### canvas HTML5
- jiske madad se hamm graphic draw karr sakte hai webpage prr
- ye container hota hai
```js

<canvas>

</canvas>

```

### webGL 
- web graphic library
- it is JS API for implementing interactive 2D & 3D vector graphic in the browser.

### web workers
- background me website ke jo kam chalate hai ya jo script chalati hai , toh wo web-workers ke nam se jane jate hai.
- jisse pta chalta hai kaun si script kab run huyi toh uske liye HTML me API diaa gya hai, jo API ke base prr hamko pta chal jata hai.
- website ko load hone me time etc
