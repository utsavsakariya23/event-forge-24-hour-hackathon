import mongoose from "mongoose";

const roundResultSchema = new mongoose.Schema({
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team"
  },

  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  },

  roundId: mongoose.Schema.Types.ObjectId,

  totalScore: Number,
  rank: Number,

  isQualified: Boolean

}, { timestamps: true });

export default mongoose.model("RoundResult", roundResultSchema);