/**
 * Created by yangyang on 2018/3/23.
 */
import mongoose from '../util/mongdUtil'

let UserSchema = new mongoose.Schema({
  username: {type: String},             //用户名
  mobilePhone: {type: String},          //手机号
  password: {type: String},             //密码
  loginDate : {type: Date},             //登陆时间
  engine: {type: Number},               //幽能数量
  crystal: {type: Number},              //水晶数量
  availableEngineNum: {type: Number},   //可获取幽能的次数
  address: {type: String},              //公钥地址
  privateKey: {type: String}            //私钥地址
})

export default mongoose.model("User", UserSchema, "Users")