/*
  Warnings:

  - A unique constraint covering the columns `[ownerId,name]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ownerId,barcode]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ownerId,sku]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "products_barcode_idx";

-- DropIndex
DROP INDEX "products_barcode_key";

-- DropIndex
DROP INDEX "products_name_idx";

-- DropIndex
DROP INDEX "products_sku_idx";

-- DropIndex
DROP INDEX "products_sku_key";

-- DropIndex
DROP INDEX "products_unitOfMeasurement_idx";

-- CreateIndex
CREATE UNIQUE INDEX "products_ownerId_name_key" ON "products"("ownerId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "products_ownerId_barcode_key" ON "products"("ownerId", "barcode");

-- CreateIndex
CREATE UNIQUE INDEX "products_ownerId_sku_key" ON "products"("ownerId", "sku");
