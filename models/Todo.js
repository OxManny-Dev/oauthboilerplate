const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    todo: String,
    user: { type: Schema.Types.ObjectId, ref: 'User'}
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;