import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  teamName: String,

  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  },

  leader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  members: [
    {
      name: String,
      email: String,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
      },
      isVerified: {
        type: Boolean,
        default: false
      }
    }
  ]

}, { timestamps: true });

export default mongoose.model("Team", teamSchema);