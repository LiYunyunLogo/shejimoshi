// 工厂模式


// 将 new操作单独封装

// 遇到new时就要考虑是否该试用工厂模式

// demo 1
class Product{
    constructor(name){
        this.name =  name
    }
    init(){
        console.log("我是" + this.name + 'init')
    }
    fn1(){
        console.log("我是" + this.name + 'fn1')
    }
    fn2(){
        console.log("我是" + this.name + 'fn2')
    }
}

// 工厂
class Creator{
    create(name){
        return new Product(name)
    }
}

let creator = new Creator()

let p = creator.create('p1')
p.init()
p.fn1()


//工厂模式 使用场景

/**
 *  jQuery
 *  $("div") 和new $("div")的区别？
 *  第一，书写麻烦，jQuery的链式操作将成为噩梦
 *  第二，一旦jQuery名字变化，将是灾难性的
 * 
 */