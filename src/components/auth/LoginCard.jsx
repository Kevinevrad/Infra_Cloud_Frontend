import { Grid, Paper, Box } from "@mui/material";
import LoginForm from "./LoginForm";
import LoginIllustration from "./LoginIllustration";

export default function LoginCard() {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "1100px",
        mx: "auto",
        width: "100%",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--color-white)",
      }}
    >
      <Grid container sx={{ minHeight: "600px" }}>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" alignItems="center" p={6}>
            <LoginForm />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* <LoginIllustration /> */}
        </Grid>
      </Grid>
    </Paper>
  );
}
