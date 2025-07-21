import BaseRepository from "../../repositories/base.repository.js";
import { Request } from "express";
import { Organization, Prisma } from "@prisma/client";
import { IServiceResponse } from "@/core/services/services.js";

export default class OrganizationService extends BaseRepository<
  Organization,
  Prisma.OrganizationCreateInput,
  Prisma.OrganizationUpdateInput
> {
  constructor() {
    super("organization");
  }

  async register(
    req: Request<any, any, Prisma.OrganizationCreateInput>
  ): Promise<IServiceResponse<{ registrationSuccess: boolean }>> {
    const organization = req.body;

    await this.create(organization);

    return { payload: { registrationSuccess: true } };
  }
}

export const toIOrganization = async () => {};
