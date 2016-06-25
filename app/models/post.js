// Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;


var PostSchema = new Schema({
    caption: {type: String, required: true},

    picture: {type: Schema.Types.Mixed, required: true},
    morePictures: Schema.Types.Mixed, // this is not required
    createdAt: {type: Date, default: Date.now},
});

// Sets the createdAt parameter equal to the current time
PostSchema.pre('save', function(next){
    now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

// Exports the SuperheroSchema for use elsewhere.
module.exports = mongoose.model('post', PostSchema);
