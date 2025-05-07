import { useState } from "react";
import validationRules from "../utils/validationRules";
import { TextField } from "@mui/material";

const InputField = ({
  name,
  value,
  required = false,
  validationKey,
  onChange,
}) => {
  const [error, setError] = useState("");
  const rule = validationRules[validationKey] || {};
  const label = rule.label || name;
  const handleBlur = () => {
    if (required && !value.trim()) {
      setError(`${label} is required`);
      return;
    }

    if (rule.regex && !rule.regex.test(value)) {
      setError(rule.errorMessage || `${label} is invalid`);
      return;
    }

    setError("");
  };

  const handleInputChange = (e) => {
    const value = e.target;
    //If the input is too long, typing is blocked.
    if (rule.maxLength && value.length > rule.maxLength) return;
    // If it's valid so far, update the form state.
    onChange(e);
    //If there was an error showing before, re-check validation
    if (error) handleBlur();
  };

  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      type="text"
      value={value}
      onChange={handleInputChange}
      onBlur={handleBlur}
      error={!!error}
      helperText={error}
      margin="normal"
      required={required}
      maxLength={rule.maxLength}
      variant="outlined"
    ></TextField>
  );
};

export default InputField;
