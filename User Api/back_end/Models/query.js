const db = require("../Config/database");

exports.getAllItems = (callback) => {
  db.query("select * from student", callback);
};
exports.readItem = (id, callback) => {
  db.query(`select * from student where id = ?`, [id], callback);
};
exports.createItem = (req, callback) => {
  const values = [req.body.name, req.body.email, req.body.gender, req.body.age];
  db.query(
    "insert into student (`name` , `email` , `gender` , `age`) values (?)",
    [values],
    callback
  );
};
exports.editItem = (req, callback) => {
  const id = req.params.id;
  const values = [
    req.body.name,
    req.body.email,
    req.body.gender,
    req.body.age,
    id,
  ];
  db.query(
    "update student set `name`= ? ,`email`=? ,`gender`=?, `age`=? where id= ?",
    values,
    callback
  );
};
exports.deleteItem = (id, callback) => {
  db.query(`delete  from student where id = ?`, [id], callback);
};
