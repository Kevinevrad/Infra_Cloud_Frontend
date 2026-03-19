import Button from "@mui/material/Button";

export default function CustomButton({ children, btnClik, btnType }) {
  return (
    <Button
      type={btnType}
      onClick={btnClik}
      variant="contained"
      fullWidth
      sx={{
        mt: 2,
        py: 1.3,
        borderRadius: "var(--radius-md)",
        background: "var(--color-primary)",

        "&:hover": {
          background: "var(--color-primary-dark)",
        },
      }}
    >
      {children}
    </Button>
  );
}
