const Course = require('../models/Course');
const { multileMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /
    home(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multileMongooseToObject(courses)
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
