import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Customer } from "../customerModule/Customer.model";
import { Ride } from "../rideModule/ride.model";


export class Invoice {
  @prop({ ref: () => Customer })
  // customer: Ref<Customer>;
  customer : string;

  @prop()
  invoiceNo: string;

  @prop()
  date: string;

  @prop()
  source: string;

  @prop()
  destination: string;

  @prop()
  total: number;

  @prop()
  advance: number;

  @prop({ ref: Ride })
  rides?: Ref<Ride>[];

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const InvoiceModel = getModelForClass(Invoice, {
  schemaOptions: { timestamps: true },
});
