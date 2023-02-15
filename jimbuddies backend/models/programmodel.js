const mongoose=require('mongoose');

const programSchema = mongoose.Schema({
  programName: {
    type: String,
    required: true,
  },
  excersises: [{
    excersiseName: {
      type: String,
      required: true,
    },
    excersiseNotes: {
      type: String,
    },
    excersiseSetDetails: [{
      excersiseSets: {
        type: Number,
        required: true
      },
      excersiseReps: {
        type: Number,
        required: true
      },
      excersiseWeights: {
        type: Number,
        required: true
      },  
    }],
  }],
  programNotes: {
    type: String,
  },
  
})

module.exports = mongoose.model("Program",programSchema)

