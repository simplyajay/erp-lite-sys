import ModelRepository from "../../repositories/base.repository.js";
import BaseRepository from "../../repositories/base.repository.js";
import { formatFormError } from "../../../core/utils/formErrors.util.js";
import { IDocumentProduct, IProduct } from "./product.js";
import { DocumentProduct, Product } from "@prisma/client";
import { Request } from "express";

class ProductService {
  private readonly productRepo = new BaseRepository<Product, IProduct>("product");

  async new(
    req: Request<any, any, Omit<IProduct, "ownerId" | "organizationId">>
  ): Promise<IProduct> {
    const ownerId = req.user._id;
    const organizationId = req.user._orgId ?? null;
    const product = req.body;
    const newProduct = { ...product, ownerId, organizationId };
    const res = await this.productRepo.create(newProduct);
    const createdProduct = toIProduct(res);
    return createdProduct;
  }

  async findAllProducts(req) {
    const _ownerId = req?.user?._orgId || req?.user?._id;
    const target = { _ownerId };
    let queryParams = req.query;
    const searchableFields = ["name", "description", "sku"];
    return await this.productRepository.findAllWithFilter(target, queryParams, searchableFields);
  }

  async updateProductById(req) {
    try {
      const { id } = req?.params;
      return await this.productRepository.updateById(id, req.body, { returnOriginal: false });
    } catch (error) {
      if (error.code === 11000) {
        return { error };
      } else {
        throw error;
      }
    }
  }

  async deleteProductById(req) {
    const { id } = req.params;
    return await this.productRepository.deleteById(id);
  }
}

// convert Product ( PrismaModel ) to match my Interface structure
export const toIProduct = (product: Product): IProduct => {
  return {
    id: product.id,
    ownerId: product.ownerId,
    organizationId: product.organizationId ?? null,
    name: product.name,
    sku: product.sku,
    barcode: product.barcode,
    description: product.description ?? null,
    unitOfMeasurement: product.unitOfMeasurement,
    quantity: product.quantity.toNumber(),
  };
};

export const toIDocumentProduct = (product: DocumentProduct): IDocumentProduct => {
  return {
    id: product.id,
    name: product.name,
    sku: product.sku,
    barcode: product.barcode,
    description: product.description ?? null,
    costPrice: product.costPrice.toNumber(),
    sellingPrice: product.sellingPrice.toNumber(),
    unitOfMeasurement: product.unitOfMeasurement,
    quantity: product.quantity.toNumber(),
  };
};

export default new ProductService();
