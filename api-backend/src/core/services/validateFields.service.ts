import userService from "../../modules/entities/user/user.service.js";
import organizationService from "../../modules/entities/organization/organization.service.js";
import createError from "http-errors";
import { Filter } from "bad-words";

export const validateUniqueness = async (entity = null, payload) => {
  if (!["user", "organization"].includes(entity)) {
    console.error("Unknown entity: ", entity);
    return;
  }

  const fieldsToValidate = ["username", "email"];
  const service = entity === "organization" ? organizationService : userService;

  for (const field of fieldsToValidate) {
    if (!payload?.[field]) continue;

    const value = payload[field];

    const exists = await service.fieldExists(field, value);

    if (exists) {
      const error = createError(409, `This ${field} is already taken.`);
      error.keyValue = { [field]: value };
      throw error;
    }
  }
};

export const validateProfanity = async (payload) => {
  const filter = new Filter();

  for (const [field, value] of Object.entries(payload)) {
    if (typeof value !== "string" || !value.trim()) continue;

    if (filter.isProfane(value)) {
      const error = createError(422, `Profanity is not allowed.`);
      error.keyValue = { [field]: value };
      throw error;
    }
  }
};
