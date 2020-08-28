// class jQuery {
//     constructor(seletor){
//         let slice =Array.prototype.slice
//         let dom = slice.call(document.querySelectorAll(seletor)) 
//         let len = dom?dom.length:0 
//         for (let i=0; i<len; i++ ) {
//             this[i]  = dom[i]
//         }
//         this.length = len;
//         this.seletor = seletor||''
//     }

//     append(node){
//         //...
//     }

//     addClass(name){
//         //...
//     }

//     html(){
//         //..
//     }

// }

// window.$ = function(selector){
//     // 工厂模式
//     return new jQuery(selector)
// }

// var $p = $('p')

// console.log($p)
// console.log($p.addClass)


function loadImg(src){
    let promise = new Promise(function(resolve,reject){
        let img = document.createElement('img')
        img.onload =function(){
            resolve(img)
        }
        img.onerror=function(){
            reject('图片加载失败')
        }
        img.src = src
    })
    return promise
}

let src  = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598606294280&di=fa46e6db0c1328424c0c4fcee00846d8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F11%2F20130111144626_fXci8.jpeg"

let result  = loadImg(src)

//单一职责原则  开闭原则， 对扩展开放，对修改封闭
result.then((img) =>{
    // part 1
    alert(`width:${img.width}`)
    return img
}).then((img) =>{
    // part 2
    alert(`height:${img.height}`)
    return img
}).then((img) =>{
    // part 3
    alert(`src: ${img.src}`)
    return img
}).catch(function(err){
    alert(err)
})