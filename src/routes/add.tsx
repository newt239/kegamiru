import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, Slider, TextField } from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import H5 from "#/components/H5";

export const Route = createFileRoute("/add")({
  component: () => {
    const navigate = useNavigate({ from: "/" });
    return (
      <>
        <Box px={2}>
          <H5>ケガをした場所</H5>
          <TextField
            fullWidth
            id="outlined-multiline-flexible"
            multiline
            rows={4}
          />
          <H5>痛みの強さ</H5>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            marks
            max={110}
            min={10}
            shiftStep={30}
            step={10}
            valueLabelDisplay="auto"
          />
          <H5>痛みの深さ</H5>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            marks
            max={110}
            min={10}
            shiftStep={30}
            step={10}
            valueLabelDisplay="auto"
          />
          <Button
            fullWidth
            onClick={() => navigate({ to: "/list" })}
            startIcon={<AddCircleOutlineIcon />}
            sx={{ mt: 2 }}
            variant="contained"
          >
            登録する
          </Button>
        </Box>
      </>
    );
  },
});
