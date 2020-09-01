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

//   class SingleObject{
//       login(){
//           console.log('login........')
//       }
//   }

//   SingleObject.getInstance = (function(){
//       let instance
//       return function(){
//           if(!instance){
//             instance = new SingleObject()
//           }
//           return instance
//       }
//   })()

//   let  Object1 =  SingleObject.getInstance()
//   let  Object2 =  SingleObject.getInstance()
//   Object1.login()
//   Object2.login()
//   console.log('Object1===Object2',Object1===Object2)


//   new  SingleObject

// 单例模式 登录框练习
class LoginForm {
    constructor(){
        this.state = 'hide'
    }
    show(){
        if(this.state === 'show'){
            alert('已经显示')
        }
        this.state = 'show'
        console.log('登录框显示成功')
    }

    hide(){
        if(this.state === 'hide'){
            alert('已经隐藏')
        }
        this.state = 'show'
        console.log('登录框隐藏成功')
    }
}
LoginForm.getInstance = (
    function(){
        let instance
        return function(){
            if(!instance){
                instance = new LoginForm()
            }
            return instance
        }    
    }
)()

const login1 = LoginForm.getInstance()
login1.show()
const login2 = LoginForm.getInstance()
login2.show()
console.log(login1 === login2)



// 构造函数 习题，构造函数有返回值的话new出来是返回值
// function Fn1(){
//     this.name = 'f1'
// }

// function Fn2(){
//     this.name = 'f2'
//     return {}
// }

// console.log(new Fn1().name)
// console.log(Fn2().name)
// console.log(new Fn2())
// console.log(Fn2().name)
// console.log(Fn1())
// console.log(Fn2())