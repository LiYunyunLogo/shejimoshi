// 停车场
class Park{
    constructor(floors){
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {}// 存储摄像头拍着返回的车辆信息
    }

    in(car){
        // 通过摄像头获取信息
        const info = this.camera.shot(car)
        // 停到某个停车位
        const i= parseInt(Math.random() * 100 % 100)
        const place = this.floors[0].places[i]
        place.in()
        info.place = place
        //记录信息
        this.carList[car.num] = info
    }

    out(car){
        // 获取信息
        const info  = this.carList[car.num]
        // 将 停车位清空
        const place =  info.place
        place.out()

        //显示时间
        this.screen.show(car,info.inTime)

        //清空记录 
        delete this.carList[car.number]
    }
    emptyNum(){
        return floors.map(floor => {
            return `${floor.index}  层还有 ${floor.emptyPlaceNum()} 个空闲车位`
        }).join('\n')
    }
}

// 出口显示屏
class Screen{
    show(car,inTime){
        console.log("车牌号:" + car.num)
        console.log("停车时间:" + (Date.now() - inTime))
    }
}

// 入口摄像头
class Camera{
    shot(car){
        return {
            num:car.num,
            inTime:Date.now()
        }
    }
}

//车辆
class Car{
    constructor(num){
        this.num = num
    }
}

//层数信息
class Floors{
    constructor(index,places){
        this.index = index
        this.places = places||[]
    }
    emptyPlaceNum(){
        return this.places.filter(i=> i.isImpty).length
    }
}

class Place{
    constructor(){
        this.isImpty = true
    }
    in(){
        this.isImpty = false
    }
    out(){
        this.isImpty = true
    }
}

// 测试 

// 初始化停车场

const floors = []
for(let i = 0; i<3; i++){
    const places =[]
    for(let j = 0; j<100; j++){
        places[j]  = new Place()
    }
    floors[i] = new Floors(i+1,places)
}
console.log(floors,'111111111111111111111111')
const park = new Park(floors)

const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)

console.log('第一辆车进入')

console.log('第一辆车进入',park.emptyNum())

park.in(car1)

console.log('第二辆车进入')

console.log('第二辆车进入',park.emptyNum())

park.in(car2)



console.log('第一辆车进离开')
park.out(car1)


console.log('第二辆车离开')
park.out(car2)


console.log('第三辆车进入')

console.log('第三辆车进入',park.emptyNum())

park.in(car3)


console.log('第三辆车离开')

park.out(car3)