const mongoose  = require("../services/db.service").mongoose;
const Schema = mongoose.Schema;

const Student = new Schema({
      firstname: String,
      lastname: String,
      email: {required: true,type:String},
      username: String

},
{timestamps: true}
)

module.exports = mongoose.model('Students', Student);