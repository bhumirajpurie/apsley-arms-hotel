// const mongoose = require("mongoose");

// const UserDetailsSchema = mongoose.Schema(
//   {
//     uname: String,
//     email: String,
//     password: String,
//   },
//   {
//     collection: UserInfo,
//   }
// );
// mongoose.model("UserInfo",UserDetailsSchema)

const mongoose = require("mongoose");

const UserDetailsSchema = mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: String,
    password: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsSchema);
