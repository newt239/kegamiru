import { useState } from "react";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ImageIcon from "@mui/icons-material/Image";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import bodyImage from "#/assets/body.jpg";
import H4 from "#/components/H4";
import Marker from "#/components/Marker";

type EachEnjureProps = {
  icon: React.ReactNode;
  name: string;
  description: string;
};

const EachEnjure: React.FC<EachEnjureProps> = ({ icon, name, description }) => {
  const navigate = useNavigate({ from: "/" });

  return (
    <ListItemButton onClick={() => navigate({ to: "/other-injure" })}>
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
  component: () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate({ from: "/" });
    return (
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
              onChange={(event) => setValue(event.target.value)}
              value={value}
            />
          </FormControl>
        </Box>
        {value === "ヒザ" ? (
          <>
            <Box px={2}>
              <H4>ヒザの検索結果</H4>
            </Box>
            <Stack direction="row" justifyContent="space-between" px={2}>
              <Button startIcon={<SortIcon />} variant="text">
                新しい順
              </Button>
              <Button startIcon={<FilterAltIcon />} variant="text">
                絞り込み
              </Button>
            </Stack>
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
        ) : (
          <Stack sx={{ position: "relative" }}>
            <img alt="aa" src={bodyImage} />
            <Marker left="25%" onClick={() => setValue("ヒザ")} top="75%" />
            <Marker left="7%" top="58%" />
            <Marker left="24%" top="93%" />
            <Marker left="13%" top="22%" />
          </Stack>
        )}
      </>
    );
  },
});
