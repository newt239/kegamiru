import ImageIcon from "@mui/icons-material/Image";
import {
  Avatar,
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/list")({
  component: () => {
    const navigate = useNavigate({ from: "/" });
    return (
      <>
        <Box px={2}>
          <Typography variant="h4">ケガの記録</Typography>
        </Box>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItemButton onClick={() => navigate({ to: "/injure" })}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate({ to: "/injure" })}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate({ to: "/injure" })}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItemButton>
        </List>
      </>
    );
  },
});
