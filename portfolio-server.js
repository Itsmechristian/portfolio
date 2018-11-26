'use strict';

/**
 * @license LICENSE
 * @description This server is for itsmechristian.co.uk 
 * @copyright 2019 All Rights Reserved
 * @author Sijey
 * 
 */

//  Requires
const express = require('express');
const app = express();

/**
 *
 * @link https://github.com/ericf/express-handlebars 
 * @desc A Handlebars view engine for Express which doesn't suck.
 * 
 */
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/**
 * Include public directory
 */
app.use(express.static(__dirname + '/public'));
 
/**
 * Server PORT
 */
const port = 8000;


/** 
 * Common Variables in HTML
*/
app.use((req, res, next) => {
    // Title of the website
    res.locals.title = 'Itsmechristian';

    // Description of the website
    res.locals.description = 'Full-Stack Developer';

    // Charset of the website
    res.locals.charset = 'UTF-8';

    // Language of the website
    res.locals.lang = 'en-GB';

    next();
})

/** 
 * @GET path '/'
*/
app.get('/', (req, res) => {

    // Rendering home.handlebars
    res.render('templates/home');
})

/**
 * listen to the server
 */
if(process.env.NODE_ENV === 'development') {
    app.listen(port, () => console.log(`Server Started on port ${port}`));
}
else {
    app.listen(port);
}