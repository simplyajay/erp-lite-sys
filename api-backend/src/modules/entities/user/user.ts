import { IProduct } from "../product/product";
import { IDocument } from "../documents/document";

export interface IUser {
  id: number;
  orgId: Number | null;
  products: IProduct[] | null;
  documents: IDocument[] | null;
  username: string;
  firstname: string;
  middlename: string | null;
  lastname: string;
  email: string;
  phone: string | null;
  image: string | null;
  role: string;
}

export interface ICreateUser extends IUser {
  password: string;
}
