import { Box, Button, Slider, TextField, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/add")({
  component: () => (
    <>
      <Box px={2}>
        <Typography variant="h5">ケガをした場所</Typography>
      </Box>
      <TextField
        fullWidth
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        rows={4}
      />
      <Typography variant="h5">痛みの強さ</Typography>
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

      <Typography variant="h5">痛みの深さ</Typography>
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

      <Button fullWidth variant="contained">
        登録する
      </Button>
    </>
  ),
});
