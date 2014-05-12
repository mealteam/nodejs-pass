
exports.index = function(req, res){
  res.render('index', { title: "Start Bootstrap"});
};

exports.login = function(req, res){
    res.render('login', { user: req.user, message: req.flash('error') });
};

exports.account =  function(req, res){
    res.render('account', { user: req.user });
};


/*
exports.login_process = function(req, res){
    passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
        function(req, res) {
            //res.redirect('/');
            res.render('account', { user: req.user, message: 'GOOD' });
        }
};
*/