import React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "@mui/material/Link";

export default function Stretches(props) {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ maxHeight: "80vh", overflow: "auto" }}
        sx={{ padding: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography sx={{ mb: 2 }} variant="h6" component="div">
              Stretches
            </Typography>
              <TextField
                fullWidth
                label="Name a stretch"
                id="fullWidth"
                value={props.input}
                onChange={props.handleSearchStretchChange}
              />
            <List>
              {props.fitleredStretches.map((stretch) => (
                <Link href={`/stretches/${stretch.id}`}>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={stretch.picture_url} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={stretch.name}
                      secondary={stretch.muscle_worked}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
