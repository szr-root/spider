window = this;
const JSEncrypt = require('jsencrypt');

public_key = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDXQG8rnxhslm+2f7Epu3bB0inrnCaTHhUQCYE+2X+qWQgcpn+Hvwyks3A67mvkIcyvV0ED3HFDf+ANoMWV1Ex56dKqOmSUmjrk7s5cjQeiIsxX7Q3hSzO61/kLpKNH+NE6iAPpm96Fg15rCjbm+5rR96DhLNG7zt2JgOd2o1wXkQIDAQAB'
var i = new JSEncrypt();
i.setPublicKey(public_key);

// data = i.encrypt('12344')
// console.log(data)

function encrypt_data(input_data){
    data = i.encrypt(input_data)
    return data
}