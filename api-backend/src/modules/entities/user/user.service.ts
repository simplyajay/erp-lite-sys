import BaseRepository from "@/modules/repositories/base.repository";
import { User, Product, Document, DocumentProduct } from "@prisma/client";
import { IUser, ICreateUser } from "./user";
import { IServiceResponse } from "@/core/services/services";
import { IProduct } from "../product/product";
import { IDocument } from "../documents/document";
import { Request } from "express";
import { hashPassword } from "@/core/services/hash.service";
import { toIProduct } from "../product/product.service";
import { toIDocument } from "../documents/document.service";

export default class UserService {
  private readonly userRepo = new BaseRepository<User, ICreateUser>("user");

  async register(
    req: Request<any, any, ICreateUser>
  ): Promise<IServiceResponse<{ registrationSucess: boolean }> | void> {
    const user = req.body;

    const pw = await hashPassword(user.password);

    const newUser = { ...user, password: pw };

    await this.userRepo.create(newUser);

    return { payload: { registrationSucess: true } };
  }

  async currentUser(req: Request): Promise<IServiceResponse<IUser | undefined> | void> {
    const { _id } = req.user;

    const user = await this.userRepo.findOne(_id);

    if (!user) return { payload: undefined };

    const currentUser = toIUser(user);

    return { payload: currentUser };
  }

  async getUserByIdentifier(identifier: string): Promise<IServiceResponse<User | undefined>> {
    if (!identifier) return { payload: undefined };

    const user = await this.userRepo.findByIdentifier(identifier);

    return { payload: user };
  }

  async isFieldTaken(
    field: string,
    value: string
  ): Promise<IServiceResponse<{ isFieldTaken: boolean }>> {
    if (!field) throw new Error("Field is not defined");

    const user = this.userRepo.findUnique(field, value);

    if (!user) return { payload: { isFieldTaken: false } };

    return { payload: { isFieldTaken: true } };
  }

  async getAllUsers(): Promise<IServiceResponse<{ users: IUser[] | undefined }>> {
    const usersOrig = await this.userRepo.findAll();

    if (!usersOrig) return { payload: { users: undefined } };

    const users = usersOrig.map((user) => toIUser(user));

    return { payload: { users } };
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

/*

class UserService {
  private userRepository: ModelRepository<IUser & Document>;

  constructor() {
    this.userRepository = new ModelRepository(User);
  }

  //THIS SHOULD NOT RETURN A PROMISE.

  async registerUser(req: Request) {
    const { password, ...rest } = req.body;
    const hashedPassword = await hashPassword(password);
    return await this.userRepository.create({ password: hashedPassword, ...rest });
  }

  async findAllUsers() {
    return await this.userRepository.findAll(null, { password: 0 });
  }

  async findUserById(req: Request) {
    const { id } = req.params;
    return await this.userRepository.findById(id, { password: 0 }); //exclude password
  }

  async findUserByIdentifier(req: Request) {
    const { identifier } = req.body || {};
    return await this.userRepository.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });
  }

  async findCurrentUser(req: Request) {
    const { _id } = req?.user;
    return await this.userRepository.findById(_id, { password: 0 });
  }

  async fieldExists(field: string = "", value: string = "") {
    if (field) return await this.userRepository.doesExist(field, value);

    return false;
  }
}

export default new UserService();

*/
