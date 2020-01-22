//1. promise 类 承诺 允诺 （promise有三个状态） 等待态 pending  成功态 resolved   失败态 rejected
//2. resolve, reject也是函数
//3.executor执行器会立马执行
//4. 每一个promise上都有一个then方法  then方法中传递两个函数  分别代表成功后执行的回调和失败后执行的回调
//5. 一旦成功就不能在失败 一旦失败就不能在成功

function Promise(executor) {
  let that = this;
  that.status = "pending";
  that.value = undefined;
  that.reason = undefined;
  function resolve(value) {
    if (that.status === "pending") {
      that.status = "fulfilled"; //变成成功态
      that.value = value;
    }
  }
  function reject(reason) {
    if (that.status === "pending") {
      that.status = "rejected"; //变成失败态
      that.reason = reason;
    }
  }
  executor(resolve, reject);
}
Promise.prototype.then = function(onFulfilled, onRejected) {
  let that = this;
  if (that.status === "fulfilled") {
    onFulfilled(that.value);
  }
  if (that.status === "rejected") {
    onRejected(that.reason);
  }
};
module.exports = Promise;
