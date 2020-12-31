const { Console } = require('console');
const doraemonDb = require('./src/index');

doraemonDb('1','ranjit',5)
// console.log(SData('1'))
console.log(doraemonDb.all())
// console.log(SData.read("1"))
setTimeout(()=>{
    console.log(doraemonDb.read('1'))
},2000)

