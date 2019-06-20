import {
  attachToObjectPrototype,
  attachToStringPrototype,
  attachToSetPrototype,
  attachToMapPrototype
} from "./index";

beforeEach(() => {
  delete Object.prototype.map;
  delete String.prototype.map;
  delete Set.prototype.map;
  delete Map.prototype.map;
});

describe("attachToObjectPrototype", () => {
  test("it should attach method to prototype", () => {
    expect(Object.prototype.map).toBe(undefined);
    attachToObjectPrototype();
    expect(Object.prototype.map).not.toBe(undefined);
  });

  test("it should map object values", () => {
    attachToObjectPrototype();

    let oldObject = {
      first: 1,
      second: 2,
      third: 3
    };

    let newObject = oldObject.map(function(item, index, thing) {
      return item * 2;
    });

    expect(newObject).toEqual({ first: 2, second: 4, third: 6 });
  });
});

describe("attachToStringPrototype", () => {
  test("it should attach method to prototype", () => {
    expect(String.prototype.map).toBe(undefined);
    attachToStringPrototype();
    expect(String.prototype.map).not.toBe(undefined);
  });

  test("it should map string characters", () => {
    attachToStringPrototype();

    let newString = "I want to scream this!".map(function(item, index, thing) {
      return item.toUpperCase();
    });

    expect(newString).toEqual("I WANT TO SCREAM THIS!");
  });
});

describe("attachToSetPrototype", () => {
  test("it should attach method to prototype", () => {
    expect(Set.prototype.map).toBe(undefined);
    attachToSetPrototype();
    expect(Set.prototype.map).not.toBe(undefined);
  });

  test("it should map Set items", () => {
    attachToSetPrototype();

    let oldSet = new Set([1, 2, 3, 4, 5]);

    let newSet = oldSet.map(function(item, index, thing) {
      return item * 3;
    });

    expect(newSet).toEqual(new Set([3, 6, 9, 12, 15]));
  });
});

describe("attachToMapPrototype", () => {
  test("it should attach method to prototype", () => {
    expect(Map.prototype.map).toBe(undefined);
    attachToMapPrototype();
    expect(Map.prototype.map).not.toBe(undefined);
  });

  test("it should map Map items", () => {
    attachToMapPrototype();

    let myMap = new Map();
    myMap.set("my first item", 1);
    myMap.set({}, 2);

    let newMap = myMap.map(function(item, index, thing) {
      // We only want to modify the _value_ of the item.
      item[1] = item[1] * 3;
      return item;
    });

    expect([...newMap]).toEqual([["my first item", 3], [{}, 6]]);
  });
});
