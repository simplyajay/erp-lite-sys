-- AlterTable
ALTER TABLE "business_entities" ADD COLUMN     "organizationId" INTEGER;

-- AlterTable
ALTER TABLE "documents" ADD COLUMN     "organizationId" INTEGER;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "organizationId" INTEGER;

-- AddForeignKey
ALTER TABLE "business_entities" ADD CONSTRAINT "business_entities_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
