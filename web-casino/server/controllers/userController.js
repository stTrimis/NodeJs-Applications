const e = require('express');
const mysql = require('mysql');

// Connection Pool
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// View Users
exports.view = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      let removedUser = req.query.removed;
      res.render('home', { rows, removedUser });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

// Find User by Search
exports.find = (req, res) => {
  let searchTerm = req.body.search;
  // User the connection
  connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
    if (!err) {
      res.render('home', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

exports.form = (req, res) => {
  res.render('add-user');
}

// Add new user
exports.create = (req, res) => {
  const { first_name, last_name, email, credits, comments } = req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, credits = ?, comments = ?', [first_name, last_name, email, credits, comments], (err, rows) => {
    if (!err) {
      res.render('add-user', { alert: 'User added successfully.' });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}


// Edit user
exports.edit = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('edit-user', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}


// Update User
exports.update = (req, res) => {
  const { first_name, last_name, email, credits, comments } = req.body;
  // User the connection
  connection.query('UPDATE user SET first_name = ?, last_name = ?, email = ?, credits = ?, comments = ? WHERE id = ?', [first_name, last_name, email, credits, comments, req.params.id], (err, rows) => {

    if (!err) {
      // User the connection
      connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        // When done with the connection, release it
        
        if (!err) {
          res.render('edit-user', { rows, alert: `${first_name} has been updated.` });
        } else {
          console.log(err);
        }
        console.log('The data from user table: \n', rows);
      });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

// Delete User
exports.delete = (req, res) => {

  // Delete a record

  // User the connection
  connection.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, rows) => {

    if(!err) {
      let removedUser = encodeURIComponent('User succesefully removed');
      res.redirect('/?removed=' + removedUser);
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);

  });

  // Hide a record

  // connection.query('UPDATE user SET status = ? WHERE id = ?', ['removed', req.params.id], (err, rows) => {
  //   if (!err) {
  //     let removedUser = encodeURIComponent('User successeflly removed.');
  //     res.redirect('/?removed=' + removedUser);
  //   } else {
  //     console.log(err);
  //   }
  //   console.log('The data from beer table are: \n', rows);
  // });

}

// View Users
exports.viewall = (req, res) => {

  // User the connection
  connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('view-user', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });

}

exports.label = (req, res) => {
  console.log("GOOOODDDD")
  const credits = req.body.phone;
  const set_input = req.body.set_input;
  const set2_input = req.body.set2_input
  connection.query('SELECT credits FROM user WHERE id = 4', [req.params.id], (err,rows) => {
    if(!err){
      set_input == credits;
      res.render('label', {rows})
    }else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}




exports.credits = (req, res) => {
  const credits = req.body.input_credits*100;
  // User the connection
  connection.query('UPDATE user SET credits = ? WHERE id = ?', [credits, req.params.id], (err, rows) => {

    if (!err) {
      // User the connection
      connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        // When done with the connection, release it
        
        if (!err) {
          
          res.redirect('/');

        } else {
          console.log(err);
        }
        console.log('The data from user table: \n', rows);
      });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

exports.roullete = (req, res) => {
  res.sendFile('C:/Users/vaila/Documents/GitHub/Work/user-management/public/roullete.html')
}

exports.slotgames = (req, res) => {
  console.log("GOOOODDDD")
  const credits = req.body.phone;
  const set2_input = req.body.set2_input
  connection.query('SELECT credits FROM user WHERE id = 4', [req.params.id], (err,rows) => {
    if(!err){
      set2_input == credits;
      res.render('slot-games', {rows})
    }else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}
exports.back = (req, res) => {
  res.render('label');
}