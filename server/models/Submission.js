import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team"
  },

  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  },

  roundId: mongoose.Schema.Types.ObjectId,

  data: {
    type: Map,
    of: String
  }

}, { timestamps: true });

export default mongoose.model("Submission", submissionSchema);