import { IDocument } from "../documents/document";
import { IProduct } from "../product/product";
import { IUser } from "../user/user";
import { IBusinessEntity } from "../businessEntities/businessEntity";

export interface IOrganization {
  id: number;
  users: IUser[]; // must have atleast one user,
  products: IProduct[] | null;
  businessEntities: IBusinessEntity[] | null;
  documents: IDocument[] | null;
  name: string;
  street1: string | null;
  street2: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zip: string | null;
  phone: string;
  email: string;
  image: string | null;
}
