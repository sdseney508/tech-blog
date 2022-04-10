const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    console.log('Please create an account and login to use these features');
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
