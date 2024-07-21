import AddIcon from "@mui/icons-material/Add";
import { Fab, Stack } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

import bodyImage from "#/assets/body.jpg";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Stack>
        <img alt="aa" src={bodyImage} />
      </Stack>
      <Fab
        aria-label="add"
        color="primary"
        sx={{ position: "fixed", bottom: "72px", right: "18px" }}
      >
        <AddIcon />
      </Fab>
    </>
  ),
});
