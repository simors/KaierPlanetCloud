/**
 * Created by yangyang on 2018/3/20.
 */
import LY from 'lvyii-engine'
import {userFunctions} from './cloud/user'
import {missionFuncs} from './cloud/util/mission'
import {ethFuncs} from './cloud/util/eth'


/* for test */
LY.Cloud.define('cloudTest', function (request) {
  let {text} = request.params
  return text?text:'hello lvyii'
})

LY.Cloud.define('mongooseTest', userFunctions.testUser)
//任务相关
LY.Cloud.define('getMissionAward', missionFuncs.getMissionAward)
LY.Cloud.define('crystalSum', missionFuncs.crystalSum)
LY.Cloud.define('setDeserveEngine', missionFuncs.addDeserveEngine)
LY.Cloud.define('testMission', missionFuncs.testMission)
LY.Cloud.define('sendEngineToUsers', missionFuncs.sendEngineToUsers)
LY.Cloud.define('userGetEngine', missionFuncs.userGetEngine)

//ethFuncs
LY.Cloud.define('testWeb3', ethFuncs.testWeb3)
LY.Cloud.define('createETHUser', ethFuncs.createETHUser)
LY.Cloud.define('testCon', ethFuncs.testCon)
