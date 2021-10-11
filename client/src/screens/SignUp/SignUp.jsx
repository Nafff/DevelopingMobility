import { useState } from "react";

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        DevelopingMobility
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    description: "Add some info about you! Edit your profile below.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ height: 100 }}>
        <Toolbar>
          <img
            src="https://res.cloudinary.com/dy6xpqkkj/image/upload/c_fill,g_north,h_95,w_150,x_0,y_0/v1633639529/DevelopingMobility/f00225dbda284b8e8d0300962a571784_3_fdiiaz.png"
            alt="logo"
          />
          <Typography
            component="h1"
            variant="h2"
            align="center"
            fontFamily="'Didact Gothic', sans-serif;"
            letterSpacing="6px"
          >
            DevelopingMobility
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "#F4EEF2",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <form>
              <Stack
                sx={{ pt: 4 }}
                direction="column"
                spacing={2}
                justifyContent="center"
              >
                <TextField
                  required
                  id="filled-required"
                  label="Username"
                  name="username"
                  defaultValue=""
                  variant="filled"
                  onChange={handleChange}
                />
                <TextField
                  required
                  id="filled-required"
                  label="Email"
                  name="email"
                  defaultValue=""
                  variant="filled"
                  onChange={handleChange}
                />
                <TextField
                  required
                  id="filled-required"
                  label="Password"
                  name="password"
                  defaultValue=""
                  variant="filled"
                  onChange={handleChange}
                />
                <TextField
                  required
                  id="filled-required"
                  label="Confirm Password"
                  name="confirmPassword"
                  defaultValue=""
                  variant="filled"
                />
              </Stack>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Box
                  component="img"
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 500, md: 500 },
                    maxWidth: { xs: 500, md: 500 },
                  }}
                  alt="Stretching at home."
                  src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633944672/DevelopingMobility/Exercising_at_home_xmazyy.png"
                />
                <Stack
                  sx={{ pt: 1 }}
                  direction="column"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="contained">Create Account</Button>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    Time to stretch
                  </Typography>
                </Stack>
              </Stack>
            </form>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "#F4EEF2", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Congratulations Chickadees!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Thank you for your visit, have a wonderful day
        </Typography>
        <Copyright />
      </Box>
    </>
  );
}
