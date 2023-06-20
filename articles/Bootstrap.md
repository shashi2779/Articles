## Bootstrap :
-  Bootstrap cdn
```js
css
----
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">


js
----
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

``` 
- Bootstrap package manager
```js
npm install bootstrap@5.3.0
```

## class name in BootStrap
- className = "btn btn-primary bg-secondary"
- btn : button se border hat jayega
- btn-primary : button prr blue color lag jayega
- btn-sm : button sa size chhota ho jayega
- bg-secondary : se background color "secondary[red]" color ka ho jayega
- position-relative , position-absolute
```js
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>

```
[read from this](https://getbootstrap.com/docs/5.3/components/badge/)

### hmm apani bhi css add kar sakte hai Bootstrap k sath :
- className = "btn btn-primary  demo"
```js
.demo{
    fontsize : 10px;
}
```
- mana ki koi class Bootstrap me bhi hai, aur mai bhi wahi class diaa hai toh , 
  apne class ka effect dikhane k liye "!important" use kare . [override] ho jayega.
```js

className = "btn btn-primary  btn"

.btn{
    button-color:red; !important
}

```

------------------------------------------
### Imp topics
- List Group
- Grid system
- Card
- Carousel
- Dropdowns
- buttons
--------------
- List group in bootStrap :
[read list group](https://getbootstrap.com/docs/5.3/components/list-group/)

- Grid in bootStrap :
[grid system in bootstrap](https://getbootstrap.com/docs/5.3/layout/grid/)
```js

<div class="container">
  <div class="row">
    <div class="col-3">
      Column
    </div>
    <div class="col-9">
      Column
    </div>
  </div>
</div>

```
 3..........| 9............................
------------- | -------------

- Card ( card k sath img bhi use huaa hai aur use class bhi diaa hai)
[card with Bootstrap] : (https://getbootstrap.com/docs/5.3/components/card/)
```js
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
```
- Carousel :
    - slide hota img dikhata hai wahi:
[carousel-slide-hota-img](https://getbootstrap.com/docs/5.3/components/carousel/)

- Dropdowns :
[](https://getbootstrap.com/docs/5.3/components/dropdowns/)

- buttons :
[how to use buttons in bootstrap](https://getbootstrap.com/docs/5.3/components/buttons/)

