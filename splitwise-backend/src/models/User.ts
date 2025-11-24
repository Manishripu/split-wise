import { Schema, model, Document } from "mongoose";
import mongoose from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true, required: true },
  passwordHash: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
