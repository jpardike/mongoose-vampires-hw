const mongoose = require("mongoose");

const vampireSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hair_color: {
    type: String,
    default: 'blonde',
  },
  eye_color: String,
  dob: Date,
  loves: [String],
  location: String,
  gender: String,
  victims: {
    type: Number,
    min: 0,
  },
}, {timestamps: true});


const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;