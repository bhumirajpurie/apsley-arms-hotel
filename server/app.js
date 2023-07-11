// const express = require("express");
// const app = express();
// app.use(express.json());

// const mongoose = require("mongoose");

// const mongoURL =
//   "mongodb+srv://Aman:Aman@cluster0.up3sgqa.mongodb.net/?retryWrites=true&w=majority";

// mongoose
//   .connect(mongoURL, { useNewURLParser: true })
//   .then(() => {
//     console.log("database is connected");
//   })
//   .catch((err) => err);

// app.listen(5000, () => {
//   console.log("server starting");
// });

// app.post("/post", async (req, res) => {
//   console.log(req.body);

//   const { data } = req.body;
//   try {
//     if (data === "Aman") {
//       res.send({ status: "ok" });
//     } else {
//       res.send({ status: "name not found" });
//     }
//   } catch (err) {
//     res.send({ status: err });
//   }
// });

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json());

// app.listen(5000, () => {
//   console.log("listening on port");
// });

// const mongoUrl =
//   "mongodb+srv://Aman:Aman@cluster0.up3sgqa.mongodb.net/?retryWrites=true&w=majority";

// mongoose
//   .connect(mongoUrl, { useNewURLParser: true })
//   .then((req, res) => {
//     console.log("databasse is connected ");
//   })
//   .catch((err) => err);

//   require('./userDetails')

//   const User = mongoose.model('UserInfo')

//   app.post('/register',async(req,res)=>{
//     const {name,email,password}=req.body

//     try{await User.create({
//       uname:name,
//       email:email,
//       password:password
//     })
//     res.send({status:"okay"})

//     } catch(err){
//       console.log("Error")
//     }
//   })
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

const mongoUrl =
  "mongodb+srv://Aman:Aman@cluster0.up3sgqa.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, { useNewURLParser: true })
  .then((req, res) => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

require("./userDetails");

const User = mongoose.model("UserInfo");
app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  try {
    await User.create({
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    });
    res.send({ status: "Succesfull" });
  } catch (err) {
    res.send({ status: "ERror" });
    console.log("ERROR");
  }
});
