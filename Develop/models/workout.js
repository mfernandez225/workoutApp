const mongoose = require("mongoose");
const _ = require('lodash');

const {
  Schema
} = mongoose;

const exerciseSchema = new Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number,
})

const workoutSchema = new Schema({
  day: Date,
  exercises: [exerciseSchema]
})

workoutSchema.virtual("totalDuration").get(function () {
  return _.sumBy(this.exercises, "duration")
});

workoutSchema.set("toJSON", {
  getters: true
});

const Workout = mongoose.model(`Workout`, workoutSchema);

module.exports = Workout;
