import express, { Router } from "express";
import { createInvoice,fetchInvoices } from "./invoice.controllers";
export const InvoiceRoutes: Router = express.Router();

InvoiceRoutes.post("/createInvoice", createInvoice);
InvoiceRoutes.post("/fetchInvoices", fetchInvoices);

