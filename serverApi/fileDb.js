const fs = require('fs');
const {nanoid} = require('nanoid');

const fileName = './db.json';
let data = [];

module.exports = {
  init() {
    try {
      const fileContents = fs.readFileSync(fileName);
      data = JSON.parse(fileContents);
    } catch (e) {
      data = [];
    }
  },
  getItems() {
    return data;
  },
  addItem(item) {
    item.id = nanoid();
    data.push(item);
    this.save();
  },
  save() {
    fs.writeFileSync(fileName, JSON.stringify(data));
  }
};