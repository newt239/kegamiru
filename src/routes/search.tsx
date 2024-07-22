import ImageIcon from "@mui/icons-material/Image";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import H4 from "#/components/H4";

type EachEnjureProps = {
  icon: React.ReactNode;
  name: string;
  description: string;
};

const EachEnjure: React.FC<EachEnjureProps> = ({ icon, name, description }) => {
  const navigate = useNavigate({ from: "/" });

  return (
    <ListItemButton onClick={() => navigate({ to: "/injure" })}>
      <ListItemAvatar>
        <Avatar>{icon}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={description} />
    </ListItemButton>
  );
};

const injures: EachEnjureProps[] = [
  { icon: <ImageIcon />, name: "ウサギ", description: "7月21日(日)" },
  { icon: <ImageIcon />, name: "ネコ", description: "7月13日(土)" },
  { icon: <ImageIcon />, name: "イヌ", description: "6月28日(金)" },
  { icon: <ImageIcon />, name: "クマ", description: "6月15日(土)" },
  { icon: <ImageIcon />, name: "タヌキ", description: "6月10日(月)" },
];

export const Route = createFileRoute("/search")({
  component: () => (
    <>
      <Box pr={2}>
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel>キーワードで検索</InputLabel>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            fullWidth
            label="キーワードで検索"
          />
        </FormControl>
      </Box>
      <Box px={2}>
        <H4>ヒザの検索結果</H4>
      </Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {injures.map((injure, index) => (
          <EachEnjure
            description={injure.description}
            icon={injure.icon}
            key={index}
            name={injure.name}
          />
        ))}
      </List>
    </>
  ),
});
