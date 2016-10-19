var mongoose = require('mongoose');
mongoose.connect('mongodb://pokerintel:poker1tel@ds017256.mlab.com:17256/pokerintel',function(err) {
    if (err) {
        console.err(err);
    } else {
        console.log('Connected');
    }    

 });

var sessionSchema = new mongoose.Schema({


    username: {type: String,required: true},
    //9th
    venue: {
        type: String,
        required: true
    },
    //6th
    variant: {
        type: String,
        required: true
    },
    //7th
    blinds: {
        type: Array,
        required: true
    },
    //11th
    buyin: {
        type: Number,
        required: true
    },
    //12th
    cashout: {
        type: Number,
        required: true
    },
    //1st
    start: {
        type: Date,
        required: true
    },
    //2nd
    end: {
        type: Date,
        required: true
    },
    //let
    profit: {
        type: Number,
        default: 0
    },
    //5th
    duration: {
        type: Date,
        default: 0
    }


});

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    
  
                                                                          
});

sessionSchema.pre('save', function(next) {
    this.profit=this.cashout-this.buyin;
    this.time=this.end-this.start;
    
    
    next();
    
});


exports.Session=mongoose.model('Session', sessionSchema);
exports.User=mongoose.model('User', userSchema);


  