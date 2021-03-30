const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseToObject(course)
                });
            })
            .catch(next);
    }

    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course)
                });
            })
            .catch(next);
    }

    //[POST] /courses/store
    store(req, res, next) {
        const course = new Course(req.body);
        course
            .save()
            .then((data) => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new CourseController();
