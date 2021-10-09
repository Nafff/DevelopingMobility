import { useState } from "react";

import React from "react";
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

const drawerWidth = 240;

export default function Layout(props) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const unauthenticatedOptions = (
    <>
      <Typography color="textPrimary" variant="h5">
        No Current User
      </Typography>
      <Typography color="textSecondary" variant="body2">
        <Link href="/login">Login</Link>
      </Typography>
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
              variant="h4"
              noWrap
              component="div"
              marginLeft="auto"
              fontFamily="'Didact Gothic', sans-serif;"
            >
              DevelopingMobility
            </Typography>
            <img
              src="https://res.cloudinary.com/dy6xpqkkj/image/upload/c_fill,g_north,h_95,w_150,x_0,y_0/v1633639529/DevelopingMobility/f00225dbda284b8e8d0300962a571784_3_fdiiaz.png"
              alt="logo"
            />
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            ml: `${drawerWidth * 2}px`,
          }}
        >
          <Toolbar />
          {props.children}
        </Box>
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
            {/* <Avatar
              component={RouterLink}
              src={props.currentUser.profile_picture}
              sx={{
                cursor: "pointer",
                width: 64,
                height: 64,
              }}
              to="/app/account"
            /> */}
            {props.currentUser ? (
              <Avatar
                alt="Profile Picture"
                src={props.currentUser.profile_picture}
              />
            ) : (
              <></>
            )}
            {props.currentUser ? (
              <>
                <Typography color="textPrimary" variant="h5">
                  {props.currentUser.username}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Logged In
                </Typography>
              </>
            ) : (
              unauthenticatedOptions
            )}
          </Box>
          <Divider />
          <List>
            <Link href="/home">
              <ListItem button>
                <ListItemText primary="Getting Started" />
              </ListItem>
            </Link>
            <Link href="/stretches">
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
              {/* <Typography sx={{ color: "text.secondary" }}>
                  I am an accordion
                </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>Test</ListItem>
              </List>
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
              {/* <Typography sx={{ color: "text.secondary" }}>
                  You are currently not an owner
                </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>Test</ListItem>
              </List>
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
              {/* <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled for whole web server
                </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>Test</ListItem>
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
              <List>
                <ListItem>Test</ListItem>
              </List>
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
              <List>
                <ListItem>Test</ListItem>
              </List>
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
              <List>
                <ListItem>Test</ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Drawer>
      </Box>
    </div>
  );
}
