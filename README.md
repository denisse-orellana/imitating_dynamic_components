# Imitating dynamic components 

This projects imitates the dynamic components of Bootstrap 4 with jQuery.

## Ruby & Rails version

```ruby
* ruby '2.6.1'
* gem 'rails', '~> 5.2.6'
```

## Adding jQuery to the Rails project

In the console it is added:

```console
yarn add jquery
```

Then, it is incorporated into the JavaScript Manifest:

```javascript
// application.js

//= require jquery
```

## Imitating Bootstrap 4

First, it is added the function that will run once the DOM (Document Object Model) is ready for JavaScript code to execute. The following functions will be included in this main one.

```javascript
$('document').ready(function() {
}
```

### 1. Alert Dismissing

With **```.toggle()```** the elements will be revealed or hidden immediately.

```javascript
$('#alert').click(function() {
    $('#alertDismissing').toggle();
})
```

### 2. Collapse

With **```.slideToggle```** the elements will slide up or down, appearing to reveal or conceal the items. In the other hand, while the **```preventDefault()```** is called the default action of the event will not be triggered.

```javascript
$('#collapseButton').click(function(e) {
    e.preventDefault();
    $('.collapseEx').slideToggle('slow');
})
```

### 3. Collapse Accordion

With **```.hide()```** is the simplest way to hide an element.

```javascript
$('#headingOne').click(function(e) {
    e.preventDefault();
    $('#collapseOne').toggle();
    $('#collapseTwo').hide();
    $('#collapseThree').hide();
})

$('#headingTwo').click(function(e) {
    e.preventDefault();
    $('#collapseOne').hide();
    $('#collapseTwo').toggle();
    $('#collapseThree').hide();
})

$('#headingThree').click(function(e) {
    e.preventDefault();
    $('#collapseOne').hide();
    $('#collapseTwo').hide();
    $('#collapseThree').toggle();
})
```

Other way to imitate this component is with the next function:

The **```.data()```** will attach data of any type to DOM elements. While  **```.is()```** check the element against jQuery objects and will return *true* if at least one of these elements matches the given arguments. Finally **```.slideToggle()```** will hide the matched elements with a sliding motion.

```javascript
$('.collapsed').click(function(e) {
    let target = $($(this).data('target'));
    if (target.is(':visible')) {
        target.slideUp();
    } else {
        $('.target').slideUp();
        target.slideToggle();
    }
})
```