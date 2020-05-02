const home = (req, res) => {
  res.render('home', {title: 'MVC example'});
}

module.exports = home;
