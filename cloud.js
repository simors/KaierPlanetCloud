/**
 * Created by yangyang on 2018/3/20.
 */
import LY from 'lvyii-engine'
import {userFunctions} from './cloud/user'
/* for test */
LY.Cloud.define('cloudTest', function (request) {
  return 'hello test'
})

LY.Cloud.define('mongooseTest', userFunctions.testUser)