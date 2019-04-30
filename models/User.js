const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    googleId: String,
    todos: [{ type: Schema.Types.ObjectId, ref: 'Todo'}]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;