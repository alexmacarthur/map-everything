# Map Everything!

Add a `.map()` method to the prototypes of Object, String, Set, and Map.

## See the Blog Post

This project was the result of me experimenting with adding `.map()` to JavaScript entities that don't come with it out of the box, as documented here:

[https://macarthur.me/posts/creating-a-map-method-for-objects-strings-sets-and-maps](https://macarthur.me/posts/creating-a-map-method-for-objects-strings-sets-and-maps)

## Installation

`npm install map-everything`

## Usage

Import one or several of the following methods from the `map-everything` package, which will add a `map()` method to the prototypes of the respective entities.

```javascript
import {
  attachToObjectPrototype,
  attachToStringPrototype,
  attachToSetPrototype,
  attachToMapPrototype
} from "map-everything";

attachToObjectPrototype();
attachToStringPrototype();
attachToSetPrototype();
attachToMapPrototype();
```

You may also attach `map()` to _all_ of these prototypes by importing the `mapEverything()` method:

```javascript
import mapEverything from "map-everything";

mapEverything();
```

## Why would I use this?

I'll leave that up to you.

## License

MIT © [Alex MacArthur](https://macarthur.me)
