/**
 * Created by yangyang on 2018/3/20.
 */
import LY from 'lvyii-engine'
import {userFunctions} from './cloud/user'
import {missionFuncs} from './cloud/mission'
import {ethFuncs} from './cloud/util/eth'


/* for test */
LY.Cloud.define('cloudTest', function (request) {
  let {text} = request.params
  return text?text:'hello lvyii'
})

//用户相关
LY.Cloud.define('testUser', userFunctions.testUser)
LY.Cloud.define('getUserEngine', userFunctions.getUserEngine)
LY.Cloud.define('createETHUser', userFunctions.createETHUser)
LY.Cloud.define('userAchieveEngine', userFunctions.userAchieveEngine)
LY.Cloud.define('getTop10Users', userFunctions.getTop10Users)

//任务相关
LY.Cloud.define('getMissionAward', missionFuncs.getMissionAward)
LY.Cloud.define('crystalSum', missionFuncs.crystalSum)
LY.Cloud.define('setDeserveEngine', missionFuncs.addDeserveEngine)
LY.Cloud.define('testMission', missionFuncs.testMission)
LY.Cloud.define('sendEngineToUsers', missionFuncs.sendEngineToUsers)
LY.Cloud.define('getEngineNum', missionFuncs.getEngineNum)

//ethFuncs
LY.Cloud.define('testWeb3', ethFuncs.testWeb3)
LY.Cloud.define('testCon', ethFuncs.testCon)
LY.Cloud.define('testAccounts', ethFuncs.testAccounts)
LY.Cloud.define('getEngineFromContract', ethFuncs.getEngineFromContract)
LY.Cloud.define('testSchedule', ethFuncs.testSchedule)
