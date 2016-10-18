let mongoose = require('mongoose');
mongoose.connect('mongodb://pokerintel:poker1tel@ds017256.mlab.com:17256/pokerintel');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
    exports.db=db;
});

let sessionSchema = new mongoose.Schema({
  
    
    username: { type: String, required: true, unique: true },
    venue: {type: String, required: true},
    variant: {type: String, required: true},
    blinds: {type: Array, required: true},
    buyin: {type: Number, required: true},
    cashout:{type: Number,required: true},
    start: {type: Date,required: true},
    end: {type: Date, required: true}
    
    
    
    
});

let userSchema=new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    name: {type: String}
})

exports.Session=mongoose.model('Session',sessionSchema);
exports.User=mongoose.model('User',userSchema);

