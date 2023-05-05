import validator from "validator";

export const validateInput = (input: string, type: string): boolean => {
  switch (type) {
    case "email":
      return validator.isEmail(input);
    default:
      return false;
  }
};
