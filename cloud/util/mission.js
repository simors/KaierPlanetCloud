/**
 * Created by lilu on 2018/3/22.
 */
import {UserSchema} from '../user'
var mongoose = require('mongoose')
import {mongodb_url} from '../config'
import * as ERRNO from '../errno'

const MISSION_TYPE = {
  LOGIN: 5,
  INVITE: 5,
  VALID: 10,
  CREDIT_CARD: 10,
}

let testSum = 0
/**
 * 计算所有水晶总数
 * @returns {*}
 */
async function crystalSum(){
  mongoose.connect(mongodb_url._DEV_);
  var db = mongoose.connection
  db.on('error',console.error.bind(console,'连接错误:'));
  db.once('open',() => {})
  var UserModel = db.model('lilu', UserSchema)
  try{
    let userList = await UserModel.find()
    if(userList && userList.length){
      let crystalSum = 0
      for(let i=0;i< userList.length;i++){
        crystalSum = crystalSum + userList[i].crystal
      }
      testSum = crystalSum
      return crystalSum
    }
  }catch(e){
    return e
  }

}

/**
 * 获得任务奖励
 * @param params {user,missionType}
 */
async function getMissionAward(params){
  let {userId, missionType} = params
  if(userId==undefined){
    userId = '5ab27e0cdb5bae16106e4332'
  }
  if(missionType == undefined){
    missionType = 5
  }
  mongoose.connect(mongodb_url._DEV_);
  var db = mongoose.connection
  db.on('error',console.error.bind(console,'连接错误:'));
  db.once('open',(err) => {return err})
  var UserModel = db.model('User', UserSchema)
  let user = await UserModel.findById(userId)
  if(!user.crystal){
    user.crystal= missionType
  }else{
    let crystal = user.crystal + missionType
    user.crystal= crystal
  }
  let updateUser = await user.save()
  return updateUser
}


/**
 * 设置用户赢得的幽能
 * @param userId
 * @returns {*}
 */
async function addDeserveEngine(userId){
    userId = '5ab27e0cdb5bae16106e4332'
  mongoose.connect(mongodb_url._DEV_);
  var db = mongoose.connection
  db.on('error',console.error.bind(console,'连接错误:'));
  db.once('open',(err) => {return err})
  var UserModel = db.model('User', UserSchema)
  try{
    let sum = testSum?testSum:await crystalSum()
    let user = await UserModel.findById(userId)
    if(!user.engine){
      user.engine = (user.crystal/sum)*200
    }else{
      user.engine = user.engine + user.crystal*200/sum
    }
    let updateUser = await user.save()
    return updateUser
  }catch (e){
    return e.message
  }

}

export const missionFuncs = {
  getMissionAward,
  crystalSum,
  addDeserveEngine
}