const express = require('express');

const router = express.Router();
const {environment} = require('./config');
const app = express();
const db = require('./db/models');
const {body, validationResult} = require('express-validator');

const csrf = require("csurf");
const csrfProtection=csrf({cookie: true});

const asyncHandler=handler =>(req, res, next) => handler(req, res, next).catch(next);

router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

router.get('/parks', asyncHandler(async (req, res) => {
    const parks = await db.Park.findAll({order:[['parkName', 'ASC']]});
    res.render('park-list', {title: "Parks", parks});
}))

router.get('/park/:id(\\d+)', asyncHandler(async(req, res) => {
  const id = parseInt(req.params.id, 10);
  const park = await db.Park.findByPk(id);
  res.render('park-detail', { title: 'Park Detail', park });
}));

router.get('/park/add', csrfProtection, (req, res)=>{
    const park = db.Park.build();
    res.render('park-add', {title: 'Add Park', park, csrfToken: req.csrfToken()});
})

const parkValidator = [
    check('parkName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Park Name')
        .isLength({ max: 255})
        .withMessage('Park name must not be more than 255 characters long'),
    check('city')
        .exists({ checkFalsy: true})
        .withMessage('Please provide a value for City')
        .isLength({ max: 100})
        .withMessage('City must not be more than 100 characters long'),
    check('provinceState')
        .exists({ checkFalsy: true})
        .withMessage('Please provide a value for Province/State')
        .isLength({ max: 100})
        .withMessage('Province/State must not be more than 100 characters long'),
    check('country')
        .exists({ checkFalsy: true})
        .withMessage('Please provide a value for Country')
        .isLength({ max: 100})
        .withMessage('Country must not be more than 100 characters long'),
    check('opened')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid date for Opened'),
    check('size')
        .exists({falsyValue: true})
        .withMessage('Please provide a value for Size')
        .isLength({ max: 100})
        .withMessage('Size must not be more than 100 characters long'),
    check('description')
        .exists({falsyValue: true})
        .withMessage('Please provide a value for Description')
]

router.post('/park/add', csrfProtection, parkValidator, asyncHandler(async (req, res)=>{
    const {parkName, city, provinceState, country, opened, size, description} = req.body;
    const park = db.Park.build({parkName, city, provinceState, country, opened, size, description});

    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()){
        await park.save();
        res.redirect('/');
    } else {
        const errors = validatorErrors.array().map((error)=>error.msg);
        res.render('park-add', {
            title: 'Add Park',
            park,
            errors,
            csrfToken: req.csrfToken()
        });
    }

}))


if (environment !== "production") {
    router.get("/error-test", () => {
      throw new Error("This is a test error.");
    });
}

module.exports = router;
