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


// 补document
var document = {

}

Document = function Document() {

}

Object.setPrototypeOf(document, Document.prototype)



// 补 window
var window = {}

Window = function Window() {

}

Object.setPrototypeOf(window, Window.prototype);



window = this


// 补Location
var location = {
    href: '',
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




// ======================= 设置代理 ======================= //
window = my_proxy(window)
document = my_proxy(document)
location = my_proxy(location)
navigator = my_proxy(navigator)
