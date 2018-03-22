/**
 * Created by lilu on 2018/3/22.
 */
import {UserSchema} from '../user'
var mongoose = require('mongoose')

const MISSION_TYPE = {
  LOGIN: 5,
  INVITE: 5,
  VALID: 10,
  CREDIT_CARD: 10,
}

async function crystalSum(){


}

/**
 * 获得任务奖励
 * @param params {user,missionType}
 */
async function getMissionAward(params){
  let {user, missionType} = params
  let mo

}

export const missionFuncs = {

}