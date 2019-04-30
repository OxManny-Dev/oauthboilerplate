const db = require('./../models');

module.exports = {
    getTodos: async(req, res) => {
        res.json(req.user.todos);
    },

    addTodo: async (req, res) => {
        console.log(req.body);
        console.log(req.user);
        const { todo }  = req.body;
        const Todo = await db.Todo.create({todo, user: req.user._id});
        req.user.todos.push(Todo);
        await req.user.save();
        res.json(req.user.todos)
    }
}

