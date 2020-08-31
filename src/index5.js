/**
 * 单例模式
 * 
 * 系统中被唯一使用
 * 一个类只有一个实例
 * 
 */

 /**
  * 示例
  * 
  * 登录框
  * 购物车
  */

  class SingleObject{
      login(){
          console.log('login........')
      }
  }

  SingleObject.getInstance = (function(){
      let instance
      return function(){
          if(!instance){
            instance = new SingleObject()
          }
          return instance
      }
  })()

  let  Object1 =  SingleObject.getInstance()
  let  Object2 =  SingleObject.getInstance()
  Object1.login()
  Object2.login()
  console.log('Object1===Object2',Object1===Object2)


//   new  SingleObject

function Fn1(){
    this.name = 'f1'
}

function Fn2(){
    this.name = 'f2'
    return {}
}

console.log(new Fn1().name)
console.log(Fn2().name)
console.log(new Fn2())
console.log(Fn2().name)
console.log(Fn1())
console.log(Fn2())