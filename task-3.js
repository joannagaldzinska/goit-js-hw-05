 // Write code under this line
class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        return this.items.push(item);
    }

    removeItem(item){
        let i = this.items.indexOf(item)
        
        return this.items.splice(i,1)
     }
}

// Storage.prototype.getItems = function(items) {
//     return this.items;
// }

console.log(typeof Storage);
// 'function'

const goods = [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
  ];
  
const storage = new Storage(goods);

console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
  ] */
  
storage.addItem('Дроид');
console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
    'Дроид'
  ] */
  
storage.removeItem('Пролонгер');
console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Железные жупи',
    'Антигравитатор',
    'Дроид'
  ] */
  
  