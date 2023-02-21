import express, { Router } from "express";
import { createInvoice } from "./invoice.controllers";
export const InvoiceRoutes: Router = express.Router();

InvoiceRoutes.post("/createInvoice", createInvoice);
