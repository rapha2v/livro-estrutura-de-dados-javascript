class Stack {
  public items: any[];

  constructor() {
    this.items = [];
  }

  /**
   * Adiciona novo(s) elemento(s) no topo de this.items
   **/
  push(...ele: any): void {
    this.items.push(...ele);
  }

  /**
   * Devolve o elemento que está no topo da pilha e o remove da mesma
   **/
  pop(): any {
    return this.items.pop();
  }

  /**
   * Devolve o primeiro elemento da pilha
   **/
  peek(): any {
    return this.items[this.items.length - 1];
  }

  /**
   * Verifica se a pilha está vazia e retorna um booleano
   **/
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Remove todos os elementos da pilha
   **/
  clear(): void {
    this.items = [];
  }

  size(): number {
    return this.items.length;
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());
console.log(stack.items);
