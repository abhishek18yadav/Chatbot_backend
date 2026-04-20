import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

   email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (email) {
            return String(email)
                .toLowerCase()
                .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            },
            message: "Please enter a valid email address",
        }
    },

    password: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default: "",
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);
userSchema.pre("save", async function () {
  const user = this;

  if (user.isModified("password")) {
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds);
  }

  if (user.isModified("name") || user.isModified("email")) {
    user.avatar = `https://robohash.org{user.name || user.email}`;
  }
});
const User = mongoose.model("User", userSchema);
export default User;
