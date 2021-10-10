import React from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Stretches(props) {
  return (
    // <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
    // fix width issue
    <Paper style={{ maxHeight: 500, overflow: "auto" }}>
      <Box sx={{ flexGrow: 1, maxWidth: 1000, minWidth: 500 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Stretches
            </Typography>
            <Demo>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField fullWidth label="Name a stretch" id="fullWidth" />
              </Box>
              <List>
                {props.stretches.map((stretch) => (
                  <div>
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar
                          alt="Profile Picture"
                          src={stretch.picture_url}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={stretch.name}
                        secondary={stretch.muscle_worked}
                      />
                    </ListItem>
                  </div>
                ))}
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
