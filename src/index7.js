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

//单例 加 策略模式


// 构造函数中 可以使用return （不推荐），但返回值必须是this，或者其它非对象类型的值。
// 如果return的是普通值(非引用类型如、字符串、布尔值、数字)，则不会发生什么影响，
// 但是如果值是引用类型（如对象，数组等），则我们new 出来的对象就会被返回的引用类型值给替换了。

function Jisuan(fuHao,numbers){
        this.add = function(){ 
            return numbers[0] + numbers[1] 
        }
        this.sub = function(){ 
            return numbers[0] - numbers[1] 
        }
        // 扩展添加其他方法
        this.addFn = (name,fn)=>{ 
            this[name] = fn
        }
        if(this instanceof Jisuan){
            return  this
        }
}
const fn  = new Jisuan("sub",[22222222,11234719])

console.log(fn(),'2222222222222222222222')



//代理模式

// 中介者模式

// 装饰器模式

