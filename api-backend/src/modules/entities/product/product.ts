export interface IProduct {
  id: number;
  ownerId: number;
  organizationId: number | null;
  name: string;
  sku: string;
  barcode: string;
  description: string | null;
  unitOfMeasurement: string;
  quantity: number;
}

export interface IDocumentProduct {
  id: number;
  name: string;
  sku: string;
  barcode: string;
  description: string | null;
  costPrice: number;
  sellingPrice: number;
  unitOfMeasurement: string;
  quantity: number;
}
