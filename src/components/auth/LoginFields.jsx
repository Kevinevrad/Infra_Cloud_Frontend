// prettier-ignore
import {Box,Checkbox,FormControlLabel,Typography,Alert,} from "@mui/material";
import { useAuthStore } from "../../store/authStore";

import Input from "../ui/Input";
import CustomButton from "../ui/CustomButton";
import { useEffect, useState } from "react";
import { loginFunction } from "../../config/api";

export default function LoginFields() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const login = useAuthStore((state) => state.login);

  // SERVER SIDE
  const [data, setData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    console.log("STATE : ", data);
    console.log("STATE ERROR :", serverError);
  }, [data, serverError]);

  // const goTo = useNavigate();
  const validateForm = () => {
    const newErrors = {};

    // VALIDATING THE EMAIL FIELD
    if (!email) {
      newErrors.email = "L'email est requis.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "L'email n'est pas valide.";
    }

    // VALIDATING THE PASSWORD FIELD
    if (!password) {
      newErrors.password = "Le mot de passe est requis.";
    } else if (password.length < 6) {
      newErrors.password = "Minimum 6 caractères.";
    }

    // SET ERRORS OR RETURN TRUE IF NO ERRORS
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    loginFunction({ email, password }, setData, setServerError, login);

    setEmail("");
    setPassword("");
  };

  return (
    <Box>
      <form action="#" onSubmit={(e) => onSubmit(e)}>
        <Input
          label="Email"
          inputValue={email}
          inputError={errors.email}
          type="text"
          onChanged={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          inputValue={password}
          onChanged={(e) => setPassword(e.target.value)}
          type="password"
          inputError={errors.password}
        />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Se souvenir de moi"
          />

          <Typography
            variant="body2"
            sx={{
              cursor: "pointer",
              color: "var(--color-primary)",
            }}
          >
            Password oublié?
          </Typography>
        </Box>
        {serverError && (
          <Alert
            severity="error"
            sx={{
              margin: "20px 0",
            }}
          >
            {serverError}
          </Alert>
        )}

        <CustomButton btnType={"submit"}>Se connecter</CustomButton>
      </form>

      {/* <Typography variant="body2" mt={3} color="var(--color-text-secondary)">
        Vous n'avez pas de compte?
        <span
          style={{
            color: "var(--color-primary)",
            fontWeight: 600,
            cursor: "pointer",
            marginLeft: 5,
          }}
        >
          Creer un compte
        </span>
      </Typography> */}
    </Box>
  );
}
