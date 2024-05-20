window = global;
delete global;
delete Buffer;


canvas = {
    getContext:function () {}
}
document = {
    createElement:function (re){
        console.log("re:::",re,typeof re)
        if(re==="canvas"){
            return canvas
        }

    },
    documentElement:{},
    cookie:"a1=1887aefebc62oq3ch3nyrj1i35rl6ucq1y0skfx2y30000229554; webId=02686e560d185e3f0549b8c3aa9739f8; gid=yYYW0didf8y4yYYW0didDviCSKJlAqSxqIvF8JvVy3q2FMq81K7SAT888JJj22480f2qj4qf; abRequestId=02686e560d185e3f0549b8c3aa9739f8; xsecappid=xhs-pc-web; cache_feeds=[]; webBuild=4.16.0; unread={%22ub%22:%2266312c76000000001e038b7f%22%2C%22ue%22:%22662b1c2600000000040181c1%22%2C%22uc%22:25}; websectiga=3633fe24d49c7dd0eb923edc8205740f10fdb18b25d424d2a2322c6196d2a4ad"
}

navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}

location = {
    "ancestorOrigins": {},
    "href": "https://www.xiaohongshu.com/explore?channel_id=homefeed.food_v3",
    "origin": "https://www.xiaohongshu.com",
    "protocol": "https:",
    "host": "www.xiaohongshu.com",
    "hostname": "www.xiaohongshu.com",
    "port": "",
    "pathname": "/explore",
    "search": "?channel_id=homefeed.food_v3",
    "hash": ""
}

screen = {}

localStorage = {
    getItem:function () {
        
    }
}

// ============================ 代理 ============================
function SetProxy(proxyObjs) {
    for (let i = 0; i < proxyObjs.length; i++) {
        const handler = `{
          get: function(target, property, receiver) {
          if (property!="Math" && property!="isNaN"){
             if (target[property] && typeof target[property] !="string" &&  Object.keys(target[property]).length>3){
              }else{
            console.log("方法:", "get  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", target[property]);}}
            return target[property];
          },
          set: function(target, property, value, receiver) {
            console.log("方法:", "set  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", value, ", 属性值类型：", typeof target[property]);
            return Reflect.set(...arguments);
          }
        }`;
        eval(`try {
            ${proxyObjs[i]};
            ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
        } catch (e) {
            ${proxyObjs[i]} = {};
            ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
        }`);
    }
}

SetProxy(["window","document","navigator","location","localStorage"])