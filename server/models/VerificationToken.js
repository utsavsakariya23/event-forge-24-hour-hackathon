import mongoose from "mongoose";

const verificationTokenSchema = new mongoose.Schema({
  email: String,
  token: String,
  type: String, // USER_VERIFY / TEAM_INVITE
  expiresAt: Date
});

export default mongoose.model("VerificationToken", verificationTokenSchema);