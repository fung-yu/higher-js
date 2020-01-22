//“发布”  “订阅”
//观察者模式  混合在一起

function Event() {
  this.events = [];
}

Event.prototype.on = function(fn) {
  this.events.push(fn);
};

Event.prototype.emit = function(data) {
  this.events.forEach(function(fn) {
    fn(data);
  });
};

let fs = require("fs");
let e = new Event();
let arr = [];
e.on(function(data) {
  arr.push(data);
  if (arr.length === 2) {
    console.log(arr);
  }
});
fs.readFile("./age.txt", "utf8", function(err, data) {
  e.emit(data);
});

fs.readFile("./name.txt", "utf8", function(err, data) {
  e.emit(data);
});
