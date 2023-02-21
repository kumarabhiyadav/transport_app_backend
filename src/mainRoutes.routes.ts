import express from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { CustomerRoutes } from "./customerModule/customer.routes";
import { InvoiceRoutes } from "./invoicesModule/invoice.routes";
import { RideRoutes } from "./rideModule/ride.routes";

const app = express();


app.use("/auth", AuthRoutes);
app.use("/ride", RideRoutes);
app.use("/customer", CustomerRoutes);
app.use("/invoice", InvoiceRoutes);






module.exports = app;
