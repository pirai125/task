const model = require("../Models/query");

exports.getAllItems = (req, res) => {
  model.getAllItems((err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.readItem = (req, res) => {
  model.readItem(req.params.id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.createItem = (req, res) => {
  model.createItem(req, (err, result) => {
    if (err) throw err;
    res.json({ message: "Successfully Created " });
  });
};
exports.editItem = (req, res) => {
  model.editItem(req, (err, result) => {
    if (err) throw err;
    res.json({ message: "Successfully Updated" });
  });
};
exports.deleteItem = (req, res) => {
  model.deleteItem(req.params.id, (err, result) => {
    if (err) throw err;
    res.json({ message: "Successfully Deleted" });
  });
};
