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

type EachEnjureProps = {
  position: string;
  date: string;
};

const EachEnjure: React.FC<EachEnjureProps> = ({ position, date }) => {
  const navigate = useNavigate({ from: "/" });

  return (
    <ListItemButton onClick={() => navigate({ to: "/injure" })}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={position} secondary={date} />
    </ListItemButton>
  );
};

const injures: EachEnjureProps[] = [
  { position: "右ヒザ", date: "7月21日(日)" },
  { position: "肩", date: "7月13日(土)" },
  { position: "右ヒザ", date: "6月28日(金)" },
  { position: "左手の小指", date: "6月15日(土)" },
  { position: "左足首", date: "6月10日(月)" },
];

export const Route = createFileRoute("/list")({
  component: () => {
    return (
      <>
        <Box px={2}>
          <Typography variant="h4">ケガの記録</Typography>
        </Box>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {injures.map((injure, index) => (
            <EachEnjure
              date={injure.date}
              key={index}
              position={injure.position}
            />
          ))}
        </List>
      </>
    );
  },
});
