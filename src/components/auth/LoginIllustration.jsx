import { Box } from "@mui/material";
import illustration from "../../assets/imgs/login.png";

export default function LoginIllustration() {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        minHeight: "600px",
        background: "var(--color-primary-light)",
      }}
    >
      <img
        src={illustration}
        style={{
          width: "40%",
        }}
      />
    </Box>
  );
}
