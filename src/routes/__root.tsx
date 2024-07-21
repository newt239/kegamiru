import { Box } from "@mui/material";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import BottomBar from "#/components/BottomNavigation";
import MenuAppBar from "#/components/menuAppBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <MenuAppBar />
      <Box p={2}>
        <Outlet />
      </Box>
      <BottomBar />
      <TanStackRouterDevtools />
    </>
  ),
});
