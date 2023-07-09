const { Schema, model } = require("mongoose");

const roomSchema = Schema({
  name: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },
  roomType: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

module.exports = model("Room", roomSchema);
