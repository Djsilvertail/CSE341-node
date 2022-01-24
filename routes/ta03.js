//TA03 PLACEHOLDER
const fs = require("fs");
const express = require('express');
const path = require("path");
const router = express.Router();

const ItemPath = path.join(require.main.path, "data", "Items.json");

router.get('/', (req, res, next) => {

  let gotData = req.body.search;
  console.log(gotData);

  fs.readFile(ItemPath, (error, fileContent) => {
    let itemList = [];

    if(!error){
      itemList = JSON.parse(fileContent);
    }

      res.render('pages/ta03', {
        title: 'Team Activity 03',
        path: '/ta03', // For pug, EJS
        activeTA03: true, // For HBS 
        contentCSS: true, // For HBS
        items: itemList
      });
  });


  
});

module.exports = router;