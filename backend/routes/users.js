const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

module.exports = (db) => {
  /* GET users listing. */
  router.get('/', (req, res) => {
    
    const query = {
      text: 'SELECT * FROM users;'
    };

    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));

  });

  // ASYNC AWAIT INSTEAD OF .THEN
  // router.get('/', async (req, res) => {
    
  //   const query = {
  //     text: 'SELECT * FROM users;'
  //   };

  //   try {
  //     const users = await db.query(query);
  //     res.json(users);
  //   } catch (err) {
  //     console.log(err);
  //   }


  // });


  router.post('/', (req, res) => {

    // extract the data from req.body
   
    const {name, email, password} = req.body;
   

    // create an insert query in the db

    const query = {
      text: `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *;`,
      values: [name, email, password]
    };

    db
      .query(query)
      .then(result => {
        res.cookie('userId', result[0].id)
        res.json(result[0])
  }) 
      .catch(err => console.log(err));

    // return the newly created user back
  });

  // Verify if user exists
  router.post('/register', (req, res) => {
    const {userName, email} = req.body;
    const query = {
      text: `SELECT * FROM users WHERE username=$1 or email=$2;`,
      values: [userName, email]
    };
    
    db
      .query(query)
      .then(result => {
        console.log(result)
        res.json(result[0])
      }) 
      .catch(err => console.log(err));
  });

  
  router.post('/login', (req, res) => {
    const {userName, password} = req.body;
    const query = {
      text: `SELECT * FROM users WHERE username=$1;`,
      values: [userName]
    };
    
    db
      .query(query)
      .then(result => {
        if(result[0] !== undefined){
          bcrypt.compare(password, result[0].password, function(err, res) {
            //if passwords match then res is true
            if(!res) {
              console.log(res)
            }
          });
          res.cookie('userId', result[0].id)
        } 
        res.json(result[0])
        
      }) 
      .catch(err => console.log(err));
  });

  return router;
};
