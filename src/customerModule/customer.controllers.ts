import { Request, Response } from "express";
import { CustomerModel } from "./Customer.model";

export const createCustomer = async (req: any, res: Response) => {
  let { customerName, companyName, phone, email,address } = req.body;
  try {
    const customer = await CustomerModel.create({
      companyName,
      customerName,
      phone,
      email,
      address
    });

    if (customer) {
      res.status(201).json({
        success: true,
        message: "Customer Created Successfull",
        result: customer,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to create customer",
        result: null,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Failed to create customer",
      error: error,
    });
  }
};

export const fetchCustomers = async (req: any, res: Response) => {
  try {
    const customer = await CustomerModel.find({
      isActive: true,
      isDeleted: false,
    });

    if (customer) {
      res.status(201).json({
        success: true,
        message: "Customer fetched Successfull",
        result: customer,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to fetch customer",
        result: null,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Failed to fetch customer",
      error: error,
    });
  }
};

export const searchCustomer = async (req: any, res: Response) => {
  let { query } = req.body;
  try {
    const customer = await CustomerModel.find({
      $or: [
        { companyName: { $regex: query } },
        { customerName: { $regex: query } },
      ],
    });

    if (customer) {
      res.status(201).json({
        success: true,
        message: "searched",
        result: customer,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to search",
        result: null,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Failed to search",
      error: error,
    });
  }
};
