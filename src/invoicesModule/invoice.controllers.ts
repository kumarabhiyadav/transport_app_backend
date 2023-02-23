import { InvoiceModel } from "./Invoice.model";

import { Request, Response } from "express";
import { RideModel } from "../rideModule/ride.model";

export const createInvoice = async (req: any, res: Response) => {
  let { invoiceNo, customer, date, source, destination, advance, rides } =
    req.body;

  try {
    let rideIds = [];
    for await (const ride of JSON.parse(rides)) {
      let insertedRide = await RideModel.create({
        truckNumber: ride.truckNumber,
        lrNo: ride.lrNo,
        date: ride.date,
        particular: ride.particular,
        quantity: ride.quantity,
        rate: ride.rate,
        detention: ride.detention,
        customer: customer,
        source: ride.source,
        destination: ride.destination,
      });
      if (insertedRide) {
        rideIds.push(insertedRide.id);
      }
    }

    const invoice = await InvoiceModel.create({
      invoiceNo,
      customer,
      date,
      source,
      destination,
      advance,
      rides: rideIds,
    });

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
