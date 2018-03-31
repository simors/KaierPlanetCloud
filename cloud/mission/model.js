/**
 * Created by yangyang on 2018/3/23.
 */
import mongoose from '../util/mongdUtil'

let EngineRecord = new mongoose.Schema({
  userId: {type: String},
  engine: {type: Number},
  status: {type: Number},
})

export default mongoose.model("EngineRecord", EngineRecord, "EngineRecord")