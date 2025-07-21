import QueryService from "../../core/services/query.service.js";
import { PrismaClient } from "@prisma/client";
import prisma from "@/config/prisma.config.js";

export default class BaseRepository<T, C = any, U = any> {
  protected readonly model: any;
  constructor(modelAccessor: keyof PrismaClient) {
    this.model = prisma[modelAccessor];
  }

  async create(data: C): Promise<T> {
    try {
      return this.model.create({ data });
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<T | null> {
    try {
      return this.model.findUnique({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  async findUnique(field: string, value: any): Promise<T | null> {
    try {
      return this.model.findUnique({ where: { [field]: value } });
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<T[]> {
    try {
      return this.model.findMany();
    } catch (error) {
      throw error;
    }
  }

  async findByIdentifier(identifier: string): Promise<T | null> {
    try {
      return this.model.findFirst({
        where: {
          OR: [{ email: identifier }, { username: identifier }],
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, data: U): Promise<T> {
    try {
      return this.model.update({ where: { id }, data });
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<T> {
    try {
      return this.model.delete({ where: { id } });
    } catch (error) {
      throw error;
    }
  }
}
