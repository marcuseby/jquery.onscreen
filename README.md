# jQuery.onScreen

This plugin is a bit of a no-brainer. It checks if the element you have specified is on the screen. If it is, you can call a function. If the object leaves the screen, you can also call a function. You can also specify an offset modifier.

Personally, I believe in this quote of Linus Torvalds:
> Talk is cheap. Show me the code.

## How it works

#### .onScreen() - 101
First the simple version: Check if an object is on the screen, and if it is, execute a function. Easy as pie.
```js
jQuery(function() {
    jQuery(".trigger").onScreen(function() {
        console.log("Oh hey, .trigger is on the screen! Hi!");
    });
});
```

#### Multiple conditions
Then here's the version with the double check. Check if an element is on or off the screen and execute functions accordingly.
```js
jQuery(function() {
    jQuery(".trigger").onScreen(function() {
        console.log("Oh hey, .trigger is on the screen! Hi!");
    },
    
    function() {
        console.log("Aww, .trigger is gone. :(");
    });
});
```

#### Offset modifier
And if you want to go all out, you can specify and offset modifier if you want the effect to be early (negative value) or delayed (positive value). Distance is always specified in pixels.
If you want to have the offset modifier without a "off screen" function, you can just pass null as second parameter.

##### Delay
```js
jQuery(function() {
    jQuery(".trigger").onScreen(function() {
        console.log("Oh hey, .trigger is on the screen! Hi!");
    },
    
    function() {
        console.log("Aww, .trigger is gone. :(");
    }, 100); // This happens 100 pixels after the element changes state.
});
```

##### Early execution
```js
jQuery(function() {
    jQuery(".trigger").onScreen(function() {
        console.log("Oh hey, .trigger is on the screen! Hi!");
    },
    
    function() {
        console.log("Aww, .trigger is gone. :(");
    }, -100); // This happens 100 pixels before the element changes state.
});
```

## Final words
And that's all there is to it. Feel free to send pull requests and poke around the code. If there's any major breakage just open an issue. You can also reach me very easily on [Twitter](http://twitter.com/F0lis).