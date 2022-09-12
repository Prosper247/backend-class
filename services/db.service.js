const config  = require('dotenv');
const mongoose = require('mongoose');


const options = {
    autoIndex: false,
    useNewUrlParser: true,
    UseUnifiedTopology: true
}

const connect = () =>{
    mongoose.connect(process.env.DBURL, options)
    .then(()=>{console.log('connected successfully');})
    .catch(err => {
        console.log('Error in the connection' + err);
    })

}


connect();

exports.mongoose = mongoose;