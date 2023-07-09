const express = require("express");

const roomController = require("../controllers/room");
const upload = require("../middlewares/multer");

const router = express.Router();

router.post("/room", upload.single("image"), roomController.postRoom);

router.get("/rooms", roomController.getRooms);

router.get("/room/:roomId", roomController.getRoom);

router.put("/room/:roomId", upload.single("image"), roomController.updateRoom);

router.delete("/room/:roomId", roomController.deleteRoom);

module.exports = router;
