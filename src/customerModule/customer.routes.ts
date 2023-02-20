import express, { Router } from "express";
import {
  createCustomer,
  fetchCustomers,
  searchCustomer,
} from "./customer.controllers";
export const CustomerRoutes: Router = express.Router();

CustomerRoutes.post("/createCustomer", createCustomer);
CustomerRoutes.post("/fetchCustomers", fetchCustomers);
CustomerRoutes.post("/searchCustomer", searchCustomer);
