
const fs = require('fs')
let model = {
    getArr(callback) {
        fs.readFile('./data/heros.json', "utf-8", function (err, content) {
            if (err) console.log(err);
            let jsonArr = JSON.parse(content);
            callback(jsonArr)
        })
    },
    getMaxId(callback) {
        fs.readFile('./data/heros.json', "utf-8", function (err, content) {
            if (err) console.log(err);
            let jsonArr = JSON.parse(content);
            // console.log(jsonArr)
            let id = 0;
            for (let i = 0; i < jsonArr.length; i++) {
                if (jsonArr[i].id > id) {
                    id = jsonArr[i].id;
                }
            }
            callback(jsonArr, id);
        })
    },
    writeData(jsonArr) {
        let jsonString = JSON.stringify(jsonArr);
        fs.writeFile(__dirname + '/data/heros.json', jsonString, (err) => {
            if (err) console.log(err)
        })
    }
}
module.exports = model;