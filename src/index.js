export function attachToObjectPrototype() {
  Object.prototype.map = function(func) {
    // Collect an array of each value within the object.
    let oldValues = Object.values(this);

    // Manipulate those values with the provided callback method.
    let newValues = oldValues.map(function(item) {
      return func.call(null, item);
    });

    // Reconstruct our object with each modified value.
    let mappedObject = {};
    Object.keys(this).forEach(function(key, index) {
      mappedObject[key] = newValues[index];
    });

    return mappedObject;
  };
}

export function attachToMapPrototype() {
  Map.prototype.map = function(func) {
    let mapAsArray = [...this];

    let newMapAsArray = mapAsArray.map((item, index) => {
      // Only modify the VALUE of each item in the Map().
      item = func.call(window, item, index, this);
      return item;
    });

    // Construct a new Map() with our modified values.
    let newMap = new Map();
    newMapAsArray.forEach(item => {
      newMap.set(item[0], item[1]);
    });

    return newMap;
  };
}

export function attachToSetPrototype() {
  Set.prototype.map = function(func) {
    let setArray = [...this];

    let newSetArray = setArray.map((item, index) => {
      return func.call(window, item, index, this);
    });

    return new Set(newSetArray);
  };
}

export function attachToStringPrototype() {
  String.prototype.map = function(func) {
    let stringArray = this.split("");

    let newStringArray = stringArray.map((item, index) => {
      return func.call(window, item, index, this);
    });

    return newStringArray.join("");
  };
}

export default function attachToAll() {
  attachToObjectPrototype();
  attachToStringPrototype();
  attachToMapPrototype();
  attachToSetPrototype();
}
