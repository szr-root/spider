function my_proxy(obj) {
    return new Proxy(obj, {
        get(target, p, receiver) {
            // debugger;
            let val = Reflect.get(...arguments);
            console.log('get ', target, ' =获取属性>', p, ' 值=> ', val);
            return val;
        },
        set(target, p, value, receiver) {
            // debugger;
            console.log('set ', target, ' =设置属性>', p, ' 值=> ', value);
            return Reflect.set(...arguments)
        }
    });
}

Image = {}

setTimeout = function () {
}
clearTimeout = function () {
}

attachEvent = function () {
}
addEventListener = function () {
}

var xMLHttpRequest = {}

XMLHttpRequest = function XMLHttpRequest() {
}

Object.setPrototypeOf(xMLHttpRequest, XMLHttpRequest.prototype)

XMLHttpRequest.prototype.open = function () {

}

XMLHttpRequest.prototype.send = function () {

}



// 补document
var document = {
    referrer: 'https://passport.yhd.com/passport/login_input.do',
    cookie:'shshshfpx=6ec76005-df4f-e21a-7740-6bcbcb8b07be-1693880993; _c_id=cplq5t4wx5da023crmo1697707698428s75k; msessionid=6NGAU3ZP35CVDYV4KP3BSV1UJJXE8SAHDP6M; rURL=http%3A%2F%2Fwww.yhd.com; _s_id=yimofhw2hmn4xl5n8191710765339441zmyt; jab-requestId=""',

}

Document = function Document() {

}

Object.setPrototypeOf(document, Document.prototype)

Document.prototype.querySelectorAll = function () {}

// Document.prototype.createElement = function (){}

Document.prototype.attachEvent = function () {
}
Document.prototype.addEventListener = function () {
}

// Document.prototype.getElementsByTagName = function () {
// }

// 补 window
var window = {}
window = this

Window = function Window() {

}

Object.setPrototypeOf(window, Window.prototype);

Window.prototype.attachEvent = function () {
}
Window.prototype.addEventListener = function () {
}

// console.log(typeof (window))



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
    mimeTypes:'',
}


Navigator = function Navigator() {

}

Object.setPrototypeOf(navigator, Navigator.prototype)

Navigator.prototype.plugins = function (){}


// 补screen
var screen = {

}

Screen = function Screen() {

}

Object.setPrototypeOf(screen, Screen.prototype)



var htmlCanvasElement = {}

HTMLCanvasElement = function HTMLCanvasElement() {

}

Object.setPrototypeOf(htmlCanvasElement, HTMLCanvasElement.prototype)

HTMLCanvasElement.prototype.getContext = function (){}


// ======================= 设置代理 ======================= //
window = my_proxy(window)
document = my_proxy(document)
location = my_proxy(location)
navigator = my_proxy(navigator)
screen = my_proxy(screen)
// localStorage = my_proxy(localStorage)
