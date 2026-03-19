import { Box } from "@mui/material";
import LoginCard from "../components/auth/LoginCard";

export default function Login() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--color-background)",
        p: 2,
      }}
    >
      <LoginCard />
    </Box>
  );
}
