import { Box } from "@mui/material";
import LoginHeader from "./LoginHeader";
import LoginFields from "./LoginFields";

export default function LoginForm() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 420,
      }}
    >
      <LoginHeader />

      <LoginFields />
    </Box>
  );
}
