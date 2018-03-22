/**
 * Created by yangyang on 2018/3/20.
 */
import LY from 'lvyii-engine'
import {userFunctions} from './cloud/user'
import {missionFuncs} from './cloud/util/mission'

/* for test */
LY.Cloud.define('cloudTest', function (request) {
  return 'hello test'
})

LY.Cloud.define('mongooseTest', userFunctions.testUser)
//mission
LY.Cloud.define('getMissionAward', missionFuncs.getMissionAward)
LY.Cloud.define('crystalSum', missionFuncs.crystalSum)