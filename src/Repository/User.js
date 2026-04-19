import crudRepository from "./crudRepository.js";
import User from "../Schema/User.js";
const userRepository = {
  ...crudRepository(User),

  getByEmail: async function (email) {
    const user = await User.findOne({ email });
    return user;
  },
  getByUsername: async function (username) {
    const user = await User.findOne({ username }).select("-password");
    return user;
  },
  // it already cntain create , find , find all , update , delete
};
export default userRepository;
