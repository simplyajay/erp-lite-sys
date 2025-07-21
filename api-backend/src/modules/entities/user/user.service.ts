import BaseRepository from "@/modules/repositories/base.repository";
import { User, Product, Document, DocumentProduct, Prisma } from "@prisma/client";
import { IUser } from "./user";
import { IServiceResponse } from "@/core/services/services";
import { Request } from "express";
import { hashPassword } from "@/core/services/hash.service";
import { toIProduct } from "../product/product.service";
import { toIDocument } from "../documents/document.service";

export default class UserService extends BaseRepository<
  User,
  Prisma.UserCreateInput,
  Prisma.UserUpdateInput
> {
  constructor() {
    super("user");
  }

  async register(
    req: Request<any, any, Prisma.UserCreateInput>
  ): Promise<IServiceResponse<{ registrationSucess: boolean }>> {
    const user = req.body;

    const hashedPassword = await hashPassword(user.password);

    const newUser = { ...user, password: hashedPassword };

    await this.create(newUser);

    return { payload: { registrationSucess: true } };
  }

  async currentUser(req: Request): Promise<IServiceResponse<IUser | undefined>> {
    const { _id } = req.user;

    const user = await this.findOne(_id);

    if (!user) return { payload: undefined };

    const currentUser = toIUser(user);

    return { payload: currentUser };
  }
}

export const toIUser = (
  user: User & { products?: Product[]; documents?: (Document & { products: DocumentProduct[] })[] }
): IUser => {
  return {
    id: user.id,
    orgId: user.orgId ?? null,
    products: user.products?.map(toIProduct) ?? null,
    documents: user.documents?.map(toIDocument) ?? null,
    username: user.username,
    firstname: user.firstname,
    middlename: user.middlename ?? null,
    lastname: user.lastname,
    email: user.email,
    phone: user.phone ?? null,
    image: user.image ?? null,
    role: user.role,
  };
};
