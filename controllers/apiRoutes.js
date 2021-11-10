const router = require("express").Router();
const { Workout } = require("../models");


  //Get workouts
  router.get("/workouts", function (req, res) {
    Workout.find({}).then(function (result) {
      res.json(result);
    });
  });
  
  //Get workouts range
  router.get("/workouts/range", function (req, res) {
    Workout.find({}).then(function (result) {
      res.json(result);
    });
  });

  //Create workout
  router.post("/workouts", function (req, res) {
    Workout.create({
      day: new Date().setDate(new Date().getDate()),
      exercises: [],
    }).then(function (result) {
      
      res.json(result);
    });
  });

  //Update workout by id
  router.put("/workouts/:id", function (req, res) {
    var newExercise = req.body;
    Workout.updateOne(
      { _id: req.params.id },
      { $push: { exercises: newExercise } }
    ).then(function (result) {
      return res.json(result);
    });
  });
  module.exports = router;