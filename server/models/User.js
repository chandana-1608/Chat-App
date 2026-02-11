import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true, minlength: 6 },
    profilePic: { type: String, default: "" },
    bio: { type: String },
  },
  { timestams: true }
); //when the user was created ,it will add the date and time automatically

//Creating user model -- so we can use it in other files
const User = mongoose.model("User", userSchema);
export default User;
