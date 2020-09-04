const express = require('express');
const router = express.Router();

module.exports = (db) => {
  /* GET resume listing. */

  router.get('/', (req, res) => {
    const query = {
      text: 'SELECT * FROM resume;'
    };
    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  });

  router.post('/', (req, res) => {
    // extract the data from req.body
    const {user_id, resume_data} = req.body;

    // create an insert query in the db
    const query = {
      text: `INSERT INTO resume (user_id, resume_data) VALUES ($1, $2) RETURNING *;`,
      values: [user_id, resume_data]
    };
    db
      .query(query)
      .then(result => res.json(result[0]))
      .catch(err => console.log(err));
    // return the newly created resume back
  });

  router.post('/resume', (req, res) => {
    const { userId } = req.body;
    const query = {
      text: 'SELECT * FROM resume where user_id = $1;',
      values: [userId]
    };
    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  });

  return router;
}