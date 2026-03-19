import { Typography, Box } from "@mui/material";

export default function LoginHeader() {
  return (
    <Box mb={3}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="var(--color-text-primary)"
      >
        Hello,
        <br />
        Welcome Back
      </Typography>

      <Typography variant="body2" mt={1} color="var(--color-text-secondary)">
        Hey, welcome back to your special place
      </Typography>
    </Box>
  );
}
