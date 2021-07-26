/**
 * 发布订阅模式
 */

let HunterUnion = {
  list: {},
  subscribe: function (type, callback, _this) {
    if (!this.list[type]) this.list[type] = []
    this.list[type].push({callback, _this})
  },
  publish: function (type, money) {
    if (!this.list[type]) return
    for(let {callback, _this} of this.list[type]) {
      callback(money, _this)
    }
  }
}

function Hunter(name, level) {
  this.name = name
  this.level = level
}

// 猎人可以在猎人公会发布、订阅任务
Hunter.prototype.subscribe = function (type, callback) {
  console.log(`${this.name}，等级：${this.level}，等待${type}赏金任务`)
  HunterUnion.subscribe(type, callback, this)
}

Hunter.prototype.publish = function (type, money) {
  console.log(`${this.level}：${this.name}发布悬赏`)
  HunterUnion.publish(type, money)
}

let hunter1 = new Hunter('猎人1', '杀手')
let hunter2 = new Hunter('猎人2', '杀手')
let hunter3 = new Hunter('猎人3', '杀手')
let hunterProxy = new Hunter('', '委托人')

hunter1.subscribe('tiger', function(money, _this){
  console.log(`${_this.name}: ${_this.level}接受${money}元委托`)
})
hunter2.subscribe('tiger', function(money, _this){
  console.log(`${_this.name}: ${_this.level}接受${money}元委托`)
})
hunter3.subscribe('sheep', function(money, _this){
  console.log(`${_this.name}: ${_this.level}接受${money}元委托`)
})

//赵六发布了狩猎tiger的任务
hunterProxy.publish('sheep', 198)

//猎人们发布(发布者)或订阅(观察者/订阅者)任务都是通过猎人工会(调度中心)关联起来的，他们没有直接的交流。