# Affordable Garage Doors
#### Project URL: http://rav.affordable_garage_doors.codevery.com/

![alt tag](preview.jpg) 

## Project Description:
Responsive website was buit using HTML/CSS with BOOTSTRAP framework.
Online showcase of services & extensive product range / product catalogue
There is boxed accordion to minimize content sections on homepage.
Google maps api integrated to shown map positions of addresses shown.

## Technologies:
* HTML
* SASS (CSS)
* JS
* Libraries
    * Bootstrap
    * Google Maps api
    * Owl Carousel 2
    * Devices defined
    * Google api
    * JS Cookie
    * jQuery

## Features
#### Slider
![alt tag](feature_slider.gif)

## Compatibility
* **Browsers** : Safari, Chrome, Opera, Mozilla, Edge, IE9.
* **Devices** : Desctop, Tablet, Mobile.

![alt tag](devices.gif)

## Code example
HTML
```html
<body>
    <nav class="nav-top navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="row">
                <div class="mobile-menu">
                    <div class="title">Menu</div>
                    <div class="menu-btn">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </div>
                </div>
    
                <ul class="nav navbar-nav nav-custom">
                    <li class="menu-element"><a href="/"><span>HOME</span></a></li>
```

JS scripts placed in the footer.
```html
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCCC8LchHbKBBy78r2x52JdjknD2iI758&callback=initMap"></script>
        <script src="assets/lib/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/lib/OwlCarousel2/owl.carousel.min.js"></script>
        <script src="assets/lib/jquery.cookie.js"></script>
        <script src="assets/lib/device.min.js"></script>
        <script src="assets/js/script.js"></script>
        <script src="assets/js/video.js"></script>
        <script src="assets/js/map.js"></script>
    </body>
</html>
```

JS Script (jQuery library)
```js
$(document).ready(function(){

    jQuery(".menu-btn").click(function(){
        jQuery(this).parents(".mobile-menu").toggleClass("open");
        jQuery(".nav-top").toggleClass("open");
    });

    $(".menu-element a").each(function () {
        var location;
        var link = this.href;
        location= window.location.href;
        if(location == link){
            $(this).parents(".menu-element").addClass("active");
        }
    });
```
Sass
```sass
@mixin filter($filter-type,$filter-amount)
  -webkit-filter: $filter-type+unquote('(#{$filter-amount})')
  -moz-filter: $filter-type+unquote('(#{$filter-amount})')
  -ms-filter: $filter-type+unquote('(#{$filter-amount})')
  -o-filter: $filter-type+unquote('(#{$filter-amount})')
  filter: $filter-type+unquote('(#{$filter-amount})')
```

