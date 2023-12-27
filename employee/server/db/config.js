const mongoose=require('mongoose');
 function conn() {
    return mongoose.connect(process.env.MONGO_URL);
}
module.exports= conn