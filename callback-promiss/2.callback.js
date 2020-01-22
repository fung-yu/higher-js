//ajax => 异步的
//有两个接口  并发请求数据
//ajax1 拿到用户的名字
//ajax2 拿到用户的年龄

let fs = require("fs");

function after(times, fn){
  let arr = [];
  return function(data){
    arr.push(data);
    if(--times===0){
      console.log(arr)
    }
  }
}

let fn = after(2, function(data){
  console.log('000', data);
})
//异步函数，都无法try  catch
fs.readFile("./age.txt", "utf8", function(err, data) {
  fn(data);
});

fs.readFile("./name.txt", "utf8", function(err, data) {
  fn(data);
});
