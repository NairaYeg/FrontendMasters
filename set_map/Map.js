let myMap = new Map();

let keyString = "a string";
let keyObj = {};
let keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size; // 3

// getting the values
myMap.get(keyString); // "value associated with 'a string'"
myMap.get(keyObj); // "value associated with keyObj"
myMap.get(keyFunc); // "value associated with keyFunc"

myMap.get("a string"); // "value associated with 'a string'"
// because keyString === 'a string'
myMap.get({}); // undefined, because keyObj !== {}
myMap.get(function () {}); // undefined, because keyFunc !== function () {}

// Homework

class Dictionary {}

const dict = new Dictionary({ key: "value", secondKey: "value2" });

dict.get("key"); // 'value'

dict.add("num", 10);
dict.add("negNum", -10);
dict.add("num", 200);

dict.getByKey("num"); // [10, 200]

dict.getByKey("num").remove(10);

dict.getByKey("num"); // [200]

dict.getCountByKey("num"); // 2
dict.getCountByKey("negNum"); // 1

dict.remove("negNum");

dict.getCountByKey("negNum"); // 0

dict.keys(); // 'negNum', 'num'
dict.values(); // 10, -10, 200
