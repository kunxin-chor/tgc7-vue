export default class Queue {
    items = [];
    enqueue(newItem) {
        this.items.push(newItem);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
    

    clear() {
        this.items = [];
    }

    length() {
        return this.items.length;
    }

    /* returns an immutable copy! */
    getItems() {
        return {...this.items};
    }
}