const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const Room = require("../models/room");
const errorHandler = require("../middlewares/error-handler");

exports.postRoom = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessage = errors.array()[0].msg;
    errorHandler(errorMessage, 422);
  }

  if (!req.file) {
    errorHandler("No image provided", 422);
  }

  const name = req.body.name;
  const description = req.body.description;
  const roomType = req.file.roomType;
  const price = req.body.price;
  const image = req.file.path;

  const room = new Room({
    name: name,
    description: description,
    roomType: roomType,
    price: price,
    image: image,
  });

  room
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getRooms = (req, res, next) => {
  Room.find()
    .then((rooms) => {
      if (!rooms) {
        errorHandler("No room added", 404);
      }
      res.status(200).json({ message: "Rooms fetch", rooms: rooms });
    })
    .catch(() => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getRoom = (req, res, next) => {
  const roomId = req.params.roomId;
  Room.findById(roomId)
    .then((room) => {
      if (!room) {
        errorHandler("Could not find room.", 404);
      }
      res.status(200).json({ message: "Room fetch", room: room });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateRoom = (req, res, next) => {
  const roomId = req.params.roomId;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessage = errors.array()[0].msg;
    errorHandler(errorMessage, 422);
  }

  const name = req.body.name;
  const description = req.body.description;
  const roomType = req.file.roomType;
  const price = req.body.price;
  let image = req.body.image;

  if (req.file) {
    image = req.file.path;
  }

  if (!image) {
    errorHandler("No file picked", 422);
  }

  Room.findById(roomId)
    .then((room) => {
      if (!room) {
        errorHandler("Could not find room.", 404);
      }
      if (image !== room.image) {
        clearImage(room.image);
      }
      room.name = name;
      room.description = description;
      room.roomType = roomType;
      room.price = price;
      room.image = image;

      return room.save();
    })
    .then((room) => {
      res.status(200).json({ message: "Room updated.", room: room });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

const clearImage = (filePath) => {
  filePath = path.join(__dirname, "..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};

exports.deleteRoom = (req, res, next) => {
  const roomId = req.params.roomId;
  Room.findById(roomId)
    .then((room) => {
      if (!room) {
        errorHandler("Could not find room.", 404);
      }

      clearImage(room.image);
      return Room.findByIdAndRemove(roomId);
    })
    .then((result) => {
      console.log(result);
      res.status(200).json({ messge: "Product deleted." });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
