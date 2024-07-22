import AddIcon from "@mui/icons-material/Add";
import { Fab, Stack } from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import bodyImage from "#/assets/body.jpg";
import Marker from "#/components/Marker";

export const Route = createFileRoute("/")({
  component: () => {
    const navigate = useNavigate({ from: "/" });
    return (
      <>
        <Stack sx={{ position: "relative" }}>
          <img alt="aa" src={bodyImage} />
          <Marker left="25%" top="75%" />
        </Stack>
        <Fab
          aria-label="add"
          color="primary"
          onClick={() => navigate({ to: "/add" })}
          sx={{ position: "fixed", bottom: "72px", right: "18px" }}
        >
          <AddIcon />
        </Fab>
      </>
    );
  },
});
