function my_proxy(obj) {
    return new Proxy(obj, {
        get(target, p, receiver) {
            debugger;
            let val = Reflect.get(...arguments);
            console.log('get ', target, ' =获取属性>', p, ' 值=> ', val);
            return val;
        },
        set(target, p, value, receiver) {
            debugger;
            console.log('set ', target, ' =设置属性>', p, ' 值=> ', value);
            return Reflect.set(...arguments)
        }
    });
}

setTimeout = function (){}

// 补document
var document = {
    referrer: '',
    cookie:'',
    Element:''
}

Document = function Document() {

}

Object.setPrototypeOf(document, Document.prototype)

Document.prototype.getElementById = function (){}

Document.prototype.createElement = function (){}

Document.prototype.addEventListener = function (){}

Document.prototype.visibilityState = function () {}


// 补 window
var window = {}

Window = function Window() {

}

Object.setPrototypeOf(window, Window.prototype);

// console.log(typeof (window))


window = this


// 补Location
var location = {
    href: '',
    // protocol: 'https:'
}

Location = function Location() {

}

Object.setPrototypeOf(location, Location.prototype)


// 补navigator
var navigator = {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36\''
}

Navigator = function Navigator() {

}

Object.setPrototypeOf(navigator, Navigator.prototype)

Navigator.prototype.hasOwnProperty = function (){
    return true
}

// 补screen
var screen ={

}

Screen = function Screen(){

}

Object.setPrototypeOf(screen,Screen.prototype)


// 补history
var history ={

}

History = function History(){

}

Object.setPrototypeOf(history,History.prototype)

History.prototype.back = function (){

}



// 补localStorage
var localStorage ={

}

var sessionStorage = {

}

Storage = function Storage(){

}

Object.setPrototypeOf(localStorage,Storage.prototype)
Object.setPrototypeOf(sessionStorage,Storage.prototype)

Storage.prototype.getItem = function (){

}
Storage.prototype.setItem = function (){

}



// var eventTarget = {
//
// }
//
// EventTarget = function EventTarget(){
//
// }
//
// Object.setPrototypeOf(eventTarget,EventTarget.prototype)
//
// EventTarget.prototype.addEventListener = function (){
//
// }


// ======================= 设置代理 ======================= //
window = my_proxy(window)
document = my_proxy(document)
location = my_proxy(location)
navigator = my_proxy(navigator)
history = my_proxy(history)
screen = my_proxy(screen)