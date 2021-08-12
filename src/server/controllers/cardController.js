const Card = require('../models/cardModels');

const cardController = {};

cardController.postCard = (req, res, next) => {
	console.log('this is postCard', req.body);

	//callback async
	Card.create(
		{
			companyName: req.body.companyName,
			POC: req.body.POC,
			lastCommunicated: req.body.lastCommunicated,
			notesRef: req.body.notesRef,
			lastEdited: req.body.lastEdited, 
			techStack: req.body.techStack,
			selfFeedback: req.body.selfFeedback,
		},
		(err, result) => {
			if (err) {
				console.log(err.message);
				return next({
					status: 500,
					log: `cardController.postCard : ERROR: ${err}`,
					message: {
						err: 'Error occurred in cardController.postCard Check server logs for more details.',
					},
				});
			}
			res.locals.companyName = result;
			return next();
		}
	);
};

cardController.getCard = (req, res, next) => {
	// confused with what parameter to put

	console.log('this is getCard', req.body);

	Card.find({}, (err, result) => {
		if (err) {
			return next(err);
		}
		console.log('this is result', result);
		res.locals.companyName = result;
		return next();
	});

};

cardController.deleteCard = (req, res, next) => {
		
	console.log('delete backend???', req.body);

	Card.deleteOne({_id: req.body.id}, (err, result) =>{
		if(err){
			console.log('error', err.message);
			return next(err);
		}
		return next();
	});

};


module.exports = cardController;
// const e = require('express');
// const db = require("../models/caModels");

// const boardController = {};

// boardController.getUsers = (req, res, next) => {
//   const charQ = 'SELECT * FROM user;';
//   const charBoard = `
//     SELECT user.UserID, films.title, films._id as id
//     FROM people
//     LEFT OUTER JOIN people_in_films
//     ON people._id = people_in_films.person_id
//     RIGHT OUTER JOIN films
//     ON films._id = people_in_films.film_id
//     ORDER BY people.name
//   `;
//   db.query(charQ, [])
//     .then(response => {
//       res.locals.characters = response.rows;
//     })
//     .then(() => {
//       const updatedWithBoard = {};
//       db.query(charBoard, [])
//         .then(response => {
//           response.rows.forEach(el => {
//             if (!updatedWithBoard[el.name]) {
//               updatedWithBoard[el.name] = [{id : el.id, title:el.title}];
//             } else {
//               updatedWithBoard[el.name].push({id : el.id, title:el.title});
//             }
//           });
//           res.locals.characters.forEach((el) => {
//             el.films = updatedWithFilms[el.name]
//           })
//           // console.log(res.locals.characters);
//           return next();
//         });
//     })

//     .catch(err => console.log('ERROR: ', err));
// };

// boardController.getCards = (req, res, next) => {

// };

// boardController.getNotes = (req, res, next) => {

// };

// boardController.getInterviews = (req, res, next) => {

// };

// boardController.getOffers = (req, res, next) => {

// };

// boardController.getPeople = (req, res, next) => {

// };

// boardController.addUsers = (req, res, next) => {

// };
