/**
 * Created by lilu on 2018/3/21.
 */
var mongoose = require('mongoose')

/**
 * 定义一个用户的结构
 */
export const UserSchema = new mongoose.Schema({
  name: String,
  sex: String,
  crystal: Number,   //凯林水晶数
  engine: Number,    //可以获得的幽能数
  lastLoginDate: Date,   //最后登陆时间


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
  var UserModel = db.model('lilu', UserSchema)
  // var personEntity = new PersonModel({name:'lily', sex: 'female'});
  // return personEntity.save()
  let userList = await UserModel.find({name:'lily'},'name sex')
  return userList
}


export const userFunctions = {
  testUser
}