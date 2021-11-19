import { useState, useEffect } from "react";

import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const drawerWidth = {
  width: "240px",
  "@media(minWidth: 780px)": {
    width: "120px",
  },
};

export default function Layout(props) {
  const [expanded, setExpanded] = useState(false);
  const [isLoaded, setLoaded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    setLoaded(true)
  }, [props.currentUser])

  const unauthenticatedOptions = (
    <>
      <Avatar
        alt="Default Profile Picture"
        src={
          "https://res.cloudinary.com/dy6xpqkkj/image/upload/c_lfill,g_north,h_140,w_200,x_0/v1633639529/DevelopingMobility/f00225dbda284b8e8d0300962a571784_2_sru2dk.png"
        }
      />
      <Typography color="textPrimary" variant="h5">
        Welcome, Please Sign Up
      </Typography>
      <Stack spacing={2} direction="row">
        <Link href={`/login`}>
          <Button variant="contained">Log In</Button>
        </Link>
        <Link href={`/register`}>
          <Button variant="contained">Sign Up</Button>
        </Link>
      </Stack>
    </>
  );

  const authenticatedOptions = (
    <>
      <Avatar alt="Profile Picture" src={props.currentUser?.profile_picture} />
      <Typography color="textPrimary" variant="h5">
        Welcome, {props.currentUser?.username}
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={props.handleLogout}>
          Logout
        </Button>
        <Link href={`/users/${props.currentUser?.id}`}>
          <Button variant="contained">Dashboard</Button>
        </Link>
      </Stack>
    </>
  );

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography
              marginRight="-25px"
              variant="h4"
              noWrap
              component="div"
              marginLeft="auto"
              fontFamily="'Didact Gothic', sans-serif;"
              letterSpacing="6px"
            >
              DevelopingMobility
            </Typography>
            <img
              src="https://res.cloudinary.com/dy6xpqkkj/image/upload/c_fill,g_north,h_95,w_150,x_0,y_0/v1633639529/DevelopingMobility/f00225dbda284b8e8d0300962a571784_3_fdiiaz.png"
              alt="logo"
            />
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#8D7C95",
            },
          }}
          variant="permanent"
          anchor="left"
          open
        >
          <Toolbar />
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              p: 2,
            }}
          >
            {/* {props.currentUser ? (
              <Avatar
                alt="Profile Picture"
                src={props.currentUser.profile_picture}
              />
            ) : (
              <>
                <Avatar
                  alt="Default Profile Picture"
                  src={
                    "https://res.cloudinary.com/dy6xpqkkj/image/upload/c_lfill,g_north,h_140,w_200,x_0/v1633639529/DevelopingMobility/f00225dbda284b8e8d0300962a571784_2_sru2dk.png"
                  }
                />
              </>
            )}
            {props.currentUser ? (
              <>
                <Typography color="textPrimary" variant="h5">
                  Welcome, {props.currentUser.username}
                </Typography>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" onClick={props.handleLogout}>
                    Logout
                  </Button>
                  <Link href={`/users/${props.currentUser.id}`}>
                    <Button variant="contained">Dashboard</Button>
                  </Link>
                </Stack>
              </>
            ) : (
              unauthenticatedOptions
            )} */}
            {isLoaded ? authenticatedOptions : unauthenticatedOptions}
          </Box>
          <Divider />
          <List>
            <Link
              href="/welcome"
              sx={{ color: "inherit", textDecoration: "inherit" }}
            >
              <ListItem button>
                <ListItemText primary="Getting Started" />
              </ListItem>
            </Link>
            <Link
              href="/stretches"
              sx={{ color: "inherit", textDecoration: "inherit" }}
            >
              <ListItem button>
                <ListItemText primary="All Stretches" />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              bgcolor: "#8D7C95",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>Neck</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem>
                <Button
                  button
                  value="Levator Scapulae"
                  onClick={props.handleSidebarStretchChange}
                >
                  Levator Scapulae
                </Button>
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              bgcolor: "#8D7C95",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Shoulders
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem>
                <Button
                  button
                  value="Rotator Cuffs"
                  onClick={props.handleSidebarStretchChange}
                >
                  Rotator Cuffs
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  button
                  value="Anterior Deltoids"
                  onClick={props.handleSidebarStretchChange}
                >
                  Anterior Deltoids
                </Button>
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              bgcolor: "#8D7C95",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>Back</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <Button
                    button
                    value="Trapezius"
                    onClick={props.handleSidebarStretchChange}
                  >
                    Trapezius
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    button
                    value="Latissimus Dorsi"
                    onClick={props.handleSidebarStretchChange}
                  >
                    Latissimus Dorsi
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    button
                    value="Rhomboids"
                    onClick={props.handleSidebarStretchChange}
                  >
                    Rhomboids
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    button
                    value="Erector Spine"
                    onClick={props.handleSidebarStretchChange}
                  >
                    Erector Spine
                  </Button>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{
              bgcolor: "#8D7C95",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>Arms</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem>
                <Button
                  button
                  value="Biceps"
                  onClick={props.handleSidebarStretchChange}
                >
                  Biceps
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  button
                  value="Triceps"
                  onClick={props.handleSidebarStretchChange}
                >
                  Triceps
                </Button>
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            sx={{
              bgcolor: "#8D7C95",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Chest
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem>
                <Button
                  button
                  value="Pectoral"
                  onClick={props.handleSidebarStretchChange}
                >
                  Pectoral
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  button
                  value="Serratus Anterior"
                  onClick={props.handleSidebarStretchChange}
                >
                  Serratus Anterior
                </Button>
              </ListItem>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            sx={{
              bgcolor: "#8D7C95",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>Legs</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem>
                <Button
                  button
                  value="Hamstrings"
                  onClick={props.handleSidebarStretchChange}
                >
                  Hamstrings
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  button
                  value="Quadriceps"
                  onClick={props.handleSidebarStretchChange}
                >
                  Quadriceps
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  button
                  value="Gluteus Maximus"
                  onClick={props.handleSidebarStretchChange}
                >
                  Gluteus Maximus
                </Button>
              </ListItem>
            </AccordionDetails>
          </Accordion>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#F4EEF2",
            height: "100vh",
            p: 3,
            marginTop: "3%",
          }}
        >
          <Toolbar />
          {props.children}
        </Box>
      </Box>
    </div>
  );
}
