class ArrayList {
  constructor() {
    this.list = {};
    this.length = 0;
  }

  push(value) {
    let idx = this.length;
    this.list[idx] = value;
    this.length++;

    return this.list;
  }

  pop() {
    const lastIdx = this.length;
    const response = delete this.list[lastIdx - 1];
    this.length--;
    return response;
  }

  get(idx) {
    return this.list[idx];
  }

  delete(idx) {
    const response = delete this.list[idx];
    this._colapse(idx);
    return response;
  }

  _colapse(idx) {
    for (let i = idx; i < this.length; i++) {
      this.list[i] = this.list[i + 1];
    }

    delete this.list[this.length - 1];
  }

  getList() {
    return this.list;
  }
}

const list = new ArrayList();

console.log(list.push(5));
console.log(list.push(50));
console.log(list.push(15));

console.log(list.delete(0));

console.log(list.getList());
