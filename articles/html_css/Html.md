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

    <title>website name</title>
  </head>

  <body>


  </body>

</html>
```

- Tags
```js

<h1> tag to <h6> tag hota hai
   <h1> tag se sabse "bda" me 
   <h6> tag se sabse chota me 

<br/> => tag se "line break" hota hai

<hr> => horizontal "line" aa jayega

<b> tag => for bold 


<a href=" link of youtube ">youtube</a>

```
#### id vs class
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
### head vs body tag :
```js
<body> tag
- define the body of html document.
- <p> , <img> , <audio> ,<video> ,<div> ...etc

<head> tag
- provide info about the document
- <link> , <meta> ,<style> , <script> 
```
### Link :
```js
<a> tag

<a href="url">link text</a>

<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>


href="url" me url dete hai

target -> batata hai same window me open hogi ya different window me
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

      ```
#### html with js
```js
<script></script> tag use karte hai "js" ke code ko html me likhane ke liye.
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
[learn form tag with input "checkbox"](https://www.w3schools.com/html/html_forms.asp)
```js
<form>


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



