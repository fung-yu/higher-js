//promise 可以解决 错误处理的问题  并发的问题  回调地狱的问题
//1. promise 类 承诺 允诺 （promise有三个状态） 等待态 pending  成功态 resolved   失败态 rejected
//2. resolve, reject也是函数
//3.executor执行器会立马执行
//4. 每一个promise上都有一个then方法  then方法中传递两个函数  分别代表成功后执行的回调和失败后执行的回调
//5. 一旦成功就不能在失败 一旦失败就不能在成功
let Promise = require('./1.promise');
let promise = new Promise(function(resolve, reject) {
  //executor执行器会立马执行
  console.log(1);
  reject('有钱了');
});
promise.then(
  function(value) {
    //onFulfilled
    console.log("success", value);
  },
  function(reason) {
    //onRejected
    console.log("fail", reason);

  }
);
console.log(2);
