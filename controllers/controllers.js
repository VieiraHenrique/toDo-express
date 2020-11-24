const ToDo = require('../models/todoModel');

const getToDos = (req, res) => {
    ToDo.find({}, (err, todos) => {
        res.render('index', {
            todos: todos,
        });
    });
};

const postToDos = async (req, res) => {
    const newToDo = await new ToDo({
        title: req.body.title,
    });
    await newToDo.save();
    res.redirect('/');
};

const deleteToDo = async (req, res) => {
    await ToDo.findByIdAndDelete(req.params.id);
    res.redirect('/');
};

module.exports = {
    getToDos: getToDos,
    postToDos: postToDos,
    deleteToDo: deleteToDo,
};
