import mongoose from "mongoose"

const liveClassSchema = new mongoose.Schema(
  {
    liveName: {
      type: String,
      required: [true, "Please provide a live class name"],
      trim: true,
    },
    instructor:{
        type: String,
        required: true
    },
    instructorId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Live class must have an instructor"],
    },
    startTime: {
      type: Date,
      required: [true, "Please provide start time"],
    },
    endTime: {
      type: Date,
      required: [true, "Please provide end time"],
    },
    image: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
)

const liveClassModel = mongoose.model("LiveClass",liveClassSchema)

export default liveClassModel;
