const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

/** Midleware */
app.use(express.urlencoded({ extended: true }));

/** cors */
// const cors = require('cors');
// const whitelist = ['http://localhost:3000', 'http://localhost:8080/', 'https://renodejs.herokuapp.com']
// const corsOptions = {
//     origin: function (origin, callback) {
//         console.log("** Origin of request " + origin);
//         if (whitelist.indexOf(origin) !== -1 || !origin) {
//             console.log("Origin acceptable")
//             callback(null, true)
//         } else {
//             console.log("Origin rejected")
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }
// app.use(cors());
// app.use(cors(corsOptions));

/** Static public folder */
app.use(express.static(path.join(__dirname, "src/public")));
/** Method Override */
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

/** ejs Template */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/resources/views'));

var expressLayout = require('express-ejs-layouts');
app.use(expressLayout);
app.set('layout', 'layouts/main');

/** Connect db */
const connect = require('./src/app/core/connectDb');
connect.connect()

/** Router */
const router = require('./src/app/routes/index');
router(app);

app.listen(port, () => {
    console.log(`Web at localhost:${port}`);;
})