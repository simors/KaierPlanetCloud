/**
 * Created by lilu on 2018/3/21.
 */
var mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
  name: String,
  sex: String, //定义一个属性name，类型为String
},{collection: 'User'})

async function testUser(request) {
  // var db = mongoose.createConnection('193.112.106.11','KaierPlanet_dev')
  mongoose.connect('mongodb://193.112.106.11/KaierPlanet_dev');
  var db = mongoose.connection
  db.on('error',console.error.bind(console,'连接错误:'));
  db.once('open',function(){
    // return 'i m open '
    //一次打开记录
  })
  ;
  var PersonModel = db.model('lilu', PersonSchema)
  // var personEntity = new PersonModel({name:'lily', sex: 'female'});
  // return personEntity.save()
  let persons = await PersonModel.find({name:'lily'},'name sex')
  return persons
}


export const userFunctions = {
  testUser
}