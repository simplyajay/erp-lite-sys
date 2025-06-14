-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('Owner', 'Admin', 'User');

-- CreateEnum
CREATE TYPE "EntityStatus" AS ENUM ('Active', 'Inactive');

-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('Supplier', 'Customer');

-- CreateEnum
CREATE TYPE "Measurements" AS ENUM ('EA', 'PK', 'CTN', 'BX', 'GAL');

-- CreateEnum
CREATE TYPE "DocumentTypes" AS ENUM ('PurchaseOrder', 'SalesOrder', 'Invoice', 'Bill', 'ReturnOrder', 'CreditNote', 'Quotation');

-- CreateEnum
CREATE TYPE "DocumentStatus" AS ENUM ('Complete', 'Pending', 'Cancelled', 'Rejected', 'Accepted');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Paid', 'PartiallyPaid', 'Overdue', 'Open', 'NotApplicable');

-- CreateTable
CREATE TABLE "organizations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "street1" TEXT,
    "street2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "zip" TEXT,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "orgId" INTEGER,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "middlename" TEXT,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "image" TEXT,
    "role" "Roles" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_entities" (
    "id" SERIAL NOT NULL,
    "type" "EntityType" NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "trn" TEXT NOT NULL,
    "description" TEXT,
    "note" TEXT,
    "defaultMarkup" DECIMAL(65,30),
    "standardMarkup" DECIMAL(65,30),
    "website" TEXT,
    "street1" TEXT,
    "street2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "zip" TEXT,
    "contactTitle" TEXT,
    "contactFirstName" TEXT,
    "contactMiddleName" TEXT,
    "contactLastName" TEXT,
    "contactPhone" TEXT,
    "contactEmail" TEXT,
    "creditLimit" DECIMAL(65,30) NOT NULL,
    "openBalance" DECIMAL(65,30) NOT NULL,
    "totalOverdue" DECIMAL(65,30) NOT NULL,
    "status" "EntityStatus" NOT NULL DEFAULT 'Active',
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "business_entities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "description" TEXT,
    "costPrice" DECIMAL(65,30) NOT NULL,
    "unitOfMeasurement" "Measurements" NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "businessEntityId" INTEGER NOT NULL,
    "documentCode" TEXT NOT NULL,
    "documentType" "DocumentTypes" NOT NULL,
    "documentStatus" "DocumentStatus" NOT NULL,
    "paymentStatus" "PaymentStatus" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "vatAmount" DECIMAL(65,30) NOT NULL,
    "vatRate" DECIMAL(65,30) NOT NULL,
    "amountBeforeVat" DECIMAL(65,30) NOT NULL,
    "amountAfterVat" DECIMAL(65,30) NOT NULL,
    "taxWithheldAmount" DECIMAL(65,30),
    "withHoldingTaxRate" DECIMAL(65,30),
    "withHoldingTaxAmount" DECIMAL(65,30),
    "note" TEXT,
    "memorandum" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_products" (
    "id" SERIAL NOT NULL,
    "documentId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "description" TEXT,
    "sellingPrice" DECIMAL(65,30) NOT NULL,
    "unitOfMeasurement" "Measurements" NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "document_products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "organizations_phone_key" ON "organizations"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_email_key" ON "organizations"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE INDEX "users_orgId_idx" ON "users"("orgId");

-- CreateIndex
CREATE UNIQUE INDEX "business_entities_trn_key" ON "business_entities"("trn");

-- CreateIndex
CREATE INDEX "business_entities_ownerId_idx" ON "business_entities"("ownerId");

-- CreateIndex
CREATE INDEX "business_entities_trn_idx" ON "business_entities"("trn");

-- CreateIndex
CREATE INDEX "business_entities_name_idx" ON "business_entities"("name");

-- CreateIndex
CREATE INDEX "business_entities_totalOverdue_idx" ON "business_entities"("totalOverdue");

-- CreateIndex
CREATE INDEX "business_entities_openBalance_idx" ON "business_entities"("openBalance");

-- CreateIndex
CREATE UNIQUE INDEX "products_sku_key" ON "products"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "products_barcode_key" ON "products"("barcode");

-- CreateIndex
CREATE INDEX "products_ownerId_idx" ON "products"("ownerId");

-- CreateIndex
CREATE INDEX "products_unitOfMeasurement_idx" ON "products"("unitOfMeasurement");

-- CreateIndex
CREATE INDEX "products_name_idx" ON "products"("name");

-- CreateIndex
CREATE INDEX "products_barcode_idx" ON "products"("barcode");

-- CreateIndex
CREATE INDEX "products_sku_idx" ON "products"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "documents_documentCode_key" ON "documents"("documentCode");

-- CreateIndex
CREATE INDEX "documents_ownerId_idx" ON "documents"("ownerId");

-- CreateIndex
CREATE INDEX "documents_businessEntityId_idx" ON "documents"("businessEntityId");

-- CreateIndex
CREATE INDEX "documents_paymentStatus_idx" ON "documents"("paymentStatus");

-- CreateIndex
CREATE INDEX "documents_documentStatus_idx" ON "documents"("documentStatus");

-- CreateIndex
CREATE INDEX "documents_documentCode_idx" ON "documents"("documentCode");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_entities" ADD CONSTRAINT "business_entities_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_businessEntityId_fkey" FOREIGN KEY ("businessEntityId") REFERENCES "business_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_products" ADD CONSTRAINT "document_products_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "documents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_products" ADD CONSTRAINT "document_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
