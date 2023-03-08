import { Request, Response } from "express";
import { RideModel } from "../rideModule/ride.model";

export const createRide = async (req: Request, res: Response) => {
  let {
    truckNumber,
    lrNo,
    date,
    particular,
    quantity,
    rate,
    detention,
    customer,
    source,
    destination
  } = req.body;

  try {
    const ride = await RideModel.create({
      truckNumber,
      lrNo,
      date,
      particular,
      quantity,
      rate,
      detention,
      customer,
      source,
      destination
    });

    if (ride) {
      res.status(201).json({
        success: true,
        message: "Ride Create Successfull",
        result: ride,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to create",
        result: null,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Failed to create",
      error: error,
    });
  }
};

export const updateRide = async (req: any, res: Response) => {
  let {
    rideId,
    truckNumber,
    lrNo,
    date,
    particular,
    quantity,
    rate,
    detention,
    customer,
  } = req.body;

  try {
    const ride = await RideModel.findByIdAndUpdate(rideId, {
      truckNumber,
      lrNo,
      date,
      particular,
      quantity,
      rate,
      detention,
      customer,
    });

    if (ride) {
      res.status(201).json({
        success: true,
        message: "Ride update Successfull",
        result: ride,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to update",
        result: null,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Failed to update",
      error: error,
    });
  }
};

export const deleteRide = async (req: any, res: Response) => {
  let { rideId } = req.body;

  try {
    const ride = await RideModel.findByIdAndUpdate(rideId, {
      isDeleted: true,
    });

    if (ride) {
      res.status(201).json({
        success: true,
        message: "Ride deleted Successfull",
        result: ride,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to deleted",
        result: null,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Failed to deleted",
      error: error,
    });
  }
};

export const toggleActiveStatus = async (req: any, res: Response) => {
  let { rideId, activeStatus } = req.body;

  try {
    const ride = await RideModel.findByIdAndUpdate(rideId, {
      isActive: activeStatus,
    });

    if (ride) {
      res.status(201).json({
        success: true,
        message: "Ride update Successfull",
        result: ride,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to update",
        result: null,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Failed to update",
      error: error,
    });
  }
};

export const fetchRides = async (req: any, res: Response) => {
  try {
    const ride = await RideModel.find({
      isDeleted: true,
    });

    if (ride) {
      res.status(201).json({
        success: true,
        message: "Ride update Successfull",
        result: ride,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to update",
        result: null,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Failed to update",
      error: error,
    });
  }
};
