import { getModelForClass, prop, Ref } from "@typegoose/typegoose";

export enum CustomerType {}

export class Customer {
  @prop({ trim: true })
  customerName: string;

  @prop({ trim: true })
  companyName: string;


  @prop({ trim: true })
  email: string;

  @prop({ trim: true })
  phone: string;


  @prop({ trim: true })
  address: string;



  @prop({ trim: true })
  receivables: number;

  @prop({ trim: true })
  credit: number;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const CustomerModel = getModelForClass(Customer, {
  schemaOptions: { timestamps: true },
});
