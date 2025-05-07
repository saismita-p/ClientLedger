import CONSTANTS from "./Constants";

const validationRules = {
  email: {
    label: "Email",
    regex: CONSTANTS.REGEX.AlphaNumeric,
    maxLength: 50,
    errorMessage: "Please enter a valid email address. ",
  },

  phone: {
    label: "Phone",
    regex: CONSTANTS.REGEX.PhoneNumberRegex,
    maxLength: 10,
    errorMessage: "Phone number must be exactly 10 digits.",
  },

  name: {
    label: "Name",
    regex: CONSTANTS.REGEX.AlphaSpace,
    maxLength: 30,
    errorMessage: "Name must be 2-30 letters only.",
  },
};

export default validationRules;
