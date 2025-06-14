import * as Yup from "yup";

const businessDetails = Yup.object().shape({
  name: Yup.string()
    .transform((val) => val?.trim())
    .required("Company name is required"),
  email: Yup.string()
    .transform((val) => val?.trim())
    .email("Enter a valid email address")
    .required("Company email is required"),
  phone: Yup.string()
    .transform((val) => val?.trim())
    .matches(/^\d*$/, "Enter a valid mobile number") // Regex to ensure only digits
    .test("is-min-length", "Mobile Number should be between 10 to 12 digits", (value) => {
      if (!value) return true;
      return value.length >= 10 && value.length <= 12;
    }),
});

const personalInfo = Yup.object().shape({
  firstname: Yup.string()
    .transform((val) => val?.trim())
    .required("First name is required"),
  middlename: Yup.string()
    .transform((val) => val?.trim())
    .optional(),
  lastname: Yup.string()
    .transform((val) => val?.trim())
    .required(" Last name is required"),
  email: Yup.string()
    .transform((val) => val?.trim())
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .transform((val) => val?.trim())
    .optional(),
});

const accountInfo = Yup.object().shape({
  username: Yup.string()
    .transform((val) => val?.trim())
    .transform((val) => val?.trim())
    .required("Please enter your username")
    .min(4, "Username must be atleast 4 characters.")
    .max(15, "Username must not exceed 15 characters")
    .matches(/^[a-zA-Z0-9]*$/, "Username must only contain letters and numbers")
    .matches(/[a-zA-Z]/, "Username cannot be all numbers"),
  password: Yup.string()
    .transform((val) => val?.trim())
    .required("Please enter your password")
    .min(8, "Password must be atleast 8 characters"),
  confirmpassword: Yup.string().when("password", ([password], schema) => {
    const isValid = password && password.length >= 8;

    return isValid
      ? schema
          .required("Please confirm password")
          .oneOf([Yup.ref("password"), ""], "Passwords must match")
      : schema.notRequired();
  }),
});

const accountType = Yup.object().shape({
  accountType: Yup.string().required("Please select an account type."),
});

export const getValidationSchema = (flow) => {
  const schema = {
    accountType: accountType,
    businessInfo: Yup.object().shape({ organization: businessDetails }),
    personalInfo: Yup.object().shape({ user: personalInfo }),
    accountInfo: Yup.object().shape({ user: accountInfo }),
  };

  const currentSchema = schema[flow];
  if (!currentSchema) return Yup.object().shape({});

  return currentSchema;
};

export const flowMap = {
  accountType: 1,
  businessInfo: 2,
  personalInfo: 3,
  accountInfo: 4,
  review: 5,
  confirmed: 5,
};

export const validationMap = {
  2: {
    entity: "organization",
    fields: ["organization.email", "organization.name", "organization.phone"],
  },
  3: {
    entity: "user",
    fields: ["user.firstname", "user.middlename", "user.lastname", "user.phone", "user.email"],
  },
  4: {
    entity: "user",
    fields: ["user.username", "user.password"],
  },
};

export const REG_MIN_STEP = 1;
export const REG_MAX_STEP = 6;
