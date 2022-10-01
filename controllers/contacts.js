exports.getAddContact = (req, res, next) => {
    res.render('contact-us', {
        pageTitle: 'Contact Us',
        path: '/contactus',
        productCSS: true,
        activeContactUs: true
    });
};

exports.postAddContact = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
};