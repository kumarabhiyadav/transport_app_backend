import { InvoiceModel } from "./Invoice.model";

import { Request, Response } from "express";
import { RideModel } from "../rideModule/ride.model";

export const createInvoice = async (req: any, res: Response) => {
  let {
    invoiceNo,
    customer,
    date,
    source,
    total,
    destination,
    advance,
    rides,
  } = req.body;

  try {
    let rideIds:Array<string> = [];
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
      total,
    });

    rideIds.forEach((ride)=>{
      RideModel.findByIdAndUpdate(ride,{invoiceId:invoice.id});
    })

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

export const fetchInvoices = async (req: any, res: Response) => {
  let { invoiceNo, customer, date, source, destination, advance, rides } =
    req.body;

  try {
    const invoice = await InvoiceModel.find({
      isDeleted: false,
      isActive: true,
    })
      .populate("customer")
      .populate("rides").sort({createdAt:-1});

    if (invoice) {
      res.status(201).json({
        success: true,
        message: "Invoice fetch Successfull",
        result: invoice,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to fetch invoice",
        result: null,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Failed to fetch invoice ",
      error: error,
    });
  }
};
