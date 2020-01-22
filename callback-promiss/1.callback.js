// 1.高阶函数
// 函数的参数是函数 或者函数返回函数

// 2.AOP(面向切面编程)  回调函数  装饰器

//1)典型AOP
Function.prototype.before = function(fn) {
  let that = this;
  return function() {
    fn.apply(that, arguments);
    that.apply(that, arguments);
  };
};
let fn = function(val) {
  console.log("old~~", val);
};

let newFn = fn.before(function(val) {
  console.log("new ~~~", val);
});

newFn("123");

//2) lodash _after 在XXX之后
function after(times, callback){
 return function(){
     if(--times === 0){
         callback()
     }
 }
}

let fn = after(2,function(){
    console.log('after~~');
});

fn();
fn();