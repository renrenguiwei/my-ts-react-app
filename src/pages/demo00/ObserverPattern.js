/**
 * 观察者模式
 */

function Hunter(name, level) {
  this.name = name
  this.level = level
  this.list = []
}

Hunter.prototype.subscrible = function(target, callback) {
  console.log(`${this.name}，等级：${this.level}，等待${target.name}发布赏金任务`)
  target.list.push({callback, _this: this})
}

Hunter.prototype.publish = function(money) {
  console.log(`${this.level}：${this.name}发布悬赏`)
  this.list.forEach(({callback, _this}) => {
    callback && callback(money, _this)
  })
}

let hunter1 = new Hunter('猎人1', '杀手')
let hunter2 = new Hunter('猎人2', '杀手')
let hunterProxy = new Hunter('', '委托人')

hunter1.subscrible(hunterProxy, (money, _this) => {
  console.log(`${_this.name}: ${_this.level}接受${money}元委托`)
})
hunter2.subscrible(hunterProxy, (money, _this) => {
  console.log(`${_this.name}: ${_this.level}接受${money}元委托`)
})

hunterProxy.publish(2000)

















