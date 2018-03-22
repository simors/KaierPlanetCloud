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
  UserModel.findById(userId, function (err, user) {
    if (err) return err;
    if(!user.crystal){
      user.crystal= missionType
    }else{
      let crystal = user.crystal + missionType
      user.crystal= crystal
    }
    user.save(function (err, updateUser) {
      if (err) return err;
      return updateUser
    });
  })

}

export const missionFuncs = {
  getMissionAward,
  crystalSum
}