exports.getSuccess = (req, res, next) => {
    res.render('success', {
        pageTitle: 'Contact Us',
        path: '/contactus',
        productCSS: true,
        activeContactUs: true
      });
};