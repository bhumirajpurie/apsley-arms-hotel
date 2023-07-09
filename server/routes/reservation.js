const express = require("express");
const { body } = require("express-validator");

const isAuth = require("../middlewares/is-auth");

const reservationController = require("../controllers/reservation");

const router = express.Router();

router.post("/reservation", reservationController.postReservation);

router.get("/reservations", reservationController.getReservations);

router.get("/reservation/:reservationId", reservationController.getReservation);

router.put(
  "/reservation/:reservationId",
  reservationController.updateReservation
);

router.delete(
  "/reservation/:reservationId",
  reservationController.deleteReservation
);

module.exports = router;
