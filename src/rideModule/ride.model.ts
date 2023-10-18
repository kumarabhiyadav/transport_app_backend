import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Customer } from "src/customerModule/Customer.model";
import { Invoice } from "src/invoicesModule/Invoice.model";

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

  @prop({ref: () => Customer})
  customer: Ref<Customer>;;

  @prop({})
  source: string;

  
  @prop({})
  destination: string;

  @prop({ref: () => Invoice})
  invoiceId: Ref<Invoice>;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const RideModel = getModelForClass(Ride, {
  schemaOptions: { timestamps: true },
});
