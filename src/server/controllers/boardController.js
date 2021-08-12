const e = require('express');
const db = require("../models/caModels");

const boardController = {};

boardController.getUsers = (req, res, next) => {
  const charQ = 'SELECT * FROM user;';
  const charBoard = `
    SELECT user.UserID, films.title, films._id as id
    FROM people
    LEFT OUTER JOIN people_in_films
    ON people._id = people_in_films.person_id
    RIGHT OUTER JOIN films
    ON films._id = people_in_films.film_id
    ORDER BY people.name
  `;
  db.query(charQ, [])
    .then(response => {
      res.locals.characters = response.rows;
    })
    .then(() => {
      const updatedWithBoard = {};
      db.query(charBoard, [])
        .then(response => {
          response.rows.forEach(el => {
            if (!updatedWithBoard[el.name]) {
              updatedWithBoard[el.name] = [{id : el.id, title:el.title}];
            } else {
              updatedWithBoard[el.name].push({id : el.id, title:el.title});
            }
          });
          res.locals.characters.forEach((el) => {
            el.films = updatedWithFilms[el.name]
          })
          // console.log(res.locals.characters);
          return next();
        });
    })

    .catch(err => console.log('ERROR: ', err));
};


boardController.getCards = (req, res, next) => {
  
};


boardController.getNotes = (req, res, next) => {
  
};


boardController.getInterviews = (req, res, next) => {
  
};


boardController.getOffers = (req, res, next) => {
  
};


boardController.getPeople = (req, res, next) => {
  
};


boardController.addUsers = (req, res, next) => {
  

  
};