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

setTimeout = function () {
}
clearTimeout = function () {
}
Image = function () {
}
// XMLHttpRequest = function (){
//     return {
//         open:function () {
//
//         }
//     }
// }
// XMLHttpRequest = function (){}

attachEvent = function () {
}
push = function () {
}
substring = function () {
}
addEventListener = function (){}

devicePixelRatio = 2

var xMLHttpRequest = {}

XMLHttpRequest = function XMLHttpRequest() {
}

Object.setPrototypeOf(xMLHttpRequest, XMLHttpRequest.prototype)

XMLHttpRequest.prototype.open = function () {

}

XMLHttpRequest.prototype.send = function () {

}


chrome =
{
    "app": {
        "isInstalled": false,
        "InstallState": {
            "DISABLED": "disabled",
            "INSTALLED": "installed",
            "NOT_INSTALLED": "not_installed"
        },
        "RunningState": {
            "CANNOT_RUN": "cannot_run",
            "READY_TO_RUN": "ready_to_run",
            "RUNNING": "running"
        }
    }
}

// 补document
var document = {
    referrer: 'https://passport.yhd.com/passport/login_input.do',
    cookie: '\n' +
        'shshshfpx=6ec76005-df4f-e21a-7740-6bcbcb8b07be-1693880993; msessionid=XHMK97T318UFATQZPJZQ5H7WZ4GW86YA8NP5; rURL=http%3A%2F%2Fwww.yhd.com; _c_id=cplq5t4wx5da023crmo1697707698428s75k; _s_id=81r8pfsya553wxebhza1697707698428bwnk; jab-requestId=""; 81r8pfsya553wxebhza1697707698428bwnk=407'
}

Document = function Document() {

}

Object.setPrototypeOf(document, Document.prototype)

Document.prototype.querySelectorAll = function (selector) {
    // return {}
}
Document.prototype.attachEvent = function () {
}
Document.prototype.addEventListener = function () {
}
Document.prototype.createElement = function (tagName) {
    return new HTMLCanvasElement()
}
Document.prototype.getElementsByTagName = function () {
}

// 补 window
var window = {}

Window = function Window() {

}

Object.setPrototypeOf(window, Window.prototype);

console.log(typeof (window))

window = this


// 补Location
var location = {
    href: 'https://passport.yhd.com/passport/login_input.do',
    protocol: 'https:',
    pathname: '/passport/login_input.do',
    host:'passport.yhd.com'
}

Location = function Location() {

}

Object.setPrototypeOf(location, Location.prototype)


// 补navigator
var navigator = {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    mimeTypes: '',
    plugins: '',
    webdriver: false,
    language:'zh-CN',
    languages:['zh-CN', 'zh']

}

Navigator = function Navigator() {

}

Object.setPrototypeOf(navigator, Navigator.prototype)


var eventTarget = {}
EventTarget = function EventTarget() {
}

Object.setPrototypeOf(eventTarget, EventTarget.prototype)

EventTarget.prototype.addEventListener = function (type, listener, useCapture) {

}

var hTMLCanvasElement = {}

HTMLCanvasElement = function HTMLCanvasElement() {
}
Object.setPrototypeOf(hTMLCanvasElement, HTMLCanvasElement.prototype)
HTMLCanvasElement.prototype.getContext = function (contextType) {
    return '2d'
}


// 补screen
var screen = {

}

Screen = function Screen() {

}

Object.setPrototypeOf(screen, Screen.prototype)


var localStorage = {
    "uniqueStateKey": "Ax66teplAQAAd5EIY1ktYr5vg0Kiu1m1yQO6BLgRqQuMK8BfhRGck79FhIS4AawUIfCLr4YoFOgAAAAAAAAAAA==",
    "_dev_ha": "dcdd5770c63deb47e35549150a89ba93",
    "__test": "1",
    "_c_f2": "5f177533838cbd651a1519add0d0fb13v0h9"

}

Storage = function Storage() {

}

Object.setPrototypeOf(localStorage, Storage.prototype)

Storage.prototype.setItem = function () {
}
Storage.prototype.getItem = function () {
}


// 补history
var history ={

}

History = function History(){

}

Object.setPrototypeOf(history,History.prototype)

History.prototype.back = function (){

}


// ======================= 设置代理 ======================= //
window = my_proxy(window)
document = my_proxy(document)
location = my_proxy(location)
navigator = my_proxy(navigator)
xMLHttpRequest = my_proxy(xMLHttpRequest)
eventTarget = my_proxy(eventTarget)
screen = my_proxy(screen)
localStorage = my_proxy(localStorage)
