window = global;
var i  = require('node-forge');



// var i = my("XBrZ");
function o(e) {
    var t = i.pki.publicKeyFromPem("-----BEGIN PUBLIC KEY-----\n MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsy4xppPDUT2eAOR5h0cyydzxtKB9O80A\n GjUT6FmDgg6CwelpnE0C2h2JQyP1gCveJs6GDwSDn20RVVpD67f//YPYErjaH/CBOxNG3k5IkW1o\n Qx04uqFNMtWvjzk0aFh2eJLsBi7Ha4elw3WySg00B8oZCL4VBay4ML9kyOAjjCj5jHCX8a2yxIMJ\n IF+EjW3kBR68IMwBvuDL45Qa0oB24vTffaSEs+hGjMTQvoCciOfti3pmEAlVc438/cBgAhK5cIMf\n IMElxYAVvmsDy0I7RCUTrajetKjX94Q+JuQUxnIHNC3IVtYsl1x0lNRtb93IhlRCkZ9djOu350eq\n hZIOXQIDAQAB\n  -----END PUBLIC KEY-----").encrypt(e, "RSA-OAEP", {
        md: i.md.sha256.create(),
        mgf1: {
            md: i.md.sha1.create()
        }
    });
    return window.btoa(t)
}


console.log(o('password'))