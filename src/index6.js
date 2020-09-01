// 适配器模式 


class Adaptee{
    secificRequest(){
        return '德国标准插头'
    }
}

class Target {
    constructor(){
        this.adaptee = new Adaptee
    }
    request(){
        let info = this.adaptee.secificRequest()
        return `${info} -转换器- 中国标准插头`
    }
}

//测试 
let target   =  new Target()

// let res  = 