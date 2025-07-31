import { IExpectedError } from "@/core/services/services";

type AccountType = "organization" | "individual";
export type FlowKey = "accountType" | "businessInfo" | "personalInfo" | "accountInfo";
export const FlowMap: FlowKey[] = ["accountType", "businessInfo", "personalInfo", "accountInfo"];

export interface IRegistrationData {
  identity: string;
  completedSteps: FlowKey[];
  accountType?: AccountType;
  businessInfo?: Record<string, unknown>;
  personalInfo?: Record<string, unknown>;
  accountInfo?: Record<string, unknown>;
}

export type TOrganizationRegister = {
  name: string;
  email: string;
  phone?: string;
};

export type TUserRegister = {
  firstname: string;
  middlename?: string;
  lastname: string;
  email: string;
  phone?: string;
  username: string;
  password: string;
};

export interface IRegistrationRequestPayload {
  accountType: AccountType;
  user: TUserRegister;
  organization: TOrganizationRegister;
}

export interface IOverwriteRegistration {
  name: string;
  sid: string;
  currentSession: IRegistrationData;
}

export interface IFieldError extends Partial<IExpectedError> {
  isValid: boolean;
}

export interface ISetRegistrationDataOption {
  name: string;
  sid: string;
  newData?: IRegistrationData;
  options?: { _maxAge?: number };
}
