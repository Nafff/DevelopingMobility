import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
import TextField from "@mui/material/TextField";

export default function EditUserProfile(props) {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    profile_picture: "",
    description: "",
  });
  const { id } = useParams();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const prefillFormData = () => {
      setFormData({
        username: props.currentUser?.username,
        age: props.currentUser?.age,
        profile_picture: props.currentUser?.profile_picture,
        description: props.currentUser?.description,
      });
    };
    if (props.currentUser) {
      prefillFormData();
      setLoaded(true);
    }
  }, [props.currentUser, id]);

  const handleChange = (e) => {
    const { label, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [label]: value,
    }));
  };

  console.log(formData);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Grid item xs={12}>
      <Paper elevation={3}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleFoodUpdate(id, formData);
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={props.currentUser?.profile_picture}
            sx={{ width: 250, height: 250 }}
          />
          <TextField
            required
            id="filled-required"
            label="Username"
            defaultValue={`${formData?.username}`}
            variant="filled"
            onChange={handleChange}
          />
          <TextField
            required
            id="filled-required"
            label="Age"
            defaultValue={props.currentUser?.age}
            variant="filled"
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">Save Changes</Button>
        </form>
      </Paper>
    </Grid>
  );
}
