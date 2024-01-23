window = global;
delete global;
delete Buffer;

document = {
    referrer: '',
    cookie:'_nano_fp=XpEbn5CqXqgynpXYlT_j5F9Aml47~WRzKCdXIOOJ; api_uid=Ck5cemUjnoik8gBpPbgtAg==; jrpl=Q9NZbWukXVOTsS8bjJlxNv1qMp5IRFjl; njrpl=Q9NZbWukXVOTsS8bjJlxNv1qMp5IRFjl; dilx=VP2SLOZF8QhWJZoj52l66',
    // cookie: '',

}

document.addEventListener = function () {
    
}
document.getElementById = function () {

}


screen = {
    availHeight: 1055,
    availLeft: 1440,
    availTop: 25,
    availWidth: 1920,
}

navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
   userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}

history = {}
history.back = function () {

}

location = {
    href : 'https://www.pinduoduo.com/home/baby/',
}

localStorage = {
    _nano_fp: "XpEbn5CqXqgynpXYlT_j5F9Aml47~WRzKCdXIOOJ",
}


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

// window = my_proxy(window);
// document =  my_proxy(document);
// screen = my_proxy(screen);
// navigator = my_proxy(navigator);
// history = my_proxy(history);
// location = my_proxy(location);