const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (_req, res) => {
  Workout.find().then(workouts => res.json(workouts)).catch(err => res.status(500, res.json(err)));
});

router.get("/api/workouts/range", (_req, res) => {
  Workout.find().then(workouts => res.json(workouts)).catch(err => res.status(500, res.json(err)));
});

router.post("/api/workouts", (req, res) => {
  Workout.create({
    day: new Date(),
    exercises: []
  }).then(workout => res.json(workout)).catch(err => res.status(500, res.json(err)));
})

router.put("/api/workouts/:id", (req, res) => {
  Workout.findById(req.params.id).then(workout => {
    workout.exercises.push(req.body)
    workout.save()
    res.json(workout)
  }).catch(err => res.status(500, res.json(err)));
});

module.exports = router;
