const getFirst = (x) => x[0];
const toUpper = (x) => x.toUpperCase();
const addToTheEnd = (x) => x.concat("!!!!");

function compose(...args) {
  return function inner(value) {
    const res = [...args].reduce((acc, curr) => {
      return curr(acc);
    }, value);

    return res;
  };
}

const compose_ = compose(getFirst, toUpper, addToTheEnd);

console.log(compose_(["qwqw", "wqw"]));
