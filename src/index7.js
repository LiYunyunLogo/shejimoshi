// 发布订阅模式 （观察者模式）

//简单的订阅发布
class Event{
    constructor(){
        //存储事件
        this.callBacks={

        }
    }

    $on(name,fn){
        if(!this.callBacks[name]){
            this.callBacks[name]=[]
        }
        this.callBacks[name].push(fn)
    }
    $emit(name,arg){
        let cbs =  this.callBacks[name]
        if(cbs){
            cbs.forEach(c => {
                c.call(this,arg)
            }); 
        }
    }
    $off(name){
        this.callBacks[name] = null
    }
}


// class A{
//     action(){
//         B.hello()
//     }
// }

// class C{
//     action(){
//         a.hello()
//     }
// }


// 单例模式 全局弹窗的使用，vuex、store demo在src/01.HTML


// 策略模式

// demo "1+2+3-3/4*5"

// if +
// if - 
// if *
// if /

let obj={
    '+':function(){},
    '-':function(){},
}


//代理模式

// 中介者模式

// 装饰器模式

