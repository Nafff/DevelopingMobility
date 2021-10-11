import { useEffect } from "react";

import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { verifyUser } from "../../services/auth";

export default function UserProfile(props) {
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      props.setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  return (
    <>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Stack direction="row" spacing={10}>
            <Avatar
              alt="Remy Sharp"
              src={props.currentUser?.profile_picture}
              sx={{ width: 200, height: 200 }}
            />
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Typography
                variant="h4"
                align="center"
                color="text.secondary"
                paragraph
              >
                {props.currentUser?.username}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                paragraph
              >
                {props.currentUser?.email}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                paragraph
              >
                {props.currentUser?.description}
              </Typography>
              <Link href={`/users/${props.currentUser?.id}/edit`}>
                <Button variant="contained">Edit Profile</Button>
              </Link>
            </Stack>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ padding: 3 }}>
          <List>
            {props.routines
              ?.filter((routine) => routine.user_id === props.currentUser?.id)
              .map((routine) => (
                <div>
                  <ListItem
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => props.handleRoutineDelete(routine.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <Link href={`/routines/${routine.id}`}>
                      <ListItemText primary={routine.name} />
                    </Link>
                  </ListItem>
                </div>
              ))}
          </List>
          {/* <Link href={`/routines/${props.routines.length + 1}/edit`}> */}
          <Button variant="contained" onClick={props.handleRoutineCreate}>
            New Routine
          </Button>
          {/* </Link> */}
        </Paper>
      </Grid>
    </>
  );
}
