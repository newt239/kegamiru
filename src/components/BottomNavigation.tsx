import { useState } from "react";

import ArchiveIcon from "@mui/icons-material/Archive";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

export default function BottomBar() {
  const [value, setValue] = useState("home");

  return (
    <Paper
      elevation={3}
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        value={value}
      >
        <BottomNavigationAction
          icon={<HomeIcon />}
          label="ホーム"
          value="home"
        />
        <BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
        <BottomNavigationAction icon={<ArchiveIcon />} label="Archive" />
      </BottomNavigation>
    </Paper>
  );
}
