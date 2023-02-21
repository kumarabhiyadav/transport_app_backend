import { InvoiceModel } from "./Invoice.model";

import { Request, Response } from "express";

export const createInvoice = async (req: any, res: Response) => {
  let { 
    invoiceNo,
     customer,
      date,
       source,
       destination,
        advance,
         rides
         } =
    req.body;

  try {
    for await (const ride of rides) {
    }

    const invoice = await InvoiceModel.create({});

    if (invoice) {
      res.status(201).json({
        success: true,
        message: "Invoice created Successfull",
        result: invoice,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to create invoice",
        result: null,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Failed to create invoice ",
      error: error,
    });
  }
};
