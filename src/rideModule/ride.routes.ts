import express, { Router } from "express";
import {
  createRide,
  updateRide,
  deleteRide,
  toggleActiveStatus,
  fetchRides,
} from "./ride.controllers";
export const RideRoutes: Router = express.Router();

RideRoutes.post("/createRide", createRide);
RideRoutes.post("/updateRide", updateRide);
RideRoutes.post("/deleteRide", deleteRide);
RideRoutes.post("/toggleActiveStatus", toggleActiveStatus);
RideRoutes.post("/fetchRides", fetchRides);

