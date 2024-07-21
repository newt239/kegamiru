import { useEffect, useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

export default function BottomBar() {
  const [value, setValue] = useState("home");
  const navigate = useNavigate({ from: "/" });

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setValue("home");
        break;
      case "/list":
        setValue("list");
        break;
      case "/search":
        setValue("search");
        break;
    }
  }, [window.location.pathname]);

  return (
    <Paper
      elevation={3}
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate({ to: `/${newValue !== "home" ? newValue : ""}` });
        }}
        showLabels
        value={value}
      >
        <BottomNavigationAction
          icon={<HomeIcon />}
          label="ホーム"
          value="home"
        />
        <BottomNavigationAction icon={<ListIcon />} label="履歴" value="list" />
        <BottomNavigationAction
          icon={<SearchIcon />}
          label="検索"
          value="search"
        />
      </BottomNavigation>
    </Paper>
  );
}
