import BaseRepository from "@/modules/repositories/base.repository.js";
import { User, Organization, Product, BusinessEntity } from "@prisma/client";
import { Filter } from "bad-words";
import { ExpectedError } from "./services.js";

const isFieldTaken = async (
  service: BaseRepository<User | Organization | Product | BusinessEntity>,
  field: string,
  value: string
): Promise<{ isTaken: boolean }> => {
  if (!field) throw new Error("Field is undefined");

  const target = await service.findUnique(field, value);

  if (target) return { isTaken: true };

  return { isTaken: false };
};

export const validateUniqueness = async (
  service: BaseRepository<User | Organization | Product | BusinessEntity>,
  payload: Record<string, unknown>
): Promise<void> => {
  const fieldsToValidate = ["username", "email"];

  for (const field of fieldsToValidate) {
    const value = payload[field];

    if (typeof value !== "string" || !value.trim()) continue;

    const { isTaken } = await isFieldTaken(service, field, value);

    if (isTaken) {
      throw new ExpectedError(422, `This ${field} is already taken.`, field);
    }
  }
};

export const validateProfanity = async (payload: Record<string, unknown>): Promise<void> => {
  const filter = new Filter();

  for (const [field, value] of Object.entries(payload)) {
    if (typeof value !== "string" || !value.trim()) continue;

    if (filter.isProfane(value)) {
      throw new ExpectedError(422, `Profanity is not Allowed.`, field);
    }
  }
};
