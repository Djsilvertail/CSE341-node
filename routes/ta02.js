const express = require('express');
const router = express.Router();

const userArray = ['Dana', 'Mel', 'Steve'];
let error = '';

router.post('/addUser', (req, res, next) => {
  const newUser = req.body.newUser;
  const index = userArray.indexOf(newUser);
  if (index !== -1) {
    error = 'Person already exists. Please try again!';
  }
  else {
  userArray.push(newUser);
  error = '';
}
  res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
  const remUser = req.body.remUser;
  const index = userArray.indexOf(remUser);
  if (index !== -1) {
    userArray.splice(index, 1);
    error = '';
  } else {
    error = 'Person not found. Please try again!';
  }

  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: userArray,
    errorMessage: error,
    path: '/ta02', 
    activeTA03: true, 
    contentCSS: true, 
  });
});

module.exports = router;
