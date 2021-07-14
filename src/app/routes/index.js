const homeRouter = require('./home');

function router(app) {
    app.use('/home', homeRouter);
    app.use('/', homeRouter);
}

module.exports = router;