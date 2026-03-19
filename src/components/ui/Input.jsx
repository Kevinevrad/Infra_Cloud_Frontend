import { TextField, Alert } from "@mui/material";

export default function Input({
  label,
  inputValue,
  inputError,
  type = "text",
  onChanged,
}) {
  return (
    <div>
      <TextField
        error={inputError}
        value={inputValue}
        label={label}
        type={type}
        fullWidth
        margin="normal"
        onChange={onChanged}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "var(--radius-md)",

            "& fieldset": {
              borderColor: "var(--color-border)",
            },

            "&:hover fieldset": {
              borderColor: "var(--color-primary)",
            },

            "&.Mui-focused fieldset": {
              borderColor: "var(--color-primary)",
            },
          },
        }}
      />
      {inputError && <Alert severity="error">{inputError}</Alert>}
    </div>
  );
}
