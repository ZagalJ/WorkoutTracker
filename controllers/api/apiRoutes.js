const router = require("express").Router();
const db = require("../../models");

router.get("/", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((getWorkout) => {
      res.json(getWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// method to get all the workouts data
  router.get("workouts/", (req, res) => {
      db.Workout.findAll({}).then(dbWorkout => {
          res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err);
      });
  })
//method to get all the workouts range
  router.get("/range", ({}, res) => {
    db.Workout.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });
//post method to submit a completed workout
    router.post("/", (req, res) => {
        db.Workout.create(req.body).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
          });
      });
//put method to update a workout by id
      router.put("/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
          { _id: req.params.id }, { exercises: req.body }
        ).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
    });

module.exports = router;
