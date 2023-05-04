import validator from "validator";

const validateInput = (props: { input: string; type: string }) => {
  switch (props.type) {
    case "email":
      return validator.isEmail(props.input);
    default:
      return;
  }
};

export default validateInput ;
