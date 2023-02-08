import express from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { RideRoutes } from "./rideModule/ride.routes";

const app = express();


app.use("/auth", AuthRoutes);
app.use("/ride", RideRoutes);




module.exports = app;
