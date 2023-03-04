const Task = require("../db");

const getTask = (req, res) => {
  Task.find({})
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
};

const getSingleTask = (req, res) => {
  const { id } = req.params;
  Task.find({ _id: id })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
};

const createTask = (req, res) => {
  new Task(req.body)
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
};

const updateTask = (req, res) => {
  const { id } = req.params;
  Task.updateOne({ _id: id }, req.body)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  Task.deleteOne({ _id: id })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
};

module.exports = { getTask, createTask, updateTask, deleteTask, getSingleTask };
