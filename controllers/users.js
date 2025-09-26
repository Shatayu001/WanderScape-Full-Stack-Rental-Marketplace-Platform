const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signup = wrapAsync(async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    let registeredUser = await User.register(newUser, password);
    // auto log in

    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Wanderscape!");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
});

module.exports.renderLogInForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.logIn = async (req, res) => {
  req.flash("success", "Welcome back to Wanderscape!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logOut = (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out!");
    res.redirect("/listings");
  });
};
