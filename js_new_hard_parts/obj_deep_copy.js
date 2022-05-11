function deepCopy(obj) {
  const clone = Object.assign({}, obj);

  Object.keys(clone).forEach((key) => {
    clone[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
  });

  return clone;
}

const a = { foo: "bar", obj: { a: 1, b: 2 } };
let b = deepCopy(a);
a.obj.a = 2000;

console.log(b.obj.a);
