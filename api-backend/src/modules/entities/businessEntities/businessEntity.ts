import { IDocument } from "../documents/document";
import { IOrganization } from "../organization/organization";
import { IUser } from "../user/user";

type EntityType = "Supplier" | "Customer";

export interface IBusinessEntity {
  id: string;
  type: EntityType;
  ownerId: number;
  owner: IUser;
  organizationId: IOrganization | null;
  documents: IDocument | null;
  name: string;
  trn: string;
  description: string | null;
  note: string | null;
  defaultMarkup: number;
  standardMarkup: number;
  website: string | null;
  street1: string | null;
  street2: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zip: string | null;
  contactTitle: string | null;
  contactFirstName: string | null;
  contactMiddleName: string | null;
  contactLastName: string | null;
  contactEmail: string | null;
  creditLimit: number;
  openBalance: number;
  totalOverdue: number;
  image: string | null;
}
