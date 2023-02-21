"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("./auth/auth.routes");
const customer_routes_1 = require("./customerModule/customer.routes");
const invoice_routes_1 = require("./invoicesModule/invoice.routes");
const ride_routes_1 = require("./rideModule/ride.routes");
const app = (0, express_1.default)();
app.use("/auth", auth_routes_1.AuthRoutes);
app.use("/ride", ride_routes_1.RideRoutes);
app.use("/customer", customer_routes_1.CustomerRoutes);
app.use("/invoice", invoice_routes_1.InvoiceRoutes);
module.exports = app;
