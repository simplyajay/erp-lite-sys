import { IDocumentProduct } from "../product/product";

export interface IDocument {
  id: number;
  ownerId: number;
  organizationId: number | null;
  documentType: string;
  documentStatus: string;
  paymentStatus: string;
  products: IDocumentProduct[];
  date: Date;
  dueDate: Date;
  vatAmount: number;
  vatRate: number;
  amountBeforeVat: number;
  amountAfterVat: number;
  taxWithheldAmount: number | null;
  withholdingTaxRate: number | null;
  withholdingTaxAmount: number | null;
  note: string | null;
  memorandum: string | null;
}
