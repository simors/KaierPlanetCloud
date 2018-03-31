/**
 * Created by lilu on 2018/3/21.
 */
var mongoose = require('mongoose')
import UserModel from './model'
import {ethFuncs} from '../util/eth'

/**
 * 定义用户的结构给用户MODAL使用
 */

/**
 * 测试增加用户数据
 * @param request
 * @returns {Promise}
 */
async function testUser(request) {
  let chainUser = await ethFuncs.createETHUser()
  var personEntity = new UserModel({
    mobilePhone: '13988888888',
    username: 'test',
    address: chainUser.address,
    privateKey: chainUser.privateKey,
    crystal: 0,
    engine: 0,
    availableEngineNum: 0,
  });

  return personEntity.save()
  // let userList = await UserModel.find({name:'lily'},'name sex')
  // return userList
}

async function addUserEthAccount(request){
  let {currentUser, params} = request
  let user = UserModel.findById(currentUser.id)
  if(user.privateKey){
    return
  }else{
    let chainUser = await ethFuncs.createETHUser()
    user.privateKey = chainUser.privateKey
    user.address = chainUser.address
    return await user.save()
  }
}

/**
 * 获取用户的幽能数量
 * @param request
 * @returns {ABIDefinition[]}
 */
async function getUserEngine(request){
  let {userId} = request.params
  let user = await UserModel.findById(userId)
  console.log('user======>',user)
  let engines = await ethFuncs.getUserEngineNum({address: user.address})
  return engines
}


export const userFunctions = {
  testUser,
  getUserEngine,
  addUserEthAccount
}