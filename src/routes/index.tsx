import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Stack } from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import bodyImage from "#/assets/body.png";
import H4 from "#/components/H4";
import H5 from "#/components/H5";
import Marker from "#/components/Marker";

export const Route = createFileRoute("/")({
  component: () => {
    const navigate = useNavigate({ from: "/" });
    return (
      <>
        <Box px={2}>
          <H4>ケガミル</H4>
        </Box>
        <Box pt={6} px={2}>
          <H5>ケガマップ</H5>
        </Box>
        <Stack sx={{ position: "relative" }}>
          <img alt="aa" src={bodyImage} />
          <Marker left="23%" top="65%" />
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
