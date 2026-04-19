import mongoose from "mongoose";

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
  },
  {
    timestamps: true,
  },
);
userSchema.pre("save", function saveAvatar(next) {
  const user = this;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hassehPassword = bcrypt.hash(user.password, salt);
  user.password = hassehPassword;
  user.avatar = ` https://robohash.org/${user.username}`;
  next();
})
const User = mongoose.model("User", userSchema);
export default User;
