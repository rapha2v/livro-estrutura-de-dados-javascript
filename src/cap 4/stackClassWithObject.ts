class StackObject {
  private items: { [key: number]: any };
  private count: number;

  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(...ele: any): void {
    ele.map((e: any) => {
      this.items[this.count] = e as any;
      this.count++;
    });
  }

  pop(): any {
    if (this.isEmpty()) return undefined;
    this.count--;
    const ele = this.items[this.count];
    delete this.items[this.count];
    return ele;
  }

  peek(): any {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  clear(): void {
    this.items = {};
    this.count = 0;
  }

  size(): number {
    return this.count;
  }
}

const stackObj = new StackObject();
stackObj.push(1, 2, 3, 4, 5, 6);
console.log(stackObj.pop());
