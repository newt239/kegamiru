import AddIcon from "@mui/icons-material/Add";
import { Fab, Stack } from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import bodyImage from "#/assets/body.jpg";

export const Route = createFileRoute("/")({
  component: () => {
    const navigate = useNavigate({ from: "/" });
    return (
      <>
        <Stack>
          <img alt="aa" src={bodyImage} />
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
