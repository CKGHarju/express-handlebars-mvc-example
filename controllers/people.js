const getPeople = require('../models/people');

const people = (req, res) => {
  res.render('people', {people: getPeople});
}

module.exports = people;
