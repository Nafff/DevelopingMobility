import React from "react";

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

export default function LandingPage() {
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
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "#F4EEF2",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don&apos;t simply skip over it entirely.
              </Typography>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="Work from home laptop."
                src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1633944742/DevelopingMobility/working_from_home_ll8yru.png"
              />
            </Stack>
            <Stack
              // sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
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
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Something short and leading about the collection below—its
                contents.
                <Stack
                  sx={{ pt: 1 }}
                  direction="column"
                  spacing={2}
                  justifyContent="center"
                >
                  <Link href="/home">
                    <Button variant="contained">Take a look around</Button>
                  </Link>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Link href="/login">
                      <Button variant="outlined">Login</Button>
                    </Link>
                    <Link href="/register">
                    <Button variant="outlined">Register</Button>
                    </Link>
                  </Stack>
                </Stack>
              </Typography>
            </Stack>
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
