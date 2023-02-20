import { getModelForClass, prop, Ref } from "@typegoose/typegoose";

export enum CustomerType {}

export class Ride {
  @prop({ trim: true })
  truckNumber: string;

  @prop({ trim: true })
  lrNo: string;

  @prop({})
  date: Date;

  @prop({})
  particular: string;

  @prop({})
  quantity: number;

  @prop({})
  rate: number;

  @prop({ default: 0 })
  detention: number;

  @prop({})
  customer: string;

  @prop({})
  source: string;

  
  @prop({})
  destination: string;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const RideModel = getModelForClass(Ride, {
  schemaOptions: { timestamps: true },
});
