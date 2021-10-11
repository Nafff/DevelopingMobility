import React from 'react'
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import Link from "@mui/material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function EditUserProfile(props) {
  return (
    <Grid item xs={12}>
        <Paper elevation={3}>
          <h1>{props.currentUser?.username}</h1>
          <Avatar
            alt="Remy Sharp"
            src={props.currentUser?.profile_picture}
            sx={{ width: 100, height: 100 }}
          />
          <h3>{props.currentUser?.age}</h3>
          <h3>{props.currentUser?.description}</h3>
          <Link href={`/users/${props.currentUser?.id}/edit`}>
            <Button variant="contained">Save Changes</Button>
          </Link>
        </Paper>
      </Grid>
  )
}
