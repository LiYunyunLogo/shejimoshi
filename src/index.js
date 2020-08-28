// class Press{
//     constructor(name){
//         this.name = name
//     }
//     getName(){
//         return this.name
//     }
// }

// let p  = new Press('lyy')

// alert(p.getName())


// 简单的类实例
// class Preson{
//     constructor(name,age){
//         this.name =  name;
//         this.age = age
//     }
//     eat(){
//         alert(`${this.name} eat something`)
//     }
//     speak(){
//         alert(`My name is ${this.name},age ${this.age}`)
//     }
// }
// let zhang = new Preson('张三',20)
// let wang = new Preson('王二',22)

// zhang.eat()
// zhang.speak()

// wang.eat()
// wang.speak()


// 面相对象三要素 继承 封装 多态
// 继承 子类继承父类
// 封装 数据的权限和保密
// 多态 同一接口不同实现

/**
 * 继承示例
 */
// class People{
//     name
//     age
//     weight
//     constructor(name,age){
//         this.name =  name;
//         this.age = age
//         this.weight = 120
//     }
//     eat(){
//         alert(`${this.name} eat something`)
//     }
//     speak(){
//         alert(`My name is ${this.name},age ${this.age}`)
//     }
// }

// class Students extends People{
//     constructor(name,age,num){
//         super(name,age)
//         this.number= num
//     }
//     study(){
//         alert(this.name)
//     }
// }

// let xiaoming = new Students("xiaoming",18,'A1')
// xiaoming.eat()