const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

const visitValidators = [
  check('visitedOn')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Visited On')
    .isISO8601()
    .withMessage('Please provide a valid date for Visited On'),
  check('rating')
    .isInt({ min: 0, max: 5 })
    .withMessage('Please provide a number between 1 and 5 for Rating'),
];

router.get('/attraction/:attractionId(\\d+)/visit/add', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const attractionId = parseInt(req.params.attractionId, 10);
    const attraction = await db.Attraction.findByPk(attractionId, { include: ['park'] });
    const visit = db.AttractionVisit.build();
    res.render('visit-add', {
      title: 'Add Visit',
      attraction,
      visit,
      csrfToken: req.csrfToken(),
    });
  }));

router.post('/attraction/:attractionId(\\d+)/visit/add', requireAuth, csrfProtection, visitValidators,
  asyncHandler(async (req, res) => {
    const attractionId = parseInt(req.params.attractionId, 10);
    const attraction = await db.Attraction.findByPk(attractionId, { include: ['park'] });

    const {
      visitedOn,
      rating,
      comments,
    } = req.body;

    const visit = db.AttractionVisit.build({
      userId: res.locals.user.id,
      attractionId,
      visitedOn,
      rating,
      comments,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await visit.save();
      res.redirect(`/attraction/${attractionId}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('visit-add', {
        title: 'Add Visit',
        attraction,
        visit,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));


router.get('/visit/edit/:id(\\d+)', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const visitId = parseInt(req.params.id, 10);
    const visit = await db.AttractionVisit.findByPk(visitId, { include: ['attraction', 'user'] });
    res.render('visit-edit', {
      title: 'Edit Visit',
      currentUserId: res.locals.user.id,
      attraction: visit.attraction,
      user: visit.user,
      visit,
      csrfToken: req.csrfToken(),
    });
}));


router.post('/visit/edit/:id(\\d+)', requireAuth, visitValidators,
  asyncHandler(async (req, res) => {
    const visitId = parseInt(req.params.id, 10);
    const visitToUpdate = await db.AttractionVisit.findByPk(visitId, { include: ['attraction', 'user'] });

    const {
      visitedOn,
      rating,
      comments
    } = req.body;

    const visit = {
      visitedOn,
      rating,
      comments
    };

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await visitToUpdate.update(visit);
      res.redirect(`/attraction/${visitToUpdate.attractionId}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('visit-edit', {
        title: 'Edit Visit',
        attraction: visitToUpdate.attraction,
        user: visitToUpdate.user,
        visit: { ...visit, id: visitId },
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));



router.get('/visit/delete/:id(\\d+)', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const visitId = parseInt(req.params.id, 10);
    const visit = await db.AttractionVisit.findByPk(visitId, { include: ['attraction', 'user'] });
    res.render('visit-delete', {
      title: 'Delete Visit',
      visit,
      csrfToken: req.csrfToken(),
    });
}));

router.post('/visit/delete/:id(\\d+)', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const visitId = parseInt(req.params.id, 10);
    const visit = await db.AttractionVisit.findByPk(visitId);
    await visit.destroy();
    res.redirect(`/attraction/${visit.attractionId}`);
  }));


module.exports = router;
