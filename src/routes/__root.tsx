import { Box, createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createRootRoute, Outlet } from "@tanstack/react-router";

import AppIconModal from "#/components/AppIconModal";
import BottomBar from "#/components/BottomNavigation";
import MenuAppBar from "#/components/menuAppBar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5487C2",
    },
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      "Arial",
      '"Hiragino Kaku Gothic ProN"',
      '"Hiragino Sans"',
      "Meiryo",
      "sans-serif",
    ].join(","),
  },
});

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MenuAppBar />
        <Box pb="80px" pt="66px">
          <Outlet />
        </Box>
        <BottomBar />
        <AppIconModal />
      </LocalizationProvider>
    </ThemeProvider>
  ),
});
