class MyArray {
  lenght: number = 0;
  data: any;
  constructor() {
    this.lenght = 0;
    this.data = {};
  }
  get(index: any): any {
    return this.data[index];
  }

  push(item: any) {
    this.data[this.lenght] = item;
    this.lenght++;
    return this.lenght;
  }

  pop() {
    const lastItem = this.data[this.lenght - 1];
    delete this.data[this.lenght - 1];
    this.lenght--;
    return lastItem;
  }

  delete(index: any) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index: any) {
    for (let i = index; i < this.data.length; i++) {
      this.data[i] === this.data[i + 1];
    }
    delete this.data[this.lenght - 1];
    this.lenght--;
  }
}

const newArray = new MyArray();
newArray.push("you");
newArray.push("are");
newArray.push("nice");
// newArray.pop();
newArray.delete("Joha");
console.log(newArray);
