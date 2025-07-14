/*
  Warnings:

  - Made the column `costPrice` on table `document_products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sellingPrice` on table `document_products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "document_products" ALTER COLUMN "costPrice" SET NOT NULL,
ALTER COLUMN "sellingPrice" SET NOT NULL;
