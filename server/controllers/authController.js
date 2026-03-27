import User from "../models/User.js";
import VerificationToken from "../models/VerificationToken.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { sendEmail } from "../utils/sendEmail.js";

// REGISTER API
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      isEmailVerified: false
    });

    const token = crypto.randomBytes(32).toString("hex");

    await VerificationToken.create({
      email,
      token,
      type: "USER_VERIFY",
      expiresAt: Date.now() + 1000 * 60 * 60
    });

    const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

    await sendEmail(
      email,
      "Verify Your Email",
      `<a href="${verificationLink}">Verify Email</a>`
    );

    res.status(201).json({
      message: "User registered. Please verify your email."
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// VERIFY EMAIL API
export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    const tokenDoc = await VerificationToken.findOne({
      token,
      type: "USER_VERIFY"
    });

    if (!tokenDoc) {
      return res.status(400).json({ message: "Invalid token" });
    }

    if (tokenDoc.expiresAt < Date.now()) {
      return res.status(400).json({ message: "Token expired" });
    }

    await User.updateOne(
      { email: tokenDoc.email },
      { isEmailVerified: true }
    );

    await VerificationToken.deleteOne({ _id: tokenDoc._id });

    res.json({ message: "Email verified successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};