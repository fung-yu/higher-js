//观察者模式
function Subject() { //被观察者
    this.observers = [];
    this.state = 'happy';
}

Subject.prototype.attach = function(observer){
    this.observers.push(observer);
}

Subject.prototype.setState = function(state){
    this.state = state;
    this.notify();
}

Subject.prototype.notify = function(){
    this.observers.forEach(function(observer){
        observer.update();
    });
}

function Observer(name, target) { //观察者
  this.name = name;
  this.target = target;
}

Observer.prototype.update = function(){  //更新方法
    console.log(`通知：${this.name}，${this.target.state}`);
}

let subject = new Subject();
let observer1 = new Observer("妈妈", subject);
let observer2 = new Observer("爸爸", subject);
subject.attach(observer1); //给目标添加观察者
subject.attach(observer2);
subject.setState('unhappy');//状态更新


//promise 周边的promise库 angular Q
//jquery axios fetch
// 1.多个异步的请求结果
// 2.异步不支持try catch
// 3.多个异步，如果有顺序关系，可能会导致回调地狱
// 4. 异步没有return