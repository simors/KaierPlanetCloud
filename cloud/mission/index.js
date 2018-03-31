/**
 * Created by lilu on 2018/3/22.
 */
import UserModel from '../user/model'
import EngineRecordModel from './model'
var mongoose = require('mongoose')
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
  try{
    let userList = await UserModel.find({availableEngineNum: {$lt: 10}})
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
 * 增加一次用户可以获得幽能的次数，添加一条获得幽能的记录
 * @param userId
 * @returns {*}
 */
async function addDeserveEngine(params){
  let {userId, crystalSum} = params
  try{
    let user = await UserModel.findById(userId)
    let engine = user.crystal/crystalSum
    if(!user.availableEngineNum){
      user.availableEngineNum = 1
    }else{
      user.availableEngineNum = user.availableEngineNum + 1
    }
    let engineRecord = new EngineRecordModel({
      userId: user._id,
      engine: engine,
      status: 0 ,
    })
    await engineRecord.save()
    await user.save()
    return
  }catch (e){
    return e.message
  }
}



/**
 * 遍历集合，所有符合要求的用户按比例发送幽能
 * @returns {*}
 */
async function sendEngineToUsers(){
  try{
    let userList = await UserModel.find({availableEngineNum: {$lt: 10}, crystal: {$gt: 0}})
    let crystalSum = 0
    if(userList && userList.length){

      for(let i=0;i< userList.length;i++){
        crystalSum = crystalSum +userList[i].crystal
      }

      for(let i=0;i< userList.length;i++){
        await addDeserveEngine({userId: userList[i]._id, crystalSum: crystalSum})
      }
      // testSum = crystalSum
      return
    }
  }catch(e){
    return e
  }
}

/**
 * 用户获取幽能
 */
async function userGetEngine(request){
  let {userId} = request.params
  //从区块链中获取幽能
  let user = await UserModel.findById(userId)
  user.engine = 0
  return await user.save()
}

async function testMission(request){
  return await addDeserveEngine(request.params)
}

export const missionFuncs = {
  getMissionAward,
  crystalSum,
  addDeserveEngine,
  testMission,
  sendEngineToUsers,
  userGetEngine
}