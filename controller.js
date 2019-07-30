const fs = require('fs');
const querystring = require('querystring')
const model = require('./model')
let controller = {
    getAllhero(callback) {
        fs.readFile(__dirname + '/data/heros.json', "utf-8", (err, data) => {
            if (err) console.log(err);
            let arr = JSON.parse(data);
            callback(arr)
        })
    },
    addHero(req, res) {
        let data = "";
        req.on('data', function (chunck) {
            data += chunck;
        })
        req.on("end", function () {
            data = querystring.parse(data)
            model.getArr((jsonArr) => {
                model.getMaxId((jsonArr, id) => {
                    data.id = id + 1;
                    jsonArr.push(data);
                    // console.log(jsonString)
                    model.writeData(jsonArr)
                    res.send({ code: 200, msg: 'successful' })
                })

            })

        })
    },
    delHero(req, res) {
        let id = req.query.id;
        fs.readFile('./data/heros.json', "utf-8", function (err, data) {
            let arr = JSON.parse(data);
            let index = arr.findIndex(function (current) {
                return current.id == id;
            })
            arr.splice(index, 1);
            let jsonstr = JSON.stringify(arr);
            fs.writeFile('./data/heros.json', jsonstr, (err) => {
                if (err) console.log(err)
            })
            res.send({ code: 200, msg: '删除成功' });
        })
    }
}

module.exports = controller;