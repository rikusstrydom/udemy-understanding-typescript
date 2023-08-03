"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item)) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Rikus');
textStorage.addItem('Maxi');
textStorage.removeItem('Rikus');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(5);
numberStorage.addItem(10);
numberStorage.removeItem(5);
console.log(numberStorage.getItems());
// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Rikus' });
// objStorage.addItem({ name: 'Maxi' });
// objStorage.removeItem({ name: 'Rikus' }); // Does not work because it's a new object with new reference
// console.log(objStorage.getItems());
