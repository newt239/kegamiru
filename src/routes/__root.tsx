import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import MenuAppBar from "#/components/menuAppBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <MenuAppBar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
