const models = require("../models");

const db = require(models);

module.exports = function(app) {
// method to get all the workouts data
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })
//method to get all the workouts range
    app.get("/api/workouts/range", ({}, res) => {
      db.Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
    });
//post method to submit a completed workout
    app.post("/api/workouts/", (req, res) => {
        db.Workout.create(req.body).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
          });
      });
//put method to update a workout by id
      app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
          { _id: req.params.id }, { exercises: req.body }
        ).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
    });
};