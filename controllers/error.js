exports.get404 = (req, res, next) => {
  res.render('404', {
    pageTitle: 'Error',
    path: '/admin/add-products',
    productCSS: true,
    activeAddProduct: true
  });
};